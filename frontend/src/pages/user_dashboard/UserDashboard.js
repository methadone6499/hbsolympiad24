import './userDashboard.css'
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'
import Navbar from '../navbar/Navbar'

function UserDashboard(){



    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const { name, id, email, phoneNumber, password} = user.result;
    console.log(user);

    const [events, setEvents] = useState([]);

    /*useEffect(() => {
        const fetchEvents = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/v1/getEvents');
                const data = res.data;
                setEvents(data);
            } catch(e){
                console.log("Error fetching stuff");
            }
        }

        fetchEvents();
    },[])*/

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <h1 className="text-big">
                    User Dashboard
                </h1>
                <div className="userInfo infoViewBox">
                    <p className="text-small">
                        Name: {name} {"\n"}
                    </p>
                    <p className="text-small">
                        ID Number: {id} {"\n"}
                    </p>
                    <p className="text-small">
                        Email: {email} {"\n"}
                    </p>
                    <p className="text-small">
                        Phone Number: {phoneNumber} {"\n"}
                    </p>
                </div>
                <h2 className="text-big">
                    List of Registered Events
                </h2>
                <div className="eventInfo infoViewBox">
                    <p className="text-small">
                        Event: man!!!!!
                    </p>
                    <button type="submit" className="btn">Download Ticket</button>
                    <button type="submit" className="btn">Cancel Event Registration</button>
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
