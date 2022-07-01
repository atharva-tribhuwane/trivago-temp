import React from "react";
import Signuptop from "./signuptop";
import Signupmain from "./signupmain";

const Signup = () => {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <div
       style={{
        width: "50%",
        margin: "auto",
        padding: "2%",
        boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        marginTop:"3%"
      }}
      >
        <Signuptop />
        <Signupmain />
        <p>
          Reminder: by signing up, you are agreeing to our <a href="https://www.trivago.co.uk/en-GB/sp/privacy-policy">Privacy Policy</a> and
          <a href="https://www.trivago.co.uk/en-GB/sp/privacy-policy" >Terms of Use.</a>
        </p>
      </div>
      <div style={{
          width: "50%",
          margin: "auto",
          padding: "2%",
          paddingTop:"1%"
        }}>
        <p style={{fontSize:"20px", color:"rgb(88, 88, 88)"}}><b>Don't Have Account Yet?</b></p>
        <button style={{padding:"1.5%", width:"23%", backgroundColor:"white", fontSize:"16px", cursor:"pointer", color:"rgb(88, 88, 88)", border:"1px solid rgb(88, 88, 88)"}}><b>Create Account</b></button>
      </div>
    </>
  );
};

export default Signup;
