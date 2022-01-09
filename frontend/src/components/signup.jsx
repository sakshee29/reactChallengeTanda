import React from "react";
import {useState, useEffect} from "react";

const URL = "localhost:3001";

function Signup(){

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
        .then((res) => {console.log(res)})
        .catch((error)=> console.log("Error",error))
    )}


    return(
        <div>
            <a href="#"><h1>Adnat</h1></a>
            <h2>Signup</h2>
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
            <button onClick={registerUser}>Signup</button>
            </form>

            <a href="#">Login</a><br></br>
        </div>
    )
}

export default Signup;