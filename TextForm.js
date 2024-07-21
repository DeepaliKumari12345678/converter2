import React, { useState } from 'react'
export default function TextForm(props) {
  const handleUpClick = () => {
   // console.log("uppercase was clicked  " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert upper case", "success");
  }
  const handleLowClick = () => {
   // console.log("uppercase was clicked  " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
   // console.log("on change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById( "myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    //navigator.clipboard.writetext(text.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode ==='dark'?'blue':'black'}}>

        <h1>{props.heading}</h1>
    
      <div className="mb-3"  >
        
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'grey':'white' , color: props.mode ==='dark'?'blue':'black'}} id="myBox" rows="8"></textarea>
      </div>
          <button className='btn btn-primary' onClick={handleUpClick}>Convert to upper case</button>
          <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lower case</button>
           <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        </div>
      
      <div className='container my-3' style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'blue':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above and preview it here"}</p>
      </div>
      </>
  )
}
