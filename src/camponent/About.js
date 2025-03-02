import React from "react";

export default function About(props){
    return(
    <>
    <div style={{color: props.mode==='dark'?'white':'black' }}>
        <div className="container">
            <h2>About TextUtils</h2>
            <p>TextUtils is a simple yet powerful text manipulation tool that helps you perform various operations on your text efficiently. Whether you need to convert text to uppercase/lowercase, remove extra spaces, or count words and characters, TextUtils has got you covered!</p>
        </div>
        <div className="container my-10">
            <h2>🌟 Features</h2>
            <ul>
                <li>
                    ✅ Convert text to Uppercase & Lowercase
                </li>
                <li>
                    ✅ Remove Extra Spaces
                </li>
                <li>
                    ✅ Count Words & Characters
                </li>
                <li>
                    ✅ Dark Mode for better readability
                </li>
            </ul>
        </div>
        <div className="container my-10">
            <h2>🛠️ Built With</h2>
            <ul >
                <li>
                    React.js for frontend
                </li>
                <li>
                    Bootstrap for styling
                </li>
                <li>
                     Vercel for deployment
                </li>
            </ul>
        </div>
        <div className="container my-10">
            <h2>📈 Future Updates</h2>
            <ul>
                <li>
                    Find & replace text
                </li>
                <li>
                    Word frequency analysis
                </li>
                <li>
                    Export text as a file
                </li>
            </ul>
        </div>
    </div>
    </>
    )
}