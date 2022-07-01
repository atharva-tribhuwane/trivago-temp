import React from "react";
import { useState } from "react";


const Accountdetails = () => {



    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const changename = () => {
        let user = localStorage.getItem("activeuser");

        const userData = {
            name: firstname + " " + lastname
        }

        fetch(`http://localhost:3001/users`)
            .then((res) => res.json())
            .then((res) => {
                res.forEach(function (dt) {
                    if (dt.email === user) {
                        // console.log("found");
                        let id = dt.id;
                        fetch(`http://localhost:3001/users/${id}`, {
                            method: "PATCH",
                            body: JSON.stringify(userData),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => console.log(err));
                    }
                })
            })
            .catch((err) => console.log(err));



    }

    const changepassword = () => {
        let user = localStorage.getItem("activeuser");

        const userData = {
            password: newpassword
        }

        fetch(`http://localhost:3001/users`)
            .then((res) => res.json())
            .then((res) => {
                res.forEach(function (dt) {
                    if (dt.email === user) {
                        // console.log("found");
                        if (oldpassword === dt.password) {
                            let id = dt.id;
                            fetch(`http://localhost:3001/users/${id}`, {
                                method: "PATCH",
                                body: JSON.stringify(userData),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                                .then((res) => res.json())
                                .then((res) => {
                                    console.log(res);
                                })
                                .catch((err) => console.log(err));
                        }
                        else{
                            alert("old password not matching");
                        }
                    }
                })
            })
            .catch((err) => console.log(err));



    }

    const formcss = {
        display: "flex",
        flexDirection: "column",
    }

    const inpstyle = {
        padding:"2%",
        fontSize:"16px",
        borderRadius:"5px",
        border:"1px solid gray",
        marginBottom:"4%"
    }
    const btnstyle = {
        width:"45%",
        padding:"2%",
        fontSize:"16px",
        fontWeight:"500",
        backgroundColor:"rgb(37, 115, 216)",
        color:"white",
        border:"none",
        borderRadius:"5px",
        marginTop:"3%",
        marginBottom:"5%",
        cursor:"pointer"
    }


    return (
        <div style={{width:"60%"}}>
            <h1>Account Details</h1>
            <p>Personal Information</p>
            <div>
                <form onSubmit={(e) => e.preventDefault()} style={formcss}>
                    <label htmlFor="firstname"><b>First name</b></label>
                    <input type="text" placeholder="e.g John" value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} style={inpstyle} />
                    <label htmlFor="lastname"><b>Last name</b></label>
                    <input type="text" placeholder="e.g Smith" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} style={inpstyle} />
                    <button onClick={changename} style={btnstyle}>Update personal information</button>
                </form>
            </div>
            <p>Change your password</p>
            <form onSubmit={(e) => e.preventDefault()} style={formcss}>
                <label htmlFor="oldpassword"><b>Old Password</b></label>
                <input type="password" value={oldpassword}
                    onChange={(e) => setOldpassword(e.target.value)} style={inpstyle}/>
                <label htmlFor="newpassword"><b>New Password</b></label>
                <input type="password" value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)} style={inpstyle}/>
                <div>
                    Password Requirements
                    <ul style={{margin:"0", padding:"0"}}>
                        <li style={{marginLeft:"3%", padding:"0"}}>Has Minimum 10 Characters</li>
                        <li style={{marginLeft:"3%", padding:"0"}}>Contains Atleast 10 Characters</li>
                    </ul>
                </div>
                <button onClick={changepassword} style={btnstyle}>Change Password</button>
            </form>
        </div>
    )
}

export default Accountdetails;