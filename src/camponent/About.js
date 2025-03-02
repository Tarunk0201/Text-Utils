import React from "react";

const About = (props) => {
  return (
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black' }}>
      <h1 className="text-primary">About TextUtils</h1>
      <p className="lead">
        TextUtils is a simple yet powerful text manipulation tool that helps
        you perform various operations on your text efficiently. Whether you
        need to **convert text to uppercase/lowercase, remove extra spaces, or
        count words and characters**, TextUtils has got you covered!
      </p>

      <h2 className="mt-4">🌟 Features</h2>
      <ul className="list-group list-group-flush" >
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black' }} >✅ Convert text to <strong>Uppercase</strong> & <strong>Lowercase</strong></li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >✅ Remove <strong>Extra Spaces</strong></li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >✅ Count <strong>Words & Characters</strong></li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >✅ <strong>Dark Mode</strong> for better readability</li>
      </ul>

      <h2 className="mt-4">🛠️ Built With</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}}>🔹 <strong>React.js</strong> - For frontend development</li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}}>🔹 <strong>Bootstrap</strong> - For styling</li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}}>🔹 <strong>Vercel</strong> - For deployment</li>
      </ul>

      <h2 className="mt-4">📈 Future Updates</h2>
      <p>We are working on adding more features like:</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >🚀 Find & Replace text</li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >🚀 Word Frequency Analysis</li>
        <li className="list-group-item" style={{backgroundColor: props.mode==='dark'?'#3F4F44':'white', color: props.mode==='dark'?'white':'black'}} >🚀 Export text as a file</li>
      </ul>

      <p className="mt-4">
        <strong>Stay tuned for more updates! 🚀</strong>
      </p>
    </div>
  );
};

export default About;
