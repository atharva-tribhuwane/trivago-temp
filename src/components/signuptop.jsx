import React from "react";
import img1 from "./logo.png";

const Signuptop = () => {
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
        <p style={{marginLeft:"2%",  marginBottom:"1%", fontSize:"22px"}}><b>Create Your Account</b></p>
        <p
          style={{
            fontSize: "17px",
            marginLeft:"2%",
            marginTop:"0"
           
          }}
        >
         Add a strong password to finish up
        </p>
      </div>
    </>
  );
};

export default Signuptop;
