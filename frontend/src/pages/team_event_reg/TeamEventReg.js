import './TeamEventReg.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function TeamEventReg(){
    
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

    const [ selectedEvent, setSelectedEvent ] = useState("");
    const [ teamToken, setTeamToken ] = useState("")

    const { name, id, email, phoneNumber } = user;

    const userID = id;

    const [ isCaptain, setIsCaptain ] = useState(true);

    const handleTeamToken = (e) => {
        setTeamToken(e.target.value);
        setSubmitted(false);
    }

    const handleSetCaptain = (e) => {
        setIsCaptain(!isCaptain);
        setSubmitted(false);
    }

    const handleEventSelect = async(selectedEvent) => {
        setSelectedEvent(selectedEvent);
        setSubmitted(false);
    }

    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        console.log('Event selected:', selectedEvent);
        if (isCaptain) { console.log("As Captain")}
        else {console.log("As Member")}
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
            if (isCaptain) {
                try
                {
                    console.log(selectedEvent)
                    await axios.post("http://localhost:5000/v2/submitFormTeam",{
                        name, email, phoneNumber, userID, eventID
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
            else {
                try
                {
                    console.log(selectedEvent)
                    await axios.post("http://localhost:5000/v2/submitFormTeamMember",{
                        name, email, phoneNumber, userID, eventID, teamToken
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
        error ? (console.log("error"))
        : (<></>)
    };

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <h1 className="text-big">
                    Team Event Registration
                </h1>
                <p className="text-small">
                    Here you can register for all events and competitions that require a team of people to cooperate.{"\n"}
                    For events relating to individual please check out the individual event registration tab.
                </p>
                        <button  onClick={handleSetCaptain} className='reg-btn'>
                            { isCaptain ? ('Register as Team Member') : ('Register as Captain') }
                        </button>
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
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Table Tennis Duo");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Table Tennis Duo")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Volleyball
                        </p>
                        <p className="text-small">
                            Volleyball is a team sport played on a court with a net. Two teams of six players each try to score points by hitting a ball over the net and into the opponent's court.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Volleyball");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Volleyball")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Basketball
                        </p>
                        <p className="text-small">
                            Basketball is a team sport played on a rectangular court between two teams of five players each. The objective is to score points by shooting the ball through the opponent's hoop. It involves dribbling, passing, and strategic play to outscore the opposing team.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Basketball");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Basketball")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            E-Games (PUBG)
                        </p>
                        <p className="text-small">
                            E-gaming, or electronic gaming, involves playing video games on devices like computers, consoles, and mobiles. It includes casual gaming, competitive gaming, and professional esports, featuring single-player and multiplayer experiences, and has grown into a major part of modern entertainment and culture.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("PUBG");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("PUBG")
                                }}>Register</button>
                            </form>
                        )
                        }</div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Futsal
                        </p>
                        <p className="text-small">
                            Futsal is an indoor soccer game with five players per team, played on a small, hard court with a smaller, less bouncy ball. It emphasizes quick passing and skillful play, featuring fast-paced, high-scoring matches.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Futsal");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Futsal")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>
                    
                    <div className="ER-event">
                        <p className="text-big">
                            BLS Competition
                        </p>
                        <p className="text-small">
                            A BLS (Basic Life Support) competition tests participants' skills in emergency medical procedures, such as CPR, using an AED, and handling choking incidents. Competitors are judged on their ability to perform these life-saving techniques quickly and accurately.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("BLS Competition");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("BLS Competition")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>
                    
                    <div className="ER-event">
                        <p className="text-big">
                            Quizzes
                        </p>
                        <p className="text-small">
                            Quizzes are short tests or competitions designed to assess knowledge on various topics. They can be used for education, entertainment, or competitive purposes, often featuring multiple-choice, true/false, or open-ended questions.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Quizzes");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Quizzes")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>

                    <div className="ER-event E_T">
                        <p className="text-big">
                            Research Conference
                        </p>
                        <p className="text-small">
                            A research conference is a gathering where scholars present and discuss their latest research findings. It includes presentations, discussions, and networking opportunities, allowing researchers to share knowledge and collaborate on future projects.
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Research Conference");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Research Conference")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
                    </div>

                    <div className="ER-event E_T">
                        <p className="text-big">
                            Scavenger Hunt
                        </p>
                        <p className="text-small">
                            scavenge for some stuff or smthn idk
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Scavenger Hunt");
                             }}>Register</button> 
                        ) : 
                        (
                            <form>
                                <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                                />
                                <button type="submit" className='reg-btn' onClick=
                                {(e)=>{
                                    handleEventSelect("Scavenger Hunt")
                                }}>Register</button>
                            </form>
                        )
                        }
                        </div>
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

export default TeamEventReg