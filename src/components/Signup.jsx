import React,{useState} from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Form from 'react-bootstrap/Form'


const Signup=(props)=>{


const [userid,setUserid]=useState("")
const [pwd1,setPwd1]=useState("")
const [pwd2,setPwd2]=useState("")



const idchanged=(event)=>{
setUserid(event.target.value)
}
const pwd1changed=(event)=>{
    setPwd1(event.target.value)
}
const pwd2changed=(event)=>{
    setPwd2(event.target.value)
}
const onSubmit=()=>{
    if(pwd1===pwd2){
        fetch('https://login-react-signup.herokuapp.com/register', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userid":userid,
                "password":pwd1
            }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
        alert("Login Now")
        props.setVerify({
            Login:true,
            Signup:false,
            Forgot:false,
            Table:false
            });
            
        ;}
        
          else{
          alert("Wrong Password")}
    
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
    <Form.Control type="password" placeholder="Password" onChange={pwd1changed}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Re enter Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={pwd2changed}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={onSubmit}>
    Submit
  </Button>
</Form>
</Container>
)
}
export default Signup