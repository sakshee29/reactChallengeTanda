import React from "react";


function Signup(){

    function recordSignup(){
        console.log("Button Clicked!!!!!");
    }

    return(
        <div>
            <a href="#"><h1>Adnat</h1></a>
            <h2>Signup</h2>
            <form>
            <label className='formLabels'>
                Name 
            </label>
            <input type="text" name="name" />

            <label className='formLabels'>
                Email 
            </label>
            <input type="text" name="email" />

            <label className='formLabels'>
                Password<br></br>
                (6 characters minimum)
            </label>
            <input type="password" name="password" />
            <label className='formLabels'>
                Password confirmation
            </label>
            <input type="password" name="password" />
            <br></br>
            <button onClick={recordSignup}>Signup</button>
            </form>

            <a href="#">Login</a><br></br>
        </div>
    )
}

export default Signup;