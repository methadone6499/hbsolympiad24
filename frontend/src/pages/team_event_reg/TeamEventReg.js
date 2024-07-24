import './TeamEventReg.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function TeamEventReg(){
    
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

    const [ selectedEvent, setSelectedEvent ] = useState("");
    const [ teamToken, setTeamToken ] = useState("")
    
    const [ succMessage, setSuccMessage ] = useState("")

    const { name, id, email, phoneNumber, university } = user;
    
    const firstItemRef = useRef(null);

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
        if (window.confirm("Are you sure you want to register for this event, This decision cannot be reversed"))
        {
            setSelectedEvent(selectedEvent);
            setSubmitted(true);
            firstItemRef.current.scrollIntoView();
        }
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
            const eventName = selectedEvent;
            handleEventSelect("");
            console.log(eventName)
            console.log(name);
            console.log(email);
            console.log(phoneNumber);
            console.log(userID);
            if (isCaptain) {
                try
                {
                    console.log(user)
                    await axios.post("http://localhost:5000/v2/submitFormTeam",{
                        name, email, phoneNumber, id, eventName, university
                    })
                    .then(res=>{
                        console.log(res);
                        console.log(res.data.message);
                        setSuccMessage(res.data.message);
                    })
                }
                catch(e)
                {
                    alert('server error here')
                    console.log(e)
                }
            }
            else {
                try
                {
                    console.log(selectedEvent)
                    await axios.post("http://localhost:5000/v2/submitFormTeamMember",{
                        name, email, phoneNumber, id, eventName, teamToken
                    })
                    .then(res=>{
                        setSuccMessage(res.data.message);
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
                <h1> {succMessage} </h1> 

            </div> 
        ); 
    }; 

    const errorMessage = () => { 
        /*error ? (console.log("error"))
        : (<></>)*/
    };

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <h1 className="text-big">
                    Team Event Registration
                </h1>
                <p className="text-small" ref={firstItemRef}>
                    Here you can register for all events and competitions that require a team of people to cooperate.{"\n"}
                    For events relating to individual please check out the individual event registration tab.
                </p>
                        <button  onClick={handleSetCaptain} className='reg-btn'>
                            { isCaptain ? ('Switch to Member Registration') : ('Switch to Captain Registration') }
                        </button>
                        <br /> <br />
                        { isCaptain ? (<br />) :
                        (
                            <input
                                    onChange = {handleTeamToken}
                                    className = "Input"
                                    value = {teamToken}
                                    type = "text"
                                    placeholder='Team Code Here'
                            />
                        )}
                <div className="event-reg-box">
                    
                    <div className='text-small'>
                        {errorMessage()}
                        {SuccessMessage()}
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Table Tennis Duo
                        </p>
                        <p className="text-small">
                            [ Member Limit: 2 ]{ '\n'}
                            Put your reflexes to the test in an exhilaratingly fast paced session of table tennis. Team up with a partner in doubles for twice the fun and cooperation.
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Table Tennis Duo")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Volleyball
                        </p>
                        <p className="text-small">
                            [ Member Limit: 8 ]{ '\n'}
                            Set and spike your way to victory in an old school game of volleyball. Gear up with your friends and get ready to fly high to get the ball over the net    
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Volleyball")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Basketball
                        </p>
                        <p className="text-small">
                            [ Member Limit: 8 ]{ '\n'}
                            Calling out all the local Micheal Jordans who believe they can dunk on our heads with this one. Whether you’re sinking 3s or going for a slam dunk, theres no better place to showcase your skills
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Basketball")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            PUBG
                        </p>
                        <p className="text-small">
                            [ Member Limit: 4 ]{ '\n'}
                            PUBG: Battlegrounds is a 2017 battle royale game developed by PUBG Studios and published by Krafton in which you are dropped into a battlefield with a team of 4 players against other for a total of 64 players.
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("PUBG")
                            }}>Register</button>
                        )
                        }</div>
                    </div>
                    <div className="ER-event E_T">
                        <p className="text-big">
                            Futsal
                        </p>
                        <p className="text-small">
                            [ Member Limit: 8 ]{ '\n'}
                            Consider yourself a trick shot expert? Or perhaps you prefer to dazzle the competition with your dribbling. Look no further than our Futsal event to showcase your skills
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Futsal")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>
                    
                    <div className="ER-event">
                        <p className="text-big">
                            BLS Competition
                        </p>
                        <p className="text-small">
                            [ Member Limit: 3 ]{ '\n'}When it comes to a crashing patient, there’s no time to waste. Showcase your ability to deal with an active emergency with CPR, AEDs and more in our fast paced BLS even
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("BLS Competition")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>
                    
                    <div className="ER-event">
                        <p className="text-big">
                            Quizzes
                        </p>
                        <p className="text-small">
                            [ Member Limit: 2 ]{ '\n'}
                            Wit beyond measure may be mans greatest treasure. But it’s no good until we put it to the test! Join us for our exciting quiz event and see just how far your mind takes you
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Quizzes")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>

                    <div className="ER-event E_T">
                        <p className="text-big">
                            Research Conference
                        </p>
                        <p className="text-small">
                            [ Member Limit: 3 ]{ '\n'}
                            Dreaming of being the future of medicine? Prepared to push the boundaries of whats possible in this field? Prove your mettle in our esteemed Research Conference by showcasing your work and learning from your talented peers. There’s no better place to get those precious publications ready
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
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Research Conference")
                            }}>Register</button>
                        )
                        }
                        </div>
                    </div>

                    <div className="ER-event E_T">
                        <p className="text-big">
                            Scavenger Hunt
                        </p>
                        <p className="text-small">
                            [ Member Limit: 5 ]{ '\n'}
                            Prepared to go on a wild goose chase all around campus? Of course you are! Be prepared to use all your detective skills and put those calf muscles to use in our fun and exciting Scavenger Hunt
                        </p>
                        <div className='btn-thing'>
                        { isCaptain ? 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Scavenger hunt");
                             }}>Register</button> 
                        ) : 
                        (
                            <button type="submit" className='reg-btn' onClick=
                            {(e)=>{
                                handleEventSelect("Scavenger hunt")
                            }}>Register</button>
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