import React from "react";

function Signup(){
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
            <input type="submit" value="Login" />
            </form>

            <a href="#">Signup</a><br></br>
        </div>
    )
}

export default Signup;