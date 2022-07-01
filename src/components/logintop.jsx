import React from "react";
import img1 from "./logo.png";

const Logintop = () => {
  return (
    <>
      <div>
        <div
          style={{
            width: "14%",
            margin: "auto"
          }}
        >
          <img src={img1} alt="" width="100%"/>

        </div>
        {/* <img
          src="./logo.png
"
          alt="none"
        /> */}
      </div>
      <div
        style={{
          textAlign: "start"
        }}
      >
        <p style={{marginLeft:"2%",  marginBottom:"1%", fontSize:"22px"}}><b>Log in or create an account</b></p>
        <p
          style={{
            fontSize: "17px",
            marginLeft:"2%",
            marginTop:"0",
            color:"rgb(88, 88, 88)"
           
          }}
        >
         Enter your e-mail address to start
        </p>
      </div>
    </>
  );
};

export default Logintop;
