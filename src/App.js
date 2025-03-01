
import React, { useState } from 'react';
import './App.css';
import Navbar from './camponent/Navbar';
import TextForm from './camponent/TextForm';
// import About from './camponent/About';


function App() {

  const [mode, setMode] = useState(`dark`);
  
  return (
    <>
    <Navbar title="TextUtils" mode={mode}></Navbar>
    <TextForm />
    {/* <About/> */}
    </>
  );
}

export default App;
