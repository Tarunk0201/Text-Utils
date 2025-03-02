
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './camponent/Navbar';
import TextForm from './camponent/TextForm';
import Alert from './camponent/Alert';
import About from './camponent/About';


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
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
