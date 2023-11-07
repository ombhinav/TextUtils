import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey" ;
      setButtonColor('dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white" ;
      setButtonColor('primary')


    }
  }

  const [buttonColor, setButtonColor] = useState('primary');


  return (
    <>
  
    {/* <Navbar title = "TextUtils1" aboutText = "Bout" /> */}
    <BrowserRouter>
    <Navbar title = "TextUtils" mode ={mode} toggleMode ={toggleMode} aboutText='About'  />
    <Routes>
      <Route exact path="/" element= {<TextForm heading = "Enter the text to analyze" mode={mode} buttonColor={buttonColor} />} ></Route>
      <Route exact path="/about" element= {<About/>} ></Route>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
