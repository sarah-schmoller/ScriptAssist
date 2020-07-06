
import React, {
} from 'react';

//import { Link } from "react-router-dom";
import '../styles/appPageStyles.css';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
//import '../nlg/chatbot'

const theme = {
   blue: {
     default: "#3f51b5",
     hover: "#283593"
   },
   pink: {
     default: "#e91e63",
     hover: "#ad1457"
   }
 };


function HomePage() {

  function generateResponse() {
    console.log("IN HERE");
    async function test() {
      console.log("IN HERE");
      let headers = {
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
          'Access-Control-Allow-Credentials': 'true'
        }
      }
      let dropdown = document.getElementById("dropdown15");
      console.log("SELECTED");
      console.log(dropdown.value);
      let reqInstance = axios.create(headers);

      let table = document.getElementById("table");
      let rows = table.getElementsByTagName('tr');
      let context;
      console.log("LENGTH");
      console.log(rows.length);
      if (rows.length <= 1) {
        context = ''
      } else {
        console.log("HERE");
        console.log(rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0])
        console.log(rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].value)
        context = rows[rows.length-2].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].value;
        console.log(context);
      }
      let tester =  await reqInstance.post(`http://127.0.0.1:5000/`, {style: dropdown.value.toLowerCase(), context: context});
      console.log("IN HERE");
      console.log("RESULT");
      console.log(tester);

      console.log(rows[rows.length-1]);
      rows[rows.length-1].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].innerHTML = tester.data.response;
      rows[rows.length-1].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0].value = tester.data.response;
      console.log("ROWS");
      console.log(rows[rows.length-1]);
      updateHeight();
    }
    test();
    
  }

  function createNewTurn() {
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName('tr');
    let rowCount = rows.length;
    console.log(rows[rowCount-1].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value);
    console.log(rows[rowCount-1]);
    let characterName;
    if (rowCount <= 1) {
      characterName = 'Character 2:';
    } else {
      characterName = rows[rowCount-2].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value;
    }

    let input = document.createElement("input");
    let row = document.createElement('tr');
    let column = document.createElement('td');
    input.setAttribute('style', `border: none;
    margin-left: 5%;
    padding-left: 5px;
    padding-top: 5px;
    background-color: #E1DEE6;
    border-radius: 10px 10px 0px 0px;
    color: #0E012A;
    font-weight: 600;
    width: 70%;`);
    input.setAttribute('value', characterName);
    let textarea = document.createElement("textarea");
    textarea.setAttribute('style', `display: flex;
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
    color: #0E012A;`);
    console.log("STYLE");
    console.log(textarea.style);
    column.appendChild(input);
    column.appendChild(textarea);
    row.appendChild(column)
    table.appendChild(row);
  }

  function updateHeight(test) {
    let table = document.getElementById("dialogTurnsTable");
    let rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let element = rows[i].getElementsByTagName('td')[0].getElementsByTagName('textarea')[0];
      console.log("STYLES");
      console.log(element.style);
      console.log(element.style.scrollHeight);
      console.log(element.style.height);
      console.log(element.scrollHeight);
      element.style.setProperty('height', element.scrollHeight + 'px');
      element.style.setProperty('max-height', element.scrollHeight + 'px');
    //content[i].style.height = content[i].scrollHeight + 'px';
    }
  }

  return (
    <body id='pageBody'>

      <div id='widgetContainer'>

        <div id='widgetHeader'>
          <div id='widgetHeaderText'>ScriptAssist</div>
        </div>

        <div id='widgetSidebar'>
          <div id='divider'>
          </div>
          <div class='actions' id='styleSelector'>
            <text id='styleSelectorText'>Choose a dialog style.</text>
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
            <text id='scriptDownloadText'>Download your script.</text>
            <form><button id='scriptDownloadButton'>Download TXT</button></form>
          </div>
        </div>

        <div id='widgetBody'>
            <table id='dialogTurnsTable'>
              <tr class='dialogTurnRow'> 
                <td class='dialogTurnColumn'>
                  <input class='dialogTurnInput' defaultValue="Character 1:"></input>
                  <textarea class='dialogTurnTextArea' placeholder="Click here to write your first turn of dialog, or choose 'Auto' to autogenerate a turn." onInput={(e) => updateHeight(e)}></textarea>
                </td>
              </tr>
            </table>
            <div id='widgetButtonsDiv'>
              <button class='button' id='addTurnButton'><span onClick={() => createNewTurn()}>+ Add Turn</span></button>
              <button class='button' id='autoGenButton'><span onClick={() => generateResponse()}>Auto</span></button>
            </div>
          </div>
      </div>

    </body>
  ); 
}

export default HomePage;

