import React from "react";
import Logintop from "./logintop";
import Loginmain from "./loginmain";

const Login = () => {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <div
        style={{
          border:"1px solid grey",
          width: "50%",
          margin: "auto",
          padding: "2%"
        }}
      >
        <Logintop />
        <Loginmain />
        <p>
          Reminder: by signing up, you are agreeing to our <a href="https://www.trivago.co.uk/en-GB/sp/privacy-policy">Privacy Policy</a> and
          <a href="https://www.trivago.co.uk/en-GB/sp/privacy-policy">Terms of Use.</a>
        </p>
      </div>
    </>
  );
};

export default Login;
