import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import './style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import { useState } from "react";


/* NOTE: Style doesn't necessarily need to be imported in the login.jsx file*/

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path ="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
            
            {!isLoggedIn ? (
              <Route exact path ="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            ): (
              <Route exact path ="/" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}/>
            )}
            
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
