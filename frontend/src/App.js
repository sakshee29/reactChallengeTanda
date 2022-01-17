import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import './style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";


/* NOTE: Style doesn't necessarily need to be imported in the login.jsx file*/

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path ="/signup" element={<Signup />} />
            <Route path ="/login" element={<Login />}/>
            <Route path ="/dashboard" element={<Dashboard />}/>
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
