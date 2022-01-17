import Login from './pages/login';
import Signup from './pages/signup';
import './style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

/* NOTE: Style doesn't necessarily need to be imported in the login.jsx file*/

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          
          <Routes>
            <Route path ="/signup" element={<Signup />} />
            <Route path ="/login" element={<Login />}/>
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
