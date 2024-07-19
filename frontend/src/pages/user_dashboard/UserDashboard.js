import './userDashboard.css'
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'
import FileBase64 from 'react-file-base64';
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function UserDashboard(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const { email, id, name, phoneNumber } = user;

    const [soloEvents, setSoloEvents] = useState([]);

    const [TeamEvents, setTeamEvents] = useState([]);

    const [ feePayment, setfeePayment ] = useState("");

    const [titleMap, setTitleMap] = useState([]);
    const [idMap, setIdMap] = useState([]);

    useEffect(() => {
        const fetchEvents = async() =>{
            try{
                const res = await axios.post('http://localhost:5000/v1/getEvents', {
                    email, 
                })

                const eventSoloData = res.data.solo;
                const listSoloTitles = eventSoloData.map((d) => <li key={d.title}>{d.title}</li>);
                const eventTeamData = res.data.teamMembersbyEvent
                const teamtEventAmmount = Object.keys(eventTeamData).length;
                const teamData = [];
                for (var i = 0; i < teamtEventAmmount; i++)
                {
                    const eventDataRN = eventTeamData[i][0];
                    const teamDataRN = { title: eventDataRN.eventName, CaptName: eventDataRN.name, Members: Object.values(eventDataRN.user) };
                    console.log(teamDataRN);
                    teamData[i] = teamDataRN;
                }
                const listTeamTitles = teamData.map((d) => <li key={d.title}>{d.title}</li>);
                console.log(listTeamTitles);
                setSoloEvents(listSoloTitles);
                setTeamEvents(teamData);
            } catch(e){
                console.log("Error fetching stuff");
            }
        }

        fetchEvents();
    },[])
    
    const handleFileChange = (base64) => {
        const file = base64;
        var sizeInBytes = 4 * Math.ceil((file.length / 3))*0.5624896334383812;
        if (sizeInBytes > 2097152) { // 5 MB in bytes
            alert('File size exceeds 2 MB. Please choose a smaller file.');
            setfeePayment("")
        } else {
            setfeePayment(base64);
        }
      };

    const handleProofSubmit = async(e) => {
        e.preventDefault();

        if (feePayment === "") { alert("No Image Uploaded") }
        else {
            try{
                await axios.post('http://localhost:5000/v1/postFeePayment',{
                    id, email, feePayment
                })
                .then(res=>{
                    alert(res.data.message);
                })
            }
            catch(e){
                alert('Server error');
            }
        }
    }

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
                    <div className="text-small user-shown-events">
                        <ul>
                        <h2>Solo Events</h2>
                            { soloEvents }
                        </ul>
                        <div>
                            <h2>Team Events</h2>
                            <div class="team-list-shown">
                                <ul>
                                    <h2>Titles</h2>
                                    { TeamEvents.map((d) => <li >{d.title}</li>) }
                                </ul>
                                <ul>
                                    <h2>Captains</h2>
                                    { TeamEvents.map((d) => <li >{d.CaptName}</li>) }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn">Download Ticket</button>
                </div>
                <br />
                <div className="infoViewBox">
                    <label className='Label'>Payment Proof</label>
                    <div className='imgInuput'>
                        {feePayment &&  (
                            <div className='imgDisplay'>
                                <img 
                                    alt="not found"
                                    width = {"250px"}
                                    src = {feePayment}
                                />
                                <button className='reg-btn' onClick={()=>{ setfeePayment(null)}}>Remove Image</button>
                            </div>
                        )}
                        <FileBase64 accept="image/jpeg, image/jpg, image/png" type="file" multiple={false} onDone={({ base64 })=> handleFileChange(base64)}/>
                        <button onClick= {handleProofSubmit} className='reg-btn'>Submit</button>
                    </div>
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
