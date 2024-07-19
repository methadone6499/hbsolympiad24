import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Events from "./pages/events/Events"
import IndEventReg from "./pages/ind_event_reg/IndEventReg"
import TeamEventReg from "./pages/team_event_reg/TeamEventReg"
import UserDashboard from "./pages/user_dashboard/UserDashboard"
import AdminDashboard from "./pages/admin_dashboard/adminDashboard"
import UserList from './pages/admin_dashboard/UserList'
import EventList from './pages/admin_dashboard/EventList'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/login" element={<Login/>} />
                <Route path ="/signup" element={<SignUp/>}/>
                <Route path ="/events" element={<Events/>}/>
                <Route path ="/ind_event_reg" element={<IndEventReg/>}/>
                <Route path ="/team_event_reg" element={<TeamEventReg/>}/>
                <Route path="/user_dashboard" element={<UserDashboard/>}/>
                <Route path="/admin_dashboard" element={<AdminDashboard/>}/>
                <Route path="/admin_dashboard/UserList" element={<UserList/>}/>
                <Route path="/admin_dashboard/EventList" element={<EventList/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
