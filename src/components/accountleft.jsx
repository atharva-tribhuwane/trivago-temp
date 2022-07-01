import React from "react";

const Accountleft = ()=>{

    const diiiv = {
        width:"25%",
        color:"gray",
        display:"flex",
        justifyContent:"end",
        padding:"5%"
    }
    const option={
        marginTop:"15%",
        marginBottom:"15%",
        cursor:"pointer"
    }


    return(
       <div style={diiiv}>
       <div>
        <a href="/" style={{color:"rgb(37, 115, 216)", textDecoration:"none"}}>&#60; Back</a>
        <br />
        <br />
        <br />
        <div style={option}>Account Settings</div>
        <div style={option}>Recently Viewed</div>
        <div style={option}>Booking Overview</div>
        <div style={option}>Help And Support</div>
        <hr />
        <div>Logout</div>
       </div>
       </div>
    )
}

export default Accountleft;