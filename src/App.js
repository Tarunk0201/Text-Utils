
import React, { useState } from 'react';
import './App.css';
import Navbar from './camponent/Navbar';
import TextForm from './camponent/TextForm';
import Alert from './camponent/Alert';
// import About from './camponent/About';


function App() {

  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
        msg: message,
        type: type
    })
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#3F4F44'
    showAlert("Dark mode has been enabled", "success")
  } else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled", "success")
  }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
      <Alert alert={alert} mode={mode}/>
      <TextForm showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
