import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const URL = "http://127.0.0.1:3001";



function Signup(){
    const[sessionId, setsessionId] = useState("");
    const[error, setError] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passConfirm, setPassConfirm] = useState("");
    

    function registerUser(){
        const url = `${URL}/auth/signup`

        return (fetch(url , {
            method: "POST",
            headers: {accept: "application/json", "Content-Type":"application/json"},
            body: JSON.stringify({name:`${name}`, email:`${email}`, password:`${password}`, passwordConfirmation:`${passConfirm}`})
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
        .catch((error)=> console.log("Error",error))
    )}


    return(
        <div>
            <a href="#"><h1>Adnat</h1></a>
            <h2>Signup</h2>
            <p>The Error is:- {error}</p>
            <p>The Id is: {sessionId}</p>

            <form>
                <label className='formLabels'>
                    Name 
                </label>
                <input 
                type="text" 
                name="name"
                id="name"
                onChange={(event)=>{
                    const{value} = event.target;
                    setName(value);
                }}
                required />

                <label className='formLabels'>
                    Email 
                </label>
                <input 
                type="text" 
                name="email"
                id="email"
                onChange={(event)=>{
                    const{value} = event.target;
                    setEmail(value);
                }}
                required />

                <label className='formLabels'>
                    Password<br></br>
                    (6 characters minimum)
                </label>
                <input 
                type="password"
                name="password"
                id="password"
                onChange={(event)=>{
                    const{value} = event.target;
                    setPassword(value);
                }}
                required />

                <label className='formLabels'>
                    Password confirmation
                </label>
                <input
                type="password" 
                name="password"
                id="passConfirm"
                onChange={(event)=>{
                    const{value} = event.target;
                    setPassConfirm(value);
                }}
                required />
                <br></br> 
            </form>

            <button onClick={registerUser}>Signup</button>
            <br></br>
            <a href="">Login</a>
        </div>
    )
}

export default Signup;