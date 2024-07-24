import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import axios from 'axios'

function EventList(){

    const option = [
        { eventName: "Choose an Event" },
        { eventName: "Table Tennis" },
        { eventName: "Table Tennis Duo" },
        { eventName: "Volleyball" },
        { eventName: "Basketball" },
        { eventName: "Chess" },
        { eventName: "Tekken" },
        { eventName: "FIFA" },
        { eventName: "PUBG" },
        { eventName: "Futsal" },
        { eventName: "Quizzes" },
        { eventName: "Suturing" },
        { eventName: "BLS Competition" },
        { eventName: "Research Conference" },
        { eventName: "MUN (UNSC)" },
        { eventName: "MUN (PNA)" },
        { eventName: "MUN (CC)" },
        { eventName: "Scavenger hunt" },
        { eventName: "Art Competition" },
        { eventName: "Videography competition" },
        { eventName: "Art Gallery" },
    ]

    const [ eventName, setEventName ] = useState("");
    const [ eventSearched, setEventSearched ] = useState("");
    const [ isEventSolo, setIsEventSolo ] = useState(true);
    const [ noOfParticipants, setNoOfParticipants ] = useState("");

    const handleEventName = (e) => {
        setEventName(e.target.value);
    }

    const handleEventSearchSubmit = async(e) => {

        e.preventDefault();
        console.log(eventName);
        
        try{
            const res = await axios.post('http://localhost:5000/admin/getEventForms', {
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
            alert('No Participants in selected event');
            setEventName("N/A");
            setNoOfParticipants("0");
            console.log(e);
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

                <div className='eventDropList'>
                    <select value={eventName} onChange={handleEventName}>
                        {
                            option.map( (d)=> <option value={d.eventName}>{d.eventName}</option> )
                        }
                    </select>
                    <button className="btn btn-sm" onClick={handleEventSearchSubmit}>Get Event Participants</button> 
                </div>

                <div className='text-big'>
                    <p>No of Participants/Teams in {eventName} : </p>
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