import './userDashboard.css'
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function UserDashboard(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const { email, id, name, phoneNumber, password } = user;

    const [events, setEvents] = useState([]);


    useEffect(() => {
        const fetchEvents = async() =>{
            try{
                const res = await axios.post('http://localhost:5000/v1/getEvents', {
                    id, email, 
                })
                const eventData = res.data.user.events;
                setEvents(eventData)
            } catch(e){
                console.log("Error fetching stuff");
            }
        }

        fetchEvents();
    },[])

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <h1 className="text-big">
                    User Dashboard
                </h1>
                <div className="infoViewBox">
                    <p className="text-small">
                        Name: {name} {'\n' }
                        ID Number: {id} {'\n'}
                        Email: {email} {'\n'}
                        Phone Number: {phoneNumber} {'\n'}
                    </p>
                </div>
                <h2 className="text-big">
                    List of Registered Events
                </h2>
                <div className="infoViewBox">
                    <p className="text-small">
                        { console.log("here")} 
                        { console.log() }
                        ALL EVENT INFO WILL GO HERE SUCH IE THE EVENT NAME AAAAAAAAAA
                    </p>
                    <button type="submit" className="btn">Download Ticket</button>
                </div>
                <div>
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
