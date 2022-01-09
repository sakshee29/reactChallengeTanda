import React from "react";

function Login(){
    return(
        <div>
            <a href="#"><h1>Adnat</h1></a>
            <h2>Login</h2>
            <form>
            <label className='formLabels'>
                Email: 
            </label>
            <input type="text" name="email" />

            <label className='formLabels'>
                Password:
            </label>
            <input type="text" name="email" />
            <br></br>
            <input type="submit" value="Login" />
            </form>

            <a href="#">Signup</a><br></br>
            <a href="#">Forgot your Password?</a>

        </div>
    )
}

export default Login;