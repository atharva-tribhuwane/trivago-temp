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
        flexDirection: "column"
    }



    return (
        <div>
            <h1>Account Details</h1>
            <p>Personal Information</p>
            <div>
                <form onSubmit={(e) => e.preventDefault()} style={formcss}>
                    <label htmlFor="firstname"><b>First name</b></label>
                    <input type="text" placeholder="e.g John" value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} />
                    <label htmlFor="lastname"><b>Last name</b></label>
                    <input type="text" placeholder="e.g Smith" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} />
                    <button onClick={changename}>Update personal information</button>
                </form>
            </div>
            <p>Change your password</p>
            <form onSubmit={(e) => e.preventDefault()} style={formcss}>
                <label htmlFor="oldpassword"><b>Old Password</b></label>
                <input type="password" value={oldpassword}
                    onChange={(e) => setOldpassword(e.target.value)} />
                <label htmlFor="newpassword"><b>New Password</b></label>
                <input type="password" value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)} />
                <div>
                    Password Requirements
                    <ul>
                        <li>Has Minimum 10 Characters</li>
                        <li>Contains Atleast 10 Characters</li>
                    </ul>
                </div>
                <button onClick={changepassword}>Update personal information</button>
            </form>
        </div>
    )
}

export default Accountdetails;