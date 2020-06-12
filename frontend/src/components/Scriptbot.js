
import React, {
  useEffect,
  useState
} from 'react';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
//import Button from 'react-bootstrap/Button';
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

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
   theme: "blue"
 };

 function callGpt() {
   alert(code);
   console.log(code);
 }

function Scriptbot() {

  return (
    <div>
        <div className="row">
            <div className="col-md-12">
              <form>

                  <div className="form-group">
                      <label htmlFor="headline">
                      Script
                      </label>
                      <textarea rows="6" input type="text" className="form-control" id="headline" />
                  </div>
                  <div><Button onClick={callGpt}>Button</Button></div>
              </form>
            </div>
          <br/>
       </div>
       <ToastContainer />
      </div>
  );
}

export default Scriptbot;