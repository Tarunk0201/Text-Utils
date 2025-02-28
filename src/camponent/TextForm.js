import React, {useState} from "react"

export default function TextForm(props){
    const handleUP = () => {
        console.log("up clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("onchange is clicked");
       setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text here');

    return(
        <div className="container">
            <h1 htmlFor="myBox" className="form-label">Text here</h1>
            <div className="mb-3">
                <textarea type="text" value={text} onChange={handleOnChange} className="form-control" id="myBox" placeholder="Enter your text" row="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUP}> Convert to Uppercase </button>
        </div>
    )
}