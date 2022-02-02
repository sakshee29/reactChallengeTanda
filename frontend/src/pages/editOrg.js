import React from "react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "http://127.0.0.1:3001";
var sessionId = "";

export default function EditOrg(props){

    const [username, setUserName] = useState("");
    const [organisationId, setOrganisationId] = useState(1);

    const [organisations, setOrganisations] = useState([]);
    //Organisation Name for a particular user
    const [usersOrgName, setUsersOrgName] = useState("");
    const [usersOrgRate, setUsersOrgRate] = useState(null);

    const [newOrgName, setNewOrgName] = useState(usersOrgName);
    const [newOrgRate, setNewOrgRate] = useState(usersOrgRate);

    function updateOrg(){
        const url = `${URL}/organisations/${organisationId}`;
        sessionId = localStorage.getItem("sessionId");

        return(fetch(url,{
            method:"PUT",
            headers: {'Authorization': `${sessionId}`, "Content-Type":"application/json"},
            body: JSON.stringify({name:`${newOrgName}`, hourlyRate:newOrgRate})
        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res);
        })
        )
    }

    function getUserDetails(){
        const url = `${URL}/users/me`;
        sessionId = localStorage.getItem("sessionId");
        // console.log("The id is:", sessionId);

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
            // console.log("The response is:",res);
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
                console.log(`The current org is: ${organisationId}`)
                setUsersOrgName(data[organisationId-1].name);
                setUsersOrgRate(data[organisationId-1].hourlyRate);
                // console.log(data);
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
                            />
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
                             /> per hour
                        </label>
                        <button onClick={updateOrg}>Update</button> <br></br>
                        </form>
                    
                </div>)}
        </div>
    )
}