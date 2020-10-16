import React,{useState,useEffect} from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const DisplayTable=(props)=>{
    const [array,setArray]=useState([])
    useEffect(()=>{
    
        fetch("https://login-react-signup.herokuapp.com/all")
        .then((res)=>res.json())
        .then((res)=>setArray(res))
        console.log(array)
        
    })
    const logout=()=>{
        props.setVerify({
            Login:true,
            Signup:false,
            Forgot:false,
            Table:false
            });
    }

    return(
        <>
<Button variant="success" onClick={logout}>Logout</Button>     
<Table striped bordered hover>
  <thead>
    <tr>
      <th>UserId</th>
    </tr>
  </thead>
  <tbody>
      {array.map((obj,index)=>{
          return(<tr key={index}><td>{obj._id}</td></tr>)
      })}
  </tbody>
  </Table>

</>
    )

}
export default DisplayTable