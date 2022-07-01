import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import styled from "styled-components";
import googlelogo from "./google.png";
import facebooklogo from "./facebook.png";
import applelogo from "./apple.png";

const Signupmain = () => {

  // const [formData, setFormData] = React.useState({
  //   "id": "uuid()",
  //   "name": "",
  //   "phone": "",
  //   "email": "",
  //   "password": ""
  // });
  const [semail, setsEmail] = useState("");
  const [spassword, setsPassword] = useState("");
  const [flag, setFlag] = useState(0) ;
  
  // const Dochange = (e) => {

  //   let { name, value, selected, type } = e.target;

  //   setFormData({ ...formData, [name]: value });

  // };
  const postdata = ()=>{
    

    fetch(`http://localhost:3001/users`)
      .then((res)=> res.json())
      .then((res)=> {
        res.forEach(function(dt){
          if(dt.email === semail){
            setFlag(1);
            alert("Already Registered");
            console.log(flag);
          }
          
        })
      } )
      .catch((err)=> console.log(err));

      if(flag===0){
        console.log("still getting inside");
        const user = {
            name: "Menu",
            phone:"" ,
            email: semail,
            password: spassword,
            recentlyvieved:"",
            previousbookings:""
          };
      
          fetch(`http://localhost:3001/users`,{
              method:"POST",
              body:JSON.stringify(user),
              headers:{
                  "Content-type" : "application/json"
              }
          })
            .then((res)=>res.json())
            .then((res)=>{
              console.log(res)
               alert("Signup Successful")
              })
            .catch((err)=>console.log(err));
      }
      else{
        console.log("Bye!");
        setFlag(0)
      }
    
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
            value={semail}
            onChange={(e)=>setsEmail(e.target.value)}/>
            <label htmlFor="">Set Password</label>
            <input type="password" placeholder="Email Password" style={inpstyle} value={spassword}
            onChange={(e)=>setsPassword(e.target.value)} />
            <div>
                Password Requirements
                <ul>
                    <li>Has Minimum 10 Characters</li>
                    <li>Contains Atleast 10 Characters</li>
                </ul>
            </div>
            <button style={btnstyle} onClick={postdata}>Login</button>
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

export default Signupmain;
