
import React, { useState } from 'react';
import './App.css';
import Navbar from './camponent/Navbar';
import TextForm from './camponent/TextForm';
// import About from './camponent/About';


function App() {

  const [mode, setMode] = useState(`light`);

  const toggleMode = ()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#3F4F44'
  } else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
  }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
      <TextForm mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
