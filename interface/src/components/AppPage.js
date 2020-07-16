
import React, {
} from 'react';
import '../styles/appPageStyles.css';
import config from './config.js';
import NlgApiService from '../services/nlgApiService.js';

const nlgApiService = new NlgApiService(config.nlgApiBaseUrl);

function AppPage() {

  function generateTurnText() {

    async function getText() {

      if (document.getElementById('loader').style.visibility === 'visible') {
        return;
      }

      document.getElementById('loader').style.visibility = 'visible';

      let dropdown = document.getElementById("styleSelectorDropdown");
      let table = document.getElementById("dialogTurnsTableBody");
      let rows = table.getElementsByTagName('tr');

      let context;
      if (rows.length <= 1) {
        context = ''
      } else {
        context = rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].value;
      }

      let text = await nlgApiService.getTurnText(dropdown.value.toLowerCase(), context);
      document.getElementById('loader').style.visibility = 'hidden';
      rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].innerHTML = text.data.response;
      rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].value = text.data.response;
      updateHeight();
    }

    getText();
  }

  function createNewTurn() {
    
    let table = document.getElementById("dialogTurnsTableBody");
    let rows = table.getElementsByTagName('tr');
    let rowCount = rows.length;

    let characterName;
    if (rowCount <= 1) {
      characterName = 'Character 2:';
    } else {
      characterName = rows[rowCount-2].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value;
    }

    let input = document.createElement("input");
    let row = document.createElement('tr');
    let column = document.createElement('td');

    input.setAttribute (
      'style', 
      `border: none;
      margin-left: 5%;
      padding-left: 5px;
      padding-top: 5px;
      background-color: #E1DEE6;
      border-radius: 10px 10px 0px 0px;
      color: #0E012A;
      font-weight: 600;
      width: 70%;`
    );

    input.setAttribute('value', characterName);

    let textarea = document.createElement("textarea");
    textarea.setAttribute (
      'style', 
      `display: flex;
      flex-flow: row wrap;
      flex-direction: row;
      width: 70%;
      background: #E1DEE6;
      box-shadow: 0 0 20px 0 rgba(16, 16, 17, 0.1);
      text-align: left;
      align: left;
      height: 35px;
      overflow: auto;
      border: none;
      border-radius: 0 0px 10px 10px;
      margin-left: 5%;
      padding-left: 5px;
      margin-bottom: 10px;
      color: #0E012A;`
    );

    column.appendChild(input);
    column.appendChild(textarea);
    row.appendChild(column)
    table.appendChild(row);
  }

  function updateHeight() {
    let table = document.getElementById("dialogTurnsTableBody");
    let rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length-1; i++) {
      let element = rows[i].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0];
      element.style.setProperty('height', element.scrollHeight + 'px');
      element.style.setProperty('max-height', element.scrollHeight + 'px');
    }
  }

  return (
    <div id='pageBody'>

      <div id='widgetContainer'>

        <div id='widgetHeader'>
          <div id='widgetHeaderText'>ScriptAssist</div>
        </div>

        <div id='widgetSidebar'>
          <div id='divider'>
          </div>
          <div class='actions' id='styleSelector'>
            <span id='styleSelectorText'>Choose a dialog style.</span>
            <div id='styleSelectorDropdownDiv'>
              <select id='styleSelectorDropdown'>
                <option selected>Shakespeare</option>
                <option>Bronte</option>
                <option>Fitzgerald</option>
                <option>Orwell</option>
                <option>Steinbeck</option>
              </select>
            </div>
          </div>
          <div class='actions' id='download'>
            <span id='scriptDownloadText'>Download your script.</span>
            <form><button id='scriptDownloadButton'>Download TXT</button></form>
          </div>
        </div>

        <div id='widgetBody'>
          <table id='dialogTurnsTable'>
            <tbody id= 'dialogTurnsTableBody'>
              <tr class='dialogTurnRow'> 
                <td class='dialogTurnColumn'>
                  <input class='dialogTurnInput' defaultValue="Character 1:"></input>
                  <textarea class='dialogTurnTextArea' placeholder="Click here to write your first turn of dialog, or choose 'Auto' to autogenerate a turn." onInput={(e) => updateHeight(e)}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <div id='widgetButtonsDiv'>
                    <button class='button' id='addTurnButton' onClick={() => createNewTurn()}><span>+ Add Turn</span></button>
                    <button class='button' id='autoGenButton' onClick={() => generateTurnText()}><span>Auto</span></button>
                    <div id='loader'></div>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>

    </div>
  ); 
}

export default AppPage;

