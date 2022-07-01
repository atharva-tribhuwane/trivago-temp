// import "./styles.css";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Accountmain from "./components/accountmain"
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
      <Accountmain />
    </div>
  );
}
