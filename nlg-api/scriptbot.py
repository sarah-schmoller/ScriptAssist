import json
import string
import numpy as np
import tensorflow.compat.v1 as tf
import gpt_2_simple as gpt2
from modules import download_model
from os.path import exists

import flask
from flask_cors import CORS

app = flask.Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['POST'])
def main():
    print(flask.request.json)
    style = flask.request.json["style"];
    previous = flask.request.json["context"];
    print(style)
    print(previous)
    if not exists('./models'):
        load_model()

    while True:
        try:

            batch_size = 1

            encoder = get_encoder() if not "encoder" in flask.session else flask.session["encoder"]

            hparams = get_hparams() if not "hparams" in flask.session else flask.session["hparams"]

            session = get_session() if not "session" in flask.session else flask.session["session"]

            context = get_context() if not "context" in flask.session else flask.session["context"]

            tf_sample = get_sample(hparams, context, batch_size) if not "tf_sample" in flask.session else flask.session["tf_sample"]

            saver = get_saver() if not "saver" in flask.session else flask.session["saver"]

            text = generate_text(style, previous, encoder, hparams, session, tf_sample, saver, context, batch_size)

        except:

            continue

        break


    return "{\"response\": \"" + text + "\"}"


def load_model():
    download_model.download('117M')


def get_encoder():
    return gpt2.src.encoder.get_encoder('./models/117M')


def get_hparams():
    hparams = gpt2.src.model.default_hparams()
    with open('models/117M/hparams.json') as f:
        hparams.override_from_dict(json.load(f))

    return hparams


def get_session():
    session = tf.Session(graph=tf.Graph())
    session.__enter__()
    return session


def get_saver():
    return tf.compat.v1.train.Saver(max_to_keep=1)


def get_context():
    return tf.placeholder(tf.int32, [1, None])


def get_sample(hparams, context, batch_size):

    np.random.seed(None)
    tf.set_random_seed(None)
    tf_sample = gpt2.src.sample.sample_sequence(
        hparams=hparams,
        length=150,
        start_token=None,
        context=context,
        batch_size=batch_size,
        temperature=1.0,
        top_k=40)

    return tf_sample


def generate_text(style, previous, encoder, hparams, session, tf_sample, saver, context, batch_size):

    sample_length = hparams.n_ctx // 2
    if sample_length > hparams.n_ctx:
        raise ValueError("Can't get samples longer than window size: %s" % hparams.n_ctx)

    session.run(tf.compat.v1.global_variables_initializer())

    ckpt = tf.train.latest_checkpoint('./models/117M')
    saver.restore(session, ckpt)

    context_str = str(open("contexts/" + style + ".txt", "r").read())
    context_str = context_str + '\n' + previous
    print("context")
    print(context_str)
    context_tokens = encoder.encode(context_str)
    index = 0
    sample_num = 1
    while index < sample_num:
        out = session.run(tf_sample, feed_dict={context: batch_size * [context_tokens]})#[:, len(context_tokens):]
        for i in range(batch_size):
            text = encoder.decode(out[i])
            index += 1

    text = text.replace(context_str, '')

    tag_index = text.index(':')
    text = text[tag_index+1:]

    text = text.partition('\n')[0].strip()

    print(text)
    return text


if __name__ == "__main__":
    app.run()