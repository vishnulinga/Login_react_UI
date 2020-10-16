import React,{useState,useEffect} from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Form from 'react-bootstrap/Form'
import "./Loginstyle.css"

const Login=(props)=>{
var valid=false;

const [userid,setUserid]=useState("")
const [pwd,setPwd]=useState("")
const [array,setArray]=useState("")
useEffect(()=>{

    fetch("https://login-react-signup.herokuapp.com/all")
    .then((res)=>res.json())
    .then((res)=>setArray(res))
    
    
},[])

const idchanged=(event)=>{
setUserid(event.target.value)
}
const pwdchanged=(event)=>{
    setPwd(event.target.value)
}
const onSubmit=()=>{
    
    array.forEach((obj)=>{
        
        if(obj._id===userid && obj.password===pwd)
        {props.setVerify({
            Login:false,
            Signup:false,
            Forgot:false,
            Table:true
            });
            valid=true;
        ;}
    })
    
    if(valid===false){
    alert("Wrong credentials")}
}
const onSignup=()=>{
    props.setVerify({
        Login:false,
        Signup:true,
        Forgot:false,
        Table:false
        });
        
    
}
const onHref=()=>{
    props.setVerify({
        Login:false,
        Signup:false,
        Forgot:true,
        Table:false
        });
}

return(
    <Container>
   <h1>Login Form</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={idchanged}/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={pwdchanged}/>
  </Form.Group>
  <Button variant="dark" onClick={onHref}>Forget Password?</Button>
  <Button variant="success" type="button" onClick={onSubmit}>
    Login
  </Button>
  <Button variant="primary" type="button" onClick={onSignup}>
    Signup
  </Button>
</Form>
</Container>
)
}
export default Login 