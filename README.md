# ScriptAssist
## An authorial assist tool for Conversation Designers

An authorial assist tool developed for Xandra, Inc., to assist Conversation Designers in writing character-driven dialogue. ScriptAssist is intended as a prototype for a future tool which would allow writers to generate turns of dialogue based on selected personality traits. In this initial iteration, the styles of well-known authors are used as stand-ins for personality.

The ScriptAssist tool manipulates GPT-2 into behaving like a chatbot by appending turns of dialog to the model's context. A block of boilerplate dialog from the selected author is included initially to teach the model to write in the desired style, and additional turns provided by the user are added as they are written. Given this context, GPT-2 will generate lines of dialog appropriate to any prior turns authored in the tool, in the voice of the writer chosen by the user.

The nlg-api does the work of initializing and running GPT-2 using ```tensorflow``` and ```gpt_2_simple```. Context files are located in ```/nlg-api/contexts```. If a model has not been added manually, 117M is downloaded by default into the ```./models``` directory. This is the smallest GPT-2 model, and was selected to keep turn generation time to a minimum for ease of use, with the trade-off that the text produced may be less polished than it would be with a larger version. The 117M files may be replaced within ```./models``` if a larger model is preferred.

Once the nlg-api is running, it can be invoked by the React frontend included in ```/interface/```. Within the interface, users may write and edit their own turns of dialog, add additional turns, and auto-fill turns in their selected style using GPT-2. The system will remember character names input by the user and auto-fill them in alternating turns. The full script may be downloaded as a .txt file when editing is complete.


## Usage

```
pip install -r requirements.txt
```

![](https://github.com/sarah-schmoller/ScriptAssist/blob/main/demo.gif)