import React from "react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "http://127.0.0.1:3001";
var sessionId = "";

export default function EditOrg(props){

    const [username, setUserName] = useState("");
    const [organisationId, setOrganisationId] = useState(null);

    const [newOrgName, setNewOrgName] = useState("");
    const [newOrgRate, setNewOrgRate] = useState(null);

    const [organisations, setOrganisations] = useState([]);
    //Organisation Name for a particular user
    const [usersOrgName, setUsersOrgName] = useState("");
    const [usersOrgRate, setUsersOrgRate] = useState(null);

    function updateOrg(){

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

        return(fetch(url, options)
        .then((res)=> res.json())
        .then((res)=>{
            setUserName(res.name);
            setOrganisationId(res.organisationId);
            console.log("The response is:",res);
        })
        .catch((error)=> {console.log(`Errors: ${error}`)}))
    }

    function logout(){
        localStorage.removeItem("sessionId");
        props.setIsLoggedIn(null);
    }  

    function getOrganisations(){
        const url = `${URL}/organisations`;
        sessionId = localStorage.getItem("sessionId");
        return(fetch(url,{
                method:"GET",
                headers: {'Authorization': `${sessionId}`, "Content-Type":"application/json"},
            })
            .then((res)=>res.json())
            .then((data)=> {
                
                setOrganisations(data);
                setUsersOrgName(data[organisationId-1].name);
                setUsersOrgRate(data[organisationId-1].hourlyRate);
                console.log(data);
            
            })
        )
    }

    useEffect(()=>{
        getUserDetails();
        getOrganisations();
    })


    return(
        <div>
            {!props.isLoggedIn ? 
                (<div>
                    <h2>Login to access this route </h2>
                    <Link to="/">Login</Link>
                </div>)
                :
                (<div>
                    <p>Logged in as {username}</p>
                    <button onClick={logout}>Logout</button>
                    <h2>Edit Organisation</h2>
                    <p>You are editing {usersOrgName}</p>
                    <form>
                        <label>
                            Name:  
                            <input 
                            type="text" 
                            name="name"
                            id="orgName"
                            placeholder={usersOrgName}
                            onChange={(event)=>{
                                const{value} = event.target;
                                setNewOrgName(value);
                            }}
                            required />
                        </label>

                        <label>
                            Hourly rate: $
                            <input 
                            type="text" 
                            name="rate"
                            id="orgRate"
                            placeholder={usersOrgRate}
                            onChange={(event)=>{
                                const{value} = event.target;
                                setNewOrgRate(value);
                            }}
                            required /> per hour
                        </label>
                        <button onClick={updateOrg}>Update</button> <br></br>
                    </form>
                    <button>Delete Organisation</button>
                </div>)}
        </div>
    )
}