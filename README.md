# ScriptAssist
## An authorial assist tool for Conversation Designers

An authorial assist tool developed for Xandra, Inc., to assist Conversation Designers in writing character-driven dialogue. ScriptAssist is intended as a prototype for a future tool which would allow writers to generate turns of dialogue based on selected personality traits. In this initial iteration, the styles of well-known authors are used as stand-ins for personality.

The ScriptAssist tool manipulates GPT-2 into behaving like a chatbot by appending turns of dialog to the model's context. A block of boilerplate dialog from the selected author is included initially to teach the model to write in the desired style, and additional turns provided by the user are added as they are written. Given this context, GPT-2 will generate lines of dialog appropriate to any prior turns authored in the tool, in the voice of the writer chosen by the user.

The nlg-api does the work of initializing and running GPT-2 using ```tensorflow``` and ```gpt_2_simple```. Context files are located in ```/nlg-api/contexts```. If a model has not been added manually, 117M is downloaded by default into the ```/nlg-api/models``` directory. This is the smallest GPT-2 model and was selected to keep turn generation time to a minimum, with the trade-off that the text produced will be less polished than it might be with a larger version. The 117M files may be replaced within ```/nlg-api/models``` if a larger model is preferred.

Once the nlg-api is running, it can be invoked by the React frontend included in ```/interface```. Within the interface, users may write and edit their own turns of dialog, add additional turns, and auto-generate turns in their selected style. The system will remember character names input by the user and auto-fill them in alternating turns. The full script may be downloaded as a .txt file when editing is complete.


## Usage

ScriptAssist is not currently hosted online, but it may be used locally. This requires that you open two separate terminals, one to run the nlg-api and the other to run the user interface. The following startup processes have been tested on macOS Catalina.

[1] Open a terminal and navigate to the nlg-api directory in the ScriptAssist repo.

[2] Install the dependencies in requirements.txt by executing ```pip install -r requirements.txt```.

[3] Execute ```python scriptbot.py``` to start the nlg-api. The api should now be running on ```http://127.0.0.1:5000```. Port 5000 is the default port used by Flask; if your api is running elsewhere, make a note of the location.

[4] Open a second terminal, and navigate to the ```/interface``` directory in the ScriptAssist repo.

[5] Run ```npm i``` from the ```/interface``` directory to install the required Javascript dependencies.

[6] Run ```npm start``` from the ```/interface``` directory to start the React app. The application should open in your browser.

[7] If your nlg-api is not running on port 5000, you will need to update the ```nlgApiBaseUrl``` in ```/interface/src/components/config.js```. The application will hit the nlg-api when you click ```Auto``` to auto-generate a turn of text.


![](https://github.com/sarah-schmoller/ScriptAssist/blob/main/demo.gif)