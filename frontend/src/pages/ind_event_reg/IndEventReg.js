import { useEffect, useState } from 'react'
import './IndEventReg.css'
import axios from 'axios'
import Navbar from '../navbar/Navbar'

function IndEventReg(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [selectedEvent, setSelectedEvent] = useState("");

    const { name, id, email, phoneNumber, password } = user?.result;

    const handleEventSelect = async(selectedEvent) => {
        setSelectedEvent(selectedEvent);
        setSubmitted(false);
    }

    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        console.log('Event selected:', selectedEvent);
        handleSubmit();
      }, [selectedEvent]);

    const handleSubmit = async() => {

        if (selectedEvent=== "")
        {
            setError(true);
        } 
        else
        {
            setSubmitted(true);
            setError(false);
            console.log(selectedEvent)
            const eventID = selectedEvent;
            console.log(eventID)
            try
            {
                console.log(selectedEvent)
                await axios.post("http://localhost:5000/v1/submitFormSolo",{
                    name, email, phoneNumber, id, eventID
                })
                .then(res=>{
                    alert(res.data.message);
                })
            }
            catch(e)
            {
                alert('server error')
            }
        }
    }

    const SuccessMessage = () => {
        return ( 
            <div 
                className="success"
                style={{ 
                    display: submitted ? "" : "none", 
                }} 
            > 
                <h1>Event successfully registered!!</h1> 
            </div> 
        ); 
    }; 

    const errorMessage = () => { 
        console.log("error");
    };


    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                    placeholder="logo"
                />
                <h1 className="text-big">
                    Individual Event Registration
                </h1>
                <p className="text-small">
                    Here you can register for all events and competitions that require a single person as the competitor.{"\n"}
                    For events relating to teams please check out the team event registration tab.
                </p>


                <div className="event-reg-box">
                    <div className='text-small'>
                        {errorMessage()}
                        {SuccessMessage()}
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Table Tennis
                        </p>
                        <p className="text-small">
                            Table tennis, or ping pong, is a fast-paced indoor sport played on a table divided by a net. Players use paddles to hit a lightweight ball back and forth. It requires quick reflexes, strategic thinking, and precise ball control.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                        {(e)=>{
                            handleEventSelect("Table Tennis (Solo)");
                         }}>Register</button> 
                    </div>

                    <div className="ER-event E_T">
                        <p className="text-big">
                            Chess
                        </p>
                        <p className="text-small">
                            Chess is a strategic board game for two players on a checkered 64-square board. Players aim to checkmate the opponent's king by strategically moving pieces.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Chess");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            E-Games (Tekken)
                        </p>
                        <p className="text-small">
                            E-gaming, or electronic gaming, involves playing video games on devices like computers, consoles, and mobiles. It includes casual gaming, competitive gaming, and professional esports, featuring single-player and multiplayer experiences, and has grown into a major part of modern entertainment and culture.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Chess");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            E-Games (FIFA)
                        </p>
                        <p className="text-small">
                            E-gaming, or electronic gaming, involves playing video games on devices like computers, consoles, and mobiles. It includes casual gaming, competitive gaming, and professional esports, featuring single-player and multiplayer experiences, and has grown into a major part of modern entertainment and culture.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Chess");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Suturing
                        </p>
                        <p className="text-small">
                            Suturing is a medical procedure used to close wounds or surgical incisions with stitches. It involves using a needle and thread to sew tissue together, promoting healing and reducing the risk of infection.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Suturing");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            BLS Competition
                        </p>
                        <p className="text-small">
                            A BLS (Basic Life Support) competition tests participants' skills in emergency medical procedures, such as CPR, using an AED, and handling choking incidents. Competitors are judged on their ability to perform these life-saving techniques quickly and accurately.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("BLS Competition");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (UNSC)
                        </p>
                        <p className="text-small">
                            MUN or debates simulate international organizations or parliamentary settings, where participants represent countries or positions to discuss global issues, improving diplomacy and public speaking skills.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("MUN (Committe 1)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (PNA)
                        </p>
                        <p className="text-small">
                            MUN or debates simulate international organizations or parliamentary settings, where participants represent countries or positions to discuss global issues, improving diplomacy and public speaking skills.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("MUN (Committe 2)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (Crisis Committe)
                        </p>
                        <p className="text-small">
                            MUN or debates simulate international organizations or parliamentary settings, where participants represent countries or positions to discuss global issues, improving diplomacy and public speaking skills.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("MUN (Committe 3)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Art Competition
                        </p>
                        <p className="text-small">
                            An art competition is an event where artists submit their artworks to be judged based on creativity, technique, and interpretation of a theme. It provides a platform for artists to showcase their talents, gain recognition, and often includes awards or prizes for outstanding entries.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Art Competition");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Videography Competition
                        </p>
                        <p className="text-small">
                            A videography competition is an event where participants create and submit videos to be judged on creativity, technical skill, and storytelling. It provides a platform for filmmakers to showcase their talents, gain recognition, and often compete for awards or prizes.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Videography Competition");
                                                    }}>Register</button> 
                    </div>
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

export default IndEventReg