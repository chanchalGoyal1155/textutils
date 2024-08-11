import React, {useState} from "react";
export default function TextForm(props) {
    const handleUPclick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLOclick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")

    }

    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
       
    }
const [isHovered, setIsHovered] = useState(false);

const [text, setText] = useState('')

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button
        style={{
          backgroundColor: isHovered ? "#00009c" : "#000080",
          border:"3px solid #0072bb", // Remove borders
          color: "white", // White text
          padding: "15px 32px", // Some padding
          textAlign: "center", // Center the text
          textDecoration: "none", // Remove underline
          display: "inline-block", // Make the button inline-block
          fontSize: "16px", // Increase font size
          margin: "4px 2px", // Some margin
          cursor: "pointer", // Pointer/hand icon
          borderRadius: "5px", // Rounded corners
        }}
        // Event handlers for mouse enter and leave
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        onClick={handleUPclick}>
        Convert To Uppercase
      </button>

      <button
        style={{
          backgroundColor: isHovered ? "#00009c" : "#000080",
          border:"3px solid #0072bb", // Remove borders
          color: "white", // White text
          padding: "15px 32px", // Some padding
          textAlign: "center", // Center the text
          textDecoration: "none", // Remove underline
          display: "inline-block", // Make the button inline-block
          fontSize: "16px", // Increase font size
          margin: "4px 2px", // Some margin
          cursor: "pointer", // Pointer/hand icon
          borderRadius: "5px", // Rounded corners
        }}
        // Event handlers for mouse enter and leave
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        onClick={handleLOclick}>
        Convert To Lowercase
      </button>
      

    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here.."}</p>

    </div>
    </>
    
  );
}
