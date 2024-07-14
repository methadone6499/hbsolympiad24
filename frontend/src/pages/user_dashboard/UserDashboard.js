import './userDashboard.css'
import {Link, useLocation} from "react-router-dom"
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'

function UserDashboard(props){

    const location = useLocation();
    console.log(location);

    const { name, idNum, email, phoneNumber, password} = location.state;
    console.log(name);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/v1/getEvents');
                const data = res.data;
                setEvents(data);
                console.log(data);
            } catch(e){
                console.log("Error fetching stuff");
            }
        }

        fetchEvents();
    },[])

    return(
        <div className='Home'>
            <nav class="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div class="dropdown"> 
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">*
                        <div class="Login">
                            <button class="btn btn-sm">
                                <Link to="/login" class="links">Login</Link>
                            </button>
                        </div>
                        <div class="SignUp">
                            <button class="btn btn-sm">
                                <Link to="/signup" class="links">Sign Up</Link>
                            </button>
                        </div>
                    {</div>
                </div>*/}

                

                {/*navigation list for various menus*/}
                <ul class="nav-list">
                    <li>
                        <Link to="/" class="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" class="links">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>{/*}
                    <li>
                        <Link to="/user_dashboard" class="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" class="links">Admin</Link>
                    </li>*/}
                </ul>
                <div class="Login">
                    <button class="btn btn-sm">
                        <Link to="/login" class="links">Login</Link>
                    </button>
                </div>
                <div class="SignUp">
                    <button class="btn btn-sm">
                        <Link to="/signup" class="links">Sign Up</Link>
                    </button>
                </div>

                {/*<div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div class="box-main">
                <h1 class="text-big">
                    User Dashboard
                </h1>
                <div class="userInfo infoViewBox">
                    <p class="text-small">
                        Name: {name} {"\n"}
                    </p>
                    <p class="text-small">
                        ID Number: {idNum} {"\n"}
                    </p>
                    <p class="text-small">
                        Email: {email} {"\n"}
                    </p>
                    <p class="text-small">
                        Phone Number: {phoneNumber} {"\n"}
                    </p>
                </div>
                <h2 class="text-big">
                    List of Registered Events
                </h2>
                <div class="eventInfo infoViewBox">
                    <p class="text-small">
                        Event: man!!!!!
                    </p>
                    <button type="submit" class="btn">Download Ticket</button>
                    <button type="submit" class="btn">Cancel Event Registration</button>
                </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default UserDashboard;