import React from "react";
import {useState, useEffect} from "react";

const URL = "http://127.0.0.1:3001";
var sessionId = "";


function Dashboard(){
    const [username, setUserName] = useState("");
    const [organisationId, setOrganisationId] = useState("");

    function logout(){
        localStorage.removeItem("sessionId");
    }    

    function getUserDetails(){
        const url = `${URL}/users/me`;
        sessionId = localStorage.getItem("sessionId");
        console.log("The id is:", sessionId);

        const options = {
            method: 'GET',
            headers: {
            'Authorization': `${sessionId}` ,
            'Content-Type': 'application/json',
            }
        };

        fetch(url, options)
        .then((res)=> res.json())
        .then((res)=>{
            setUserName(res.name);
            setOrganisationId(res.organisationId);
            console.log("The response is:",res);
        })
        .catch((error)=> {console.log(`Errors: ${error}`)})
    }

    useEffect(()=>{
        getUserDetails();
    })

    return(
        <div>
        <h2>Hello {username}</h2>
        <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;