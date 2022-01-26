import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import EditOrg from './pages/editOrg';
import Shifts from './pages/shifts';
import './style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import { useState, useEffect } from "react";


/**FIXME: When a person doesn't logout and when the server is started again either it 
//doesn't show login page (due to sessionId error {sessionId doesn't match}) 
or it shows the same person's homepage*/


/* NOTE: Style doesn't necessarily need to be imported in the login.jsx file*/

function App() {

  const [isLoggedIn, setLoggedIn] = useState(null);
  // localStorage.removeItem("sessionId");

  useEffect(() => {
    const loggedUser = localStorage.getItem('sessionId');
    // console.log(Boolean(loggedUser));
    setLoggedIn(Boolean(loggedUser));
  }, []);

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path ="/signup" element={<Signup setIsLoggedIn={setLoggedIn}/>} />
            <Route path ="organisations/edit" element={<EditOrg isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedIn}/>} />
            <Route path = "/shifts" element={<Shifts/>}/>
            {isLoggedIn===null|| isLoggedIn===false ? (
              <Route exact path ="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedIn}/>}/>
            ): (
              <Route exact path ="/" element={<Dashboard setIsLoggedIn={setLoggedIn} />}/>
            )}
            
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
