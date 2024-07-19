import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import axios from 'axios'

function EventList(){

    const [ eventName, setEventName ] = useState("");
    const [ eventSearched, setEventSearched ] = useState("");
    const [ isEventSolo, setIsEventSolo ] = useState(true);

    const handleEventName = (e) => {
        setEventName(e.target.value);
    }

    const handleEventSearchSubmit = async(e) => {

        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/admin/getEventForms', {
                eventName
            })
            const eventAmmount = Object.values(res.data).length;
            const eventList = [];
            var eventSolo = true;
            if (res.data[0].user) { eventSolo = false }
            else { eventSolo = true }
            setIsEventSolo(eventSolo);
            for (var i = 0; i < eventAmmount; i++)
            {
                const eventDataRN = Object.values(res.data)[i];
                var eventListRN = {};
                if (eventSolo === true) { eventListRN = { CaptName: eventDataRN.name, ID: eventDataRN.id, Email:eventDataRN.email } }
                else { eventListRN = { CaptName: eventDataRN.name, ID: eventDataRN.id, Email:eventDataRN.email, Members: Object.values(eventDataRN.user)} }
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

                { isEventSolo ? 
                (
                    <div className='shownList-event'>
                        <ul>
                            <h2>Name</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.CaptName}>{d.CaptName}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>ID</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.ID}>{d.ID}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Emai</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.Email}</li>)  ) : ( 'none' ) }
                        </ul>
                    </div>
                ) : 
                (
                    <div className='shownList'>
                        <ul>
                            <h2>Name</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.CaptName}>{d.CaptName}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>ID</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.ID}>{d.ID}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Emai</h2>
                            { eventSearched ? ( eventSearched.map((d) => <li key={d.Email}>{d.Email}</li>)  ) : ( 'none' ) }
                        </ul>
                        <ul>
                            <h2>Members</h2>
                            { eventSearched ? ( eventSearched[0].Members.map((d) => <li key={d.userName}>{d.userName}</li>)  ) : ( 'none' ) }
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