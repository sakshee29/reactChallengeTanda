import React from "react";
import {Link} from "react-router-dom";

const URL = "http://127.0.0.1:3001";

function OrgMember(props){

    function leaveOrg(){

        const url = `${URL}/organisations/leave`;
        const sessionId = localStorage.getItem("sessionId");

        return(
            fetch(url, {
                method: "POST",
                headers: {'Authorization': `${sessionId}`, "Content-Type":"application/json"}
            })
            .then((res)=> res.json())
            .then((res)=> {
                console.log(res);
            })
        )
    }

    return(
        <div>
            <h2>{props.orgName}</h2>
            <Link className="memberLinks" to="/shifts">View Shifts</Link>
            <Link className="memberLinks" to="/organisations/edit">Edit</Link>
            <button className="memberLinks" onClick={leaveOrg} >Leave</button>
            
        </div>
    )
}

export default OrgMember;