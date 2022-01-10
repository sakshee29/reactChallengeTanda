import React from "react";
import {useState, useEffect} from "react";

const URL = "http://127.0.0.1:3001";

function Login(){
    const[sessionId, setsessionId] = useState("");
    const[error, setError] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function login(){
        const url = `${URL}/auth/login`

        return (fetch(url , {
            method: "POST",
            headers: {accept: "application/json", "Content-Type":"application/json"},
            body: JSON.stringify({email:`${email}`, password:`${password}`})
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res.error){
                setError(res.error);
                setsessionId("");
            }
            if(res.sessionId){
                setError("");
                setsessionId(res.sessionId);
            }
        })
        .catch((error)=> console.log("Error",error)))
    }

    return(
        <div>
            <a href="#"><h1>Adnat</h1></a>
            <h2>Login</h2>
            <p>The Error is:- {error}</p>
            <p>The Id is: {sessionId}</p>

            <form>
                <label className='formLabels'>
                    Email 
                </label>
                <input 
                type="text"
                name="email" 
                onChange={(event)=>{
                    const{value} = event.target;
                    setEmail(value);
                }}
                required />

                <label className='formLabels'>
                    Password
                </label>
                <input 
                type="password" 
                name="password"
                onChange={(event)=>{
                    const{value} = event.target;
                    setPassword(value);
                }}
                required />
            
            </form>

            <button onClick={login}>Login</button>
            <br></br>
            <a href="#">Signup</a><br></br>
            <a href="#">Forgot your Password?</a>

        </div>
    )
}

export default Login;