import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to="/"><h1>Adnat</h1></Link>
        </header>
    );
}

export default Header;