import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import styled from "styled-components";
import googlelogo from "./google.png";
import facebooklogo from "./facebook.png";
import applelogo from "./apple.png";

const Loginmain = () => {
  localStorage.setItem("activeuser",null);
  // const [formData, setFormData] = React.useState({
  //   "id": "uuid()",
  //   "name": "",
  //   "phone": "",
  //   "email": "",
  //   "password": ""
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const Dochange = (e) => {

  //   let { name, value, selected, type } = e.target;

  //   setFormData({ ...formData, [name]: value });

  // };
  const check = ()=>{
    fetch(`http://localhost:3001/users`)
      .then((res)=> res.json())
      .then((res)=> {
        res.forEach(function(dt){
          if(dt.email === email && dt.password === password){
            alert("Login Succesful");
            localStorage.setItem("activeuser",email);
          }
          else{
            alert("Invalid Credentials");
          }
        })
      } )
      .catch((err)=> console.log(err));
    
    // console.log(data);
  }

  

  // css
  const loginwith = {
    border:"1px solid rgb(88, 88, 88)",
    width: "80%",
    padding: "2%",
    color:"rgb(88, 88, 88)",
    display: "flex",
  };

  const formcss = {
    display: "flex",
    flexDirection: "column",
  }

  const inpstyle = {
    width: "80%",
    padding: "2%"
  }
  const btnstyle = {
    width: "85%",
    padding: "2%",
    marginTop: "2%"
    
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "flex"
        }}
      >
        <div style={{ width: "50%",  padding: "2%", border:"1px solid red" }}>
          <form style={formcss} onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="Email Address" style={inpstyle} 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Email Password" style={inpstyle} value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            <button style={btnstyle} onClick={check}>Login</button>
          </form>
        </div>

        <div style={{ width: "50%", padding: "2%", border:"1px solid green"}}>
          <h5>Or Use trivago with another account</h5>
          <div style={loginwith}><img src={googlelogo} alt="" width="8%" padding="2%"  /><b style={{marginLeft:"5%"}}>Continue With Google</b></div>
          <div style={loginwith}><img src={facebooklogo} alt="" width="8%" padding="2%" style={{borderRadius:"50%"}} /><b style={{marginLeft:"5%"}}>Continue With Facebook</b></div>
          <div style={loginwith}><img src={applelogo} alt="" width="8%" padding="2%"  /><b style={{marginLeft:"5%"}}>Continue With Apple</b></div>
        </div>
      </div>
    </>
  );
};

export default Loginmain;
