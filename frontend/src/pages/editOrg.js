import React from "react";
import {Link} from "react-router-dom";

export default function EditOrg(props){

    return(
        <div>
            {!props.isLoggedIn ? 
                (<div>
                    <h2>Login to access this route </h2>
                    <Link to="/">Login</Link>
                </div>)
                :
                (<div>
                    <h2>THIS IS EDIT PAGE</h2>
                </div>)}
        </div>
    )
}