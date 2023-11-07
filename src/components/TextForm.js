
import React, { useState } from 'react';
// import propTypes from 'prop-types'



export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("OnChange is handled")
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        console.log("LpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () =>{
        console.log("UpperCase was clicked");
        setText("")
    }

    

    const [text, setText] = useState("Enter text here");
    
    let wordCount = text.split(" ").length;
    if(text.slice(-1) === " "){
        wordCount = wordCount - 1;
        
    }
    if(text.slice(-1) === ""){
        wordCount = 0;
        
    }
    
    
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value = {text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark' ? '#a6a6a6' : 'white'}} rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.buttonColor} mx-1`} onClick= {handleUpClick}  >Generate UpperCase</button>
        <button className={`btn btn-${props.buttonColor} mx-1`} onClick= {handleLoClick}  >Generate LpperCase</button>
        <button className={`btn btn-${props.buttonColor} mx-1`} onClick= {handleClear}  >Clear</button>


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Details</h1>
        <p>The word count is {wordCount} and letter count is {text.length}.</p>
    </div>
    </>
  )
}
