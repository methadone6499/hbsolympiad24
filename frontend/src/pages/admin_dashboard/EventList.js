import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import axios from 'axios'

function EventList(){

    const [ eventName, setEventName ] = useState("");
    const [ eventSearched, setEventSearched ] = useState("");
    const [ isEventSolo, setIsEventSolo ] = useState(true);
    const [ noOfParticipants, setNoOfParticipants ] = useState("");

    const handleEventName = (e) => {
        setEventName(e.target.value);
    }

    const handleEventSearchSubmit = async(e) => {

        e.preventDefault();

        try{
            const res = await axios.post('https://api-yixn.onrender.com/admin/getEventForms', {
                eventName
            })
            const eventAmmount = Object.values(res.data).length;
            const eventList = [];
            console.log(res.data.length);
            var eventSolo = true;
            if (res.data[0].user) { eventSolo = false }
            else { eventSolo = true }
            setIsEventSolo(eventSolo);
            setNoOfParticipants(res.data.length)
            for (var i = 0; i < eventAmmount; i++)
            {
                const eventDataRN = Object.values(res.data)[i];
                var eventListRN = {};
                var memberList = "";
                if (eventSolo) {}
                else 
                {
                    for (let i = 0; i < eventDataRN.user.length; i++)
                        {
                            console.log(eventDataRN.user[i].userName);
                            memberList = memberList + eventDataRN.user[i].userName + " ,";
                        }
                }
                console.log(memberList);
            if (eventSolo === true) { eventListRN = { CaptName: eventDataRN.name, ID: eventDataRN.id, Email:eventDataRN.email } }
                else { eventListRN = { CaptName: eventDataRN.name, ID: eventDataRN.id, Email:eventDataRN.email, Members: memberList } }
                eventList[i] = eventListRN;
            }
            setEventSearched(eventList);
        }
        catch(e) {
            alert('server error here')
            console.log(e)
        }
    }

    return(
        <div className='Home'>
            <Navbar />
            <div className='box-main'>
                <Logo />
                <h1 className="text-big">
                    Event List
                </h1>
                
                <form>
                    <input
                        onChange = {handleEventName}
                        className = "Input"
                        value = {eventName}
                        type = "text"
                        placeholder='Event Search'
                    />
                    <button className="btn btn-sm" onClick={handleEventSearchSubmit}>Get Event Participants</button> 
                </form>
                <div className='text-big'>
                    <p>No of Participants/Teams: </p>
                    {noOfParticipants}
                </div>
                { isEventSolo ? 
                (
                    <div className='shownList-event'>
                        <ul>
                            <h2>Name</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.CaptName}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>ID</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.ID}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Email</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.Email}</li>)  ) : ( 'none' ) }
                        </ul>
                    </div>
                ) : 
                (
                    <div className='shownList event'>
                        <ul>
                            <h2>Name</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.CaptName}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>ID</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.ID}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Email</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.Email}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Members</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.Members}</li>) ) : ( 'none' ) }
                        </ul>
                    </div>
                )
                }
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default EventList