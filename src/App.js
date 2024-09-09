import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; 
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');// wheather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const toggleMode = (cls) =>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
  
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enable", "success")
      document.title = 'TextUtils -Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enable", "success")
      document.title = 'TextUtils -Light Mode'



    }

  }
  return (
    <>
      <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About /> */}
      </div>
      
      
    </>
  );
}

export default App;
