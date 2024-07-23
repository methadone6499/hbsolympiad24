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
import Faqs from './pages/faqs/Faqs'

function App() {

var hours = 1; // to clear the localStorage after 1 hour
               // (if someone want to clear after 8hrs simply change hours=8)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if(now-setupTime > hours*60*60*1000) {
    localStorage.clear()
}


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
                <Route path="/WufZhss2VJkaT8oGh7AJ" element={<AdminDashboard/>}/>
                <Route path="/WufZhss2VJkaT8oGh7AJ/UserList" element={<UserList/>}/>
                <Route path="/WufZhss2VJkaT8oGh7AJ/EventList" element={<EventList/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
