import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import styled from "styled-components";
import googlelogo from "./google.png";
import facebooklogo from "./facebook.png";
import applelogo from "./apple.png";

const Loginmain = () => {
  localStorage.setItem("activeuser",null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
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
    marginTop:"5%",
    marginBottom:"5%"
  };

  const formcss = {
    display: "flex",
    flexDirection: "column",
  }

  const inpstyle = {
    width: "80%",
    padding: "2%",
    marginTop:"1%",
    marginBottom:"3%"
  }
  const btnstyle = {
    width: "85%",
    padding: "3%",
    marginTop: "2%",
    padding:"2%",
    fontSize:"16px",
    fontWeight:"500",
    backgroundColor:"rgb(37, 115, 216)",
    color:"white",
    border:"none",
    marginTop:"5%",
    cursor:"pointer"
    
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "flex"
        }}
      >
        <div style={{ width: "50%",  padding: "2%", borderRight:"1px solid gray" }}>
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

        <div style={{ width: "50%", padding: "2%", marginLeft:"4%"}}>
          <h5 style={{margin:"0", padding:"0", color:"rgb(88, 88, 88)"}}>Or Use trivago with another account</h5>
          <div style={loginwith}><img src={googlelogo} alt="" width="8%" padding="2%"  /><b style={{marginLeft:"5%"}}>Continue With Google</b></div>
          <div style={loginwith}><img src={facebooklogo} alt="" width="8%" padding="2%" style={{borderRadius:"50%"}} /><b style={{marginLeft:"5%"}}>Continue With Facebook</b></div>
          <div style={loginwith}><img src={applelogo} alt="" width="8%" padding="2%"  /><b style={{marginLeft:"5%"}}>Continue With Apple</b></div>
        </div>
      </div>
     
    </>
  );
};

export default Loginmain;
