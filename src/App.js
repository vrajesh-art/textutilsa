
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');//initial mode is set here  
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null);
   },3000)
  }


  

  const toggleMode=()=>{
    if(mode==='light'){ 
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode has been enabled","success")
    document.title="TextUtils-Dark mode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
      document.title="TextUtils-light mode"
    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
        <Navbar title="TextUtils2" aboutText="TextAbouts" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route
              exact path="/"
              element={ */}
                <TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>
              {/* } */}
            {/* ></Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}

  </>
  );  

}

export default App;
