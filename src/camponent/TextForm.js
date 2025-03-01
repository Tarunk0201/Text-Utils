import React, {useState} from "react"

export default function TextForm(props){
    const handleUPClick = () => {
        console.log("I am Upper Case");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("I am lower Case");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        console.log("I am Clear");
        let newText = "";
        setText(newText);
    }

    const handleCopy = () => {
        console.log("I am copy");
        let typo = document.getElementById("myBox");
        typo.select();
        navigator.clipboard.writeText(typo.value);
    }

    const handleExtraSpace = () => {
        console.log("I am ExtraSpace");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleOnChange = (event) => {
        console.log("onchange is clicked");
       setText(event.target.value);
    }

    const [text, setText] = useState('');

    return(
        <>
        <div className="container">
            <h1 htmlFor="myBox" className="form-label">Text here</h1>
            <div className="mb-3">
                <textarea type="text" value={text} onChange={handleOnChange} className="form-control" id="myBox" placeholder="Enter your text" row="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUPClick}> Convert to Uppercase </button>
            <button className="btn btn-success mx-2" onClick={handleLoClick}> Convert to lowercase </button>
            <button className="btn btn-success mx-2" onClick={handleClear}> Clear Text </button>
            <button className="btn btn-success mx-2" onClick={handleCopy}> Copy Text </button>
            <button className="btn btn-success mx-2" onClick={handleExtraSpace}>Remove Extra Space </button>
        </div>
        <div className="container">
            <h1>Your text Summary</h1>
            <p>{text.split(' ').length} words and {text.length} charachters</p>
            <p>Time to read {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}