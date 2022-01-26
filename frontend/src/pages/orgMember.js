import React from "react";
import {Link} from "react-router-dom";

function OrgMember(props){
    return(
        <div>
            <h2>{props.orgName}</h2><br></br>
            <Link className="memberLinks" to="/">View Shifts</Link>
            <Link className="memberLinks" to="/">Edit</Link>
            <Link className="memberLinks" to="/">Leave</Link>
            
        </div>
    )
}

export default OrgMember;