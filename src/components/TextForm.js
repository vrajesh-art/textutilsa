import React ,{useState} from 'react';

// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const TextForm = (props) => {

const handleUpClick=()=>{
  console.log("the upper case was clicked" + Text)
  let newText=Text.toUpperCase();
  setText(newText)
  props.showAlert("converted to uppercase","success")
}

const handlelowClick=()=>{
  console.log("the upper case was clicked" + Text)
  let newText=Text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase","success")
}

// const handleclearClick=(event)=>{
//   console.log("the upper case was clicked" + Text)
// setText(event.target.value=" ")
// }

const handleclearClick=()=>{
  let newText=' '
setText(newText)
props.showAlert("text has been cleared","success")
}

const handlecopy=()=>{
  console.log("i am a copy")
  var text=document.getElementById("mybox");
 
  navigator.clipboard.writeText(text)
  props.showAlert("text has been copid to clipboard","success")
}

const handlespaces=()=>{
  let newText=Text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("extra spaces has been removed","success")
}


const handleOnChange=(event)=>{
  console.log("on change")
  setText(event.target.value)

}



  const [Text, setText] = useState("enter tour text here");
    
    return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>

<div className="mb-3 ">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control"  Id="mybox" value={Text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} /*onfocus={handleclearClick} */id="myBox" rows="8"></textarea>
</div>
<div className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</div>
<div className="btn btn-primary ms-3" onClick={handlelowClick} >convert to lowercase</div>
<div className="btn btn-primary ms-3" onClick={handleclearClick} >clear text</div>
<div className="btn btn-primary ms-3" onClick={handlecopy} >copy text</div>
<div className="btn btn-primary ms-3" onClick={handlespaces} >remove extra spaces</div>

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1>your text summary</h1>
     <p>{Text.split(" ").length} words and {Text.length} characters</p>
     <p>{0.008*Text.split(" ").length} minutes read</p>
     <h2>preview</h2>
     <p>{Text.length>0?Text:"enter your text to preview it here"}</p>
    </div>
    </>
    )
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;