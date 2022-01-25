import React from "react";
import {useState, useEffect} from "react";

const URL = "http://127.0.0.1:3001";
var sessionId = "";


function Dashboard(props){
    const [username, setUserName] = useState("");
    const [organisationId, setOrganisationId] = useState("");

    const [orgName, setOrgName] = useState("");
    const [orgRate, setOrgRate] = useState(null);

    const [organisations, setOrganisations] = useState([]);
   
    function logout(){
        localStorage.removeItem("sessionId");
        props.setIsLoggedIn(null);
        // const url = `${URL}/auth/logout`;
        // sessionId = localStorage.getItem("sessionId");
        // const options = {
        //     method: 'DELETE',
        //     headers: {
        //     'Authorization': `${sessionId}` ,
        //     'Content-Type': 'application/json',
        //     }
        // };

        // fetch(url,options)
        // .then((res)=> res.json())
        // .then((res)=> {
        //     console.log(res);
        //     localStorage.removeItem("sessionId");
        //     props.setIsLoggedIn(null);
        // })
        // .catch((error)=> {console.log(`Errors: ${error}`)})
        
    }    

    function createOrganisation(){
        if (orgRate!==null && orgName!==""){
            
            const url = `${URL}/organisations/create_join`;
            sessionId = localStorage.getItem("sessionId");

            return (fetch(url,{
                method: "POST",
                headers: {'Authorization': `${sessionId}`, "Content-Type":"application/json"},
                body: JSON.stringify({name:`${orgName}`, hourlyRate:orgRate})

            })
            .then((res)=> res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((errors)=> {console.log(`Errors: ${errors}`)})
            )
        }
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
            // setOrganisationId("1")
            console.log("The response is:",res);
        })
        .catch((error)=> {console.log(`Errors: ${error}`)}))
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
                :(<p>You aren't a member of any organisation.<br></br> Join an existing one or create a new one.</p>)
            }
            <h2>Organisations</h2>
            <h2>Create Organisation</h2>
            <form>
            <label>
                Name:  
                <input 
                type="text" 
                name="name"
                id="orgName"
                onChange={(event)=>{
                    const{value} = event.target;
                    setOrgName(value);
                }}
                required />
            </label>

            <label>
                Hourly rate: $
                <input 
                type="text" 
                name="name"
                id="orgRate"
                onChange={(event)=>{
                    const{value} = event.target;
                    setOrgRate(value);
                }}
                required />
            </label>
            </form>
            <button onClick={createOrganisation}>Create and Join</button>
        </div>
    );
}

export default Dashboard;