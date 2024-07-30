import './userDashboard.css'
import {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import React from 'react'
import FileBase64 from 'react-file-base64';
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router-dom';
import jsPDF from "jspdf";
import "jspdf-autotable"

function UserDashboard(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const { email, id, name, phoneNumber } = user;

    const [soloEvents, setSoloEvents] = useState([]);

    const [TeamEvents, setTeamEvents] = useState([]);

    const [ feePayment, setfeePayment ] = useState("");

    const [ approval, setApproval] = useState(false)

    const navigate = useNavigate();


    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        var img = new Image();
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "HBS Ticket";
        const headers = [["Event", "Type", "Captain Name"]];

        img.src = 'https://i.imgur.com/e6Lnl9j.png'
    
        const dataSolo = soloEvents.map(d=> [d.key, "Solo", ""]);
        const dataTeam = TeamEvents.map(d=> [d.title, "Team", d.CaptName]);
        
        const data = [...dataSolo, ...dataTeam];

        const namePrint = "Name : " + name;
        const IdPrint = "ID : " + id;
        const emailPrint = "Email : " + email;

        const userInfo = [[namePrint],[IdPrint],[emailPrint]]

        let userInfoTable = {
            startY: 60,
            body: userInfo,
            styles: {color: [0,0,0]}
        }

        let content = {
            startY: 150,
            head: headers,
            body: data,
            styles : { halign : 'center' }, 
            headStyles :{fillColor : [17, 17, 17]},
            alternateRowStyles: {fillColor : [231, 215, 252]}, 
            tableLineColor: [124, 95, 240], 
            tableLineWidth: 0.1,
        };

        doc.text(title, 250, 40);
        doc.autoTable(userInfoTable);
        doc.autoTable(content);
        doc.save("report.pdf")
      }

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
                const res = await axios.post('http://localhost:5000/v1/getApproval', {
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

        if (feePayment === "" || feePayment === null) { alert("No Image Uploaded") }
        else {
            try{
                await axios.post('http://localhost:5000/v1/postFeePayment',{
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
                                { console.log(soloEvents) }
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
                                { console.log(TeamEvents) }
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                    
                { approval ? 
                    ( 
                        <div>
                            <button className='btn btn-sm' onClick={exportPDF}>Print Ticket</button>
                        </div>
                    ) : 
                    ( 
                        <div className='infoViewBox'>
                            <label className='Label'>Payment Proof</label>
                            <p className='text-small'>
                                For Fee Payments send to { '\n' }
                                Account Name: MUHAMMAD NEHYAN { '\n' }
                                IBAN: PK21KHYB0022002010127303 { '\n' }
                                Bank: Bank of Khyber { '\n' }
                                Account Name: Haris Tanveer { '\n' }
                                Account number: 03357888774 Sadapay { '\n' }
                                and upload picture of payment receipt { '\n' } { '\n' }
                                { '\n '}
                                To check payment costs, please refer to the 
                                <a href="https://www.instagram.com/hbs.studentcouncil?igsh=MWpycmFhMHBxYjgxeg==">Instagram Page</a>
                                { '\n' } { '\n' }
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
