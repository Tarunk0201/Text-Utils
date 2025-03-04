import React, {useState} from "react"

export default function TextForm(props){
    const handleUPClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text cleared", "success")
    }

    const handleCopy = () => {
        let typo = document.getElementById("myBox");
        typo.select();
        navigator.clipboard.writeText(typo.value);
        props.showAlert("Copyed to clipboard", "success")
    }

    const handlePaste = () => {
        let typo = document.getElementById("myBox");
        navigator.clipboard.readText().then((text) => {
            typo.value = text;
            props.showAlert("Pasted from clipboard", "success")
        });
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has bean removed", "success")
    }


    const handleOnChange = (event) => {
       setText(event.target.value);
    }

    const [text, setText] = useState('');

    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black' }} >
            <h1 htmlFor="myBox" className="form-label">Text here</h1>
            <div className="mb-3">
                <textarea type="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#DCD7C9':'white', }} className="form-control" id="myBox" placeholder="Enter your text" row="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handleUPClick}> Convert to Uppercase </button>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handleLoClick}> Convert to lowercase </button>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handleClear}> Clear Text </button>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handleCopy}> Copy Text </button>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handlePaste}> Past Text </button>
            <button className={`btn btn-${props.mode==='dark'?'success':'info'} mx-2`} onClick={handleExtraSpace}>Remove Extra Space </button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black' }} >
            <h1>Your text Summary</h1>
            <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.replace(/\s/g, "").length} characters</p>
            <p>Time to read {0.008 * text.trim().split(/\s+/).filter(word => word !== "").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
                                                                                    
