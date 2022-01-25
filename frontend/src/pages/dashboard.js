import React from "react";
import {useState, useEffect} from "react";

const URL = "http://127.0.0.1:3001";
var sessionId = "";


function Dashboard(props){
    const [username, setUserName] = useState("");
    const [organisationId, setOrganisationId] = useState("");

    //FIXME: LOGOUT functionality. Page doesn't refresh when we logout 
    //TODO: Add props like isloggedIn 
    function logout(){
        localStorage.removeItem("sessionId");
        props.setIsLoggedIn(false);
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
            // setOrganisationId("1")
            console.log("The response is:",res);
        })
        .catch((error)=> {console.log(`Errors: ${error}`)})
    }

    useEffect(()=>{
        getUserDetails();
    })

    return(
        <div>
        <p>Logged in as {username}</p>
        <button onClick={logout}>Logout</button>
        {organisationId!=null ? 
            (<p>You are the member of {organisationId}</p>)
            :(<p>You aren't a member of any organisation.<br></br> Join an existing one or create a new one.</p>)}
        </div>
    );
}

export default Dashboard;