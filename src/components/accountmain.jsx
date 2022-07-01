import React from "react";
import Accountdetails from "./accountdetails";
import Accountleft from "./accountleft";

const Accountmain = ()=>{
    const accnmain = {
        display:"flex",
        width:"60%",
        margin:"auto"
    }
    return(
        <div style={accnmain}>
        <Accountleft/>
        <Accountdetails/>
        </div>
    )
}

export default Accountmain