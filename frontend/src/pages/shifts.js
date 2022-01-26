import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const URL = "http://127.0.0.1:3001";
var sessionId = "";

function Shifts(props){

    const [username, setUserName] = useState("");
    const [usersOrgName, setUsersOrgName] = useState("");
    const [organisations, setOrganisations] = useState([]);
    const [organisationId, setOrganisationId] = useState(null);

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
                    <h2>{usersOrgName}</h2>
                    <h3>Shifts</h3>

                    <table className="shiftsTable">
                        <thead>
                            <tr>
                                <th>Employee name</th>
                                <th>Shift date</th>
                                <th>Start time</th>
                                <th>Finish time</th>
                                <th>Break length (minutes)</th>
                                <th>Hours worked</th>
                                <th>Shift cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ed</td>
                                <td>today</td>
                                <td>3:00pm </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>)}
        </div>)
}

export default Shifts;