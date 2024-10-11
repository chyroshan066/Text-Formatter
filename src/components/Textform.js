import React, {useState} from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy=()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        //When using navigator.clipboard it is not necessary to select the text 
        props.showAlert("Text copied","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
        <h2 className="mb-4" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#d1c3c3',color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button  disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button  disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button  disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
      <button  disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
      <button  disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length<=0?'Nothing to preview':text}</p>
    </div>
    </>
  )
}