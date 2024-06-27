import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Events from "./pages/events/Events"
import IndEventReg from "./pages/ind_event_reg/IndEventReg"
import TeamEventReg from "./pages/team_event_reg/TeamEventReg"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/signup" element={<SignUp/>}/>
                <Route path ="/events" element={<Events/>}/>
                <Route path ="/ind_event_reg" element={<IndEventReg/>}/>
                <Route path ="/team_event_reg" element={<TeamEventReg/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
