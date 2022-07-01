// import "./styles.css";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Accountleft from "./components/accountleft"
import Accountdetails from "./components/accountdetails"
export default function App() {

  const btnstyle = {
    width: "30%",
    padding: "1%",
    marginTop: "2%"
  }
  return (
    <div style={{ fontfamily: "Arial,Helvetica,Sans,Sans-Serif,Sans Serif" }}>
      {/* <Login /> */}
      {/* <Signup/> */}
      <Accountdetails />
    </div>
  );
}
