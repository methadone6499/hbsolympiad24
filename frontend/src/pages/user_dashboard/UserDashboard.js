import './userDashboard.css'
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'
import FileBase64 from 'react-file-base64';
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router-dom';

function UserDashboard(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const { email, id, name, phoneNumber } = user;

    const [soloEvents, setSoloEvents] = useState([]);

    const [TeamEvents, setTeamEvents] = useState([]);

    const [ feePayment, setfeePayment ] = useState("");

    const [ approval, setApproval] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async() =>{
            try{
                const res = await axios.post('https://api-yixn.onrender.com/v1/getEvents', {
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
                    console.log(eventDataRN.user);
                    var memberList = "";
                    for (let i = 0; i < eventDataRN.user.length; i++)
                    {
                        console.log(eventDataRN.user[i].userName);
                        memberList = memberList + eventDataRN.user[i].userName + " ,";
                    }
                    console.log(memberList)
                    const teamDataRN = { title: eventDataRN.eventName, CaptName: eventDataRN.name, Email: eventDataRN.email, Token: eventDataRN.token, Members: memberList };
                    teamData[i] = teamDataRN;
                }
                const listTeamTitles = teamData.map((d) => <li key={d.title}>{d.title}</li>);
                setSoloEvents(listSoloTitles);
                setTeamEvents(teamData);
            } catch(e){
                console.log("Error fetching stuff");
            }
        }

        const getApproval = async() => {
            try {
                const res = await axios.post('https://api-yixn.onrender.com/v1/getApproval', {
                    email, id,
                })
                setApproval(res.data.approved);
            }
            catch(e) {
                alert(e)
            }
        }

        fetchEvents();
        getApproval();
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
                await axios.post('https://api-yixn.onrender.com/v1/postFeePayment',{
                    id, email, feePayment
                })
                .then(res=>{
                    alert(res.data.message);
                    window.location.reload(false);
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
                        <ul >
                            <h2>Solo Events</h2>
                                { soloEvents }
                        </ul>
                        <div>
                            <h2>Team Events</h2>
                            <div className="team-list-shown">
                                <ul>
                                    <h2>Titles</h2>
                                    { TeamEvents.map((d) => <li key={d.Email} >{d.title}</li>) }
                                </ul>
                                <ul>
                                    <h2>Captains</h2>
                                    { TeamEvents.map((d) => <li key={d.Email} >{d.CaptName}</li>) }
                                </ul>
                                <ul>
                                    <h2>Email</h2>
                                    { TeamEvents.map((d) => <li key={d.Email} >{d.Email}</li>) }
                                </ul>
                                <ul>
                                    <h2>Members</h2>
                                    { TeamEvents.map((d) => <li key={d.Email} >{d.Members}</li>) }
                                </ul>
                                <ul>
                                    <h2>Token</h2>
                                    { TeamEvents.map((d) => <li key={d.Email} >{d.Token}</li>) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                    
                { approval ? ( console.log("approved") ) : 
                    ( 
                        <div className='infoViewBox'>
                            <label className='Label'>Payment Proof</label>
                            <p className='text-small'>
                                For Fee Payments send to 03025300003 Sadapay and upload picture of payment reciept { '\n' } { '\n' }
                                For HBS students to participate The cost is 500 for a maximum of 5 events Your registration will only be completed once the 1500PKR alongside the 500PKR cost is confirmed{ '\n' }{ '\n' }
                                For Outsiders Till 15th August 2000PKR for socials and up to 5 events maximum From 16th August 2500PKR for socials and up to 5 events maximum { '\n' }{ '\n' }
                                Please make sure the payment recipet you upload has the date of payment visible{ '\n' }{ '\n' }
                            </p>
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
                                <p className='text-small'>Please Upload Your Proof Payment</p>
                                <FileBase64 accept="image/jpeg, image/jpg, image/png" type="file" multiple={false} onDone={({ base64 })=> handleFileChange(base64)}/>
                                <button onClick= {handleProofSubmit} className='reg-btn'>Submit</button>
                            </div> 
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

export default UserDashboard;
