
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  HashRouter,
  Routes ,
  Route
  
} from 'react-router-dom';



function App() {

  const[mode, SetMode]= useState('success');

  {/*initially alert is null*/}
  const[alert,setAlert]=useState(null);

  {/*now we are making alert as an object*/}
  const showAlert =(message,type)=>
  {
    setAlert(
    {
      msg:message,
      type:type
    })

    setInterval(() => {
      setAlert(null);}, 3000);
  }


  const toggleMode=()=>
  {
    if(mode==='success')
    {
      SetMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode has been enabled", "success");
     document.title='TextUtils-Dark Mode';
    
    }

    else
    {
      SetMode('success');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils-Light Mode';
    }
  }


  return (
    <>
<HashRouter>
   <Navbar title="TextUtils" about="About Us"  drop="Colors" mode={mode} toggleMode={toggleMode}/> 
    
    <Alert alert={alert}/>

   <div className=" container my-5">

   <Routes>

        <Route exact path='/about'
        element={<About/>}/>
        

        <Route exact path='/text'
      element={<TextForm heading="ENTER YOUR TEXT TO ANALYZE BELOW" showAlert={showAlert}/>}/>

  </Routes>
    
    </div>

</HashRouter>
  
    </>
  );
}

export default App;
