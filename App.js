import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'Converter - Dark Mode Enabled';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title="Converter" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <Alert alert={alert} />
        {/*<Routes>*
            <Route exact path="/about" element={<About />} />*/}
        {/*<Route exact path="/" element={*/}<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/*</Routes></>*/}
          
        </div>
      {/*</Router>*/ }
    </>
  );
}

export default App;
