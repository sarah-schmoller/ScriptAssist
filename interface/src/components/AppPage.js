
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


 //async function toggleHover() {
 // this.setState({hover: !this.state.hover})
 //}



function HomePage() {
  //let navigate = useNavigate(); 

  /*const textBoxStyle = {
    display: 'block',
    color: '#000',
    padding: '8px 16px',
    'text-decoration': 'none',
    'margin-left': '30px',
    'margin-right': '30px'
  }*/


  const buttonStyle = {
    color: '#5A5A5A',
    'backgroundColor': '#E1DEE6',
    'border':'none',
    'marginBottom': '10px',
    'marginLeft': '0px',
    'fontWeight': 'normal',
    'display': 'inline-block',
    'align': 'center',
    //'width': '106px',
    'fontSize':'15px',
    outline: '0px',
    cursor: 'pointer',
    boxShadow: '0px 2px 2px lightgray',
    transition: 'ease background-color 250ms',
    padding: '5px 15px',
    marginRight: '10px',
    marginTop: '10px'
  }

  const select = {
  'marginLeft': '5%',
  'padding': '5px 35px 5px 5px',
  'fontSize': '16px',
  'border': '1px solid #ccc',
  'height': '34px',
  //'appearance': 'none',
  'alignItems': 'left',
  'display': 'absolute',
  'justifyContent': 'left',
  color: '#5A5A5A',
  cursor: 'pointer',
  width: '100%',
  'border-radius': '3px'
}

const selectDiv = {
  position: 'absolute',
  //'width': '80%',
  'marginTop': '10px',
  'marginLeft': '-5px',
  cursor: 'pointer',
  zIndex: 1
}

const selectDiv2 = {
  'fontSize': '16px',
  'border': 'none',
  'height': '34px',
  'alignItems': 'left',
  'display': 'absolute',
  'justifyContent': 'left',
  color: '#5A5A5A',
  width: '100%',
  'marginTop': '5px',
  cursor: 'pointer',
  zIndex:1,
  backgroundColor:'#E1DEE6'
}

const text = {
  'marginTop': '25px',
  'marginLeft': '25px',
  //'width': '100%',
  
  //'float': 'left',
  color: '#5A5A5A',
  position: 'absolute'
}

const text2 = {
  'marginTop': '115px',
  'marginLeft': '25px',
  //'width': '100%',
  
  //'float': 'left',
  color: '#5A5A5A',
  position: 'absolute'
}

const textDiv = {
  'marginLeft': '10%',
}

  const container = {
    'width': '1000px',
    height: '600px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    marginTop: 'min(13vh)',
    background: 'white',
    float: 'left',
    'border-radius': '20px',
    position: 'absolute',
    overflow:'hidden'
  }

  const wrapper1 = {

  }

  /*function MouseEnter(id) {
    console.log(id)
    console.log(document.getElementById(id).children[0]);
    console.log(id);
    document.getElementById(id).children[0].setAttribute("fill-opacity", "1.0");
  }

  function MouseLeave(id) {
    console.log(id);
    document.getElementById(id).children[0].setAttribute("fill-opacity", "0.75");
  }*/

  //const figure = {
  //  opacity: hover.img.logo ? 1 : 0
  //}
  
  /*styled.section`
    &:hover img.logo {
      opacity: 0
    }
  `*/

  const vl = {
    borderRight:'1px solid gray', 
    height:'107%',
    top:'3%',
    bottom:'3%',
    right:'0%',
    position:'absolute',
    left:'0%',
    marginLeft:'-3px',
    zIndex:"-1"
  }

  const vl2 = {
    //borderRight:'1px solid gray', 
    height:'85%',
    top:'75px',
    bottom:'3%',
    left: '25%',
    position:'absolute',
    zIndex:"100"
  }

  const div1 = {
    height:'80%',
    top:'80px',
    position:'absolute',
    marginLeft:'-20px',
    color: 'gray',
    width:'25%'
  }

  const div2 = {
    height:'85%',
    paddingTop:'8px',
    position:'absolute',
    left:'19%',
    right:'0px',
    width:'100%',
    color: '#5A5A5A',
    textAlign: 'left',
    backgroundColor: 'white',
    'overflow-y': 'scroll',
    zIndex:0
  }

  const instructions2 = {
    marginTop: '15px'
  }

  const dialogBox = {
    display: 'flex',
    'flex-flow': 'row wrap',
    'flex-direction': 'row',
    width: '60%',
    padding: '0',
    background: '#E1DEE6',
    'box-shadow': '0 0 20px 0 rgba(16, 16, 17, 0.1)',
    'text-align': 'left',
    'align':'left',
    'margin-left': '5%',
    transform: 'translateY(15%)',
    height: '60px',
    overflow: 'auto',
    'border-radius': '10px'
  }
  const dialogBoxInput = {
    display: 'flex',
    'flex-flow': 'row wrap',
    'flex-direction': 'row',
    width: '70%',
    background: '#E1DEE6',
    'box-shadow': '0 0 20px 0 rgba(16, 16, 17, 0.1)',
    'text-align': 'left',
    'align':'left',
    height: '35px',
    overflow: 'auto',
    border: 'none',
    'border-radius': '0 0px 10px 10px',
    'margin-left': '5%',
    'paddingLeft':'5px',
    'marginBottom': '10px',
    color: '#0E012A'
  }

  const buttonDiv = {
    'marginLeft': '5%',
    'overflow-y': 'scroll'
  }

  const textareaCharacter = {
    border: 'none',
    marginLeft: '5%',
    marginTop: '10px',
    paddingLeft: '5px',
    paddingTop: '5px',
    backgroundColor: '#E1DEE6',
    'border-radius': '10px 10px 0px 0px',
    color: '#0E012A',
    fontWeight: 600,
    width: '70%'
  }

  const row = {
    width: '100vw'
  }

  /*React.useEffect(() => {
    async function test() {
      let headers = {
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
          'Access-Control-Allow-Credentials': 'true'
        }
      }
      let reqInstance = axios.create(headers);
      let tester =  await reqInstance.post(`http://127.0.0.1:5000/`, 'shakespeare');
      console.log("RESULT");
      console.log(tester);
    }
    test()
    let element = document.getElementById("dropdown15");
    //console.log(element.options[element.selectedIndex].value)
  });*/

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
    let table = document.getElementById("table");
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
  //const navigate = useNavigate();

  //const navigate = useNavigate();
  return (
    <body id='pageBody'>

      <div id='widgetContainer'>

        <div id='widgetHeaderDiv'>
          <div id='widgetHeader'>ScriptAssist</div>
        </div>

        <div id='widgetSidebar'>
          <div id='divider'>
          </div>
          <div class='instructions' style={text}>
            <text id='styleSelectorText'>Choose a dialog style.</text>
            <div id='styleSelectorDropdownDiv' style={selectDiv}>
              <select id='styleSelectorDropdown' style={select}>
                <option selected>Shakespeare</option>
                <option>Bronte</option>
                <option>Fitzgerald</option>
                <option>Orwell</option>
                <option>Steinbeck</option>
              </select>
            </div>
          </div>
          <div class='instructions' style={text2}>
            <text id='scriptDownloadText'>Download your script.</text>
            <form id='scriptDownloadButton'><button style={selectDiv2}>Download TXT</button></form>
          </div>
        </div>

        <div id='widgetBody' style={div2}>
            <table id='dialogTurnsTable' style={instructions2}>
              <tr class='dialogTurnRow' style={row}> 
                <td class='dialogTurnColumn' style={row}>
                  <input class='dialogTurnInput' style={textareaCharacter} defaultValue="Character 1:"></input>
                  <textarea class='dialogTurnTextArea' style={dialogBoxInput} placeholder="Click here to write your first turn of dialog, or choose 'Auto' to autogenerate a turn." onInput={(e) => updateHeight(e)}></textarea>
                </td>
              </tr>
            </table>
            <div id='widgetButtonsDiv' style={buttonDiv}>
                <button id='addTurnButton' style={buttonStyle} ><span onClick={() => createNewTurn()}>+ Add Turn</span></button>
                <button id='autoGenButton' style={buttonStyle} onClick={() => generateResponse()}><span>Auto</span></button>
              </div>
          </div>

      </div>

      
    </body>
  ); 
}

export default HomePage;

