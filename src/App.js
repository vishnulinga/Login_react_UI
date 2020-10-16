import React,{useState} from 'react';
import Login from "./components/Login"

import DisplayTable from "./components/DisplayTable"
import './App.css';
import Signup from "./components/Signup"
import Forgot from "./components/Forgot"

function App() {
const [verify,setVerify]=useState({
  Login:true,
  Signup:false,
  Forgot:false,
  Table:false
})




  return (
    <>
     
    
   
     {/* {verify.Login?<Login setValidate={setValidateLogin}/>:verify.Signup?<Signup/>:verify.Forgot?<Forgot/>:verify.Table?<Table/>:null} */}
     
     {
     
     verify.Login?<Login setVerify={setVerify}/>:verify.Signup?<Signup setVerify={setVerify}/>:verify.Forgot?<Forgot setVerify={setVerify}/>:<DisplayTable  setVerify={setVerify}/>}
     
     </>
  );
}

export default App;
