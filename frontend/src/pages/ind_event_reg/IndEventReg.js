import { useEffect, useState } from 'react'
import './IndEventReg.css'
import {Link} from "react-router-dom"
import axios from 'axios'

function IndEventReg(){

    const [selectedEvent, setSelectedEvent] = useState("");


    const handleEventSelect = async(selectedEvent) => {
        setSelectedEvent(selectedEvent);
        //setSubmitted(false);
    }

    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        console.log('Count updated:', selectedEvent);
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
            const name = "Usama";
            const email = "molly@gmail.com";
            const phoneNumber = "23094392";
            const affiliation = "nig";
            //convertToBase64();
            const userID = "6686b17f0aa299110fe38fd9";
            /*const formData = new FormData();
            console.log(feePayment);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phoneNumber', phoneNumber);
            formData.append('affiliation', affiliation);
            formData.append('spRequirements', spRequirements);
            formData.append('feePayment', feePayment); // Assuming feePayment is a file input
            formData.append('userID', userID);
            formData.append('eventID', eventID);*/
            try
            {
                console.log(selectedEvent)
                await axios.post("http://localhost:5000/v1/submitFormSolo",{
                    name, email, phoneNumber, affiliation, userID, eventID
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
                <h1>event successfully registered!!</h1> 
            </div> 
        ); 
    }; 

    const errorMessage = () => { 
        return ( 
            <div 
                className="error"
                style={{ 
                    display: error ? "" : "none", 
                }} 
            > 
                <h1>Please enter all the fields</h1> 
            </div> 
        );
    };


    return(
        <div className='Home'>
            <nav className="navbar">

                {/*navigation list for various menus*/}
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" className="links">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" className="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" className="links">Team Event Registration</Link>
                    </li>
                </ul>

                <div className="Login">
                    <button className="btn btn-sm">
                        <Link to="/login" className="links">Login</Link>
                    </button>
                </div>

                <div className="SignUp">
                    <button className="btn btn-sm">
                        <Link to="/signup" className="links">Sign Up</Link>
                    </button>
                </div>
            </nav>

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
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3439/3439594.png" 
                            width="100"
                            height="100"
                            placeholder="Table Tennis"
                        />
                        <p className="text-big">
                            Table Tennis
                        </p>
                        <p className="text-small">
                            Table tennis, or ping pong, is a fast-paced indoor sport played on a table divided by a net. Players use paddles to hit a lightweight ball back and forth. It requires quick reflexes, strategic thinking, and precise ball control.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        handleEventSelect("Table Tennis");
                                                    }}>Register</button> 



                    </div>
                    <div className="ER-event E_T">
                        <img
                            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png" 
                            width="80"
                            height="100" 
                            placeholder="Chess"
                        />
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
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/889/889455.png" 
                            width="100"
                            height="100"
                            placeholder="Basketball"
                        />
                        <p className="text-big">
                            Cultural Festival
                        </p>
                        <p className="text-small">
                            A cultural fest is an event celebrating diverse traditions through music, dance, food, crafts, and performances, promoting cultural exchange and community spirit.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Cultural Festival");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event E_T">
                        <img
                            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png" 
                            width="80"
                            height="100" 
                            placeholder="Chess"
                        />
                        <p className="text-big">
                            Quizzes
                        </p>
                        <p className="text-small">
                            Quizzes are short tests or competitions designed to assess knowledge on various topics. They can be used for education, entertainment, or competitive purposes, often featuring multiple-choice, true/false, or open-ended questions.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Quizzes");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event E_T">
                        <img
                            src="https://w7.pngwing.com/pngs/977/162/png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo-thumbnail.png" 
                            width="100"
                            height="100" 
                            placeholder="E Games"
                        />
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
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
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
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
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
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
                        <p className="text-big">
                            Art Gallery
                        </p>
                        <p className="text-small">
                            An art gallery is a space where artworks are displayed for public viewing and sale. It serves as a venue for artists to exhibit their creations, ranging from paintings and sculptures to digital art and installations. Art galleries also play a role in cultural enrichment, education, and fostering appreciation for visual arts.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Art Gallery");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
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
                    <div className="ER-event">
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
                        <p className="text-big">
                            Live Karaoke
                        </p>
                        <p className="text-small">
                            Live karaoke is an entertainment activity where individuals sing along to recorded music tracks in front of an audience, often using a microphone and a screen displaying lyrics. It combines live performance with audience participation and is popular in bars, clubs, and private events.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Live Karaoke");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
                        <p className="text-big">
                            Qawali
                        </p>
                        <p className="text-small">
                            Qawwali is a Sufi devotional music from South Asia, featuring powerful vocals, rhythmic instruments, and repetitive choruses. Its lyrics focus on spiritual themes, aiming to evoke deep emotional and spiritual experiences in the audience.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        setSelectedEvent("Qawali");
                                                    }}>Register</button> 
                         {/*<button id="openModal" className='reg-btn'>Open</button>
                         <dialog id="modal" className='popup'>
                            <div className="content">
                                <p className="text-small">
                                    Welcome to registration {"\n"}
                                    Here there be user info
                                </p>

                                <div className="text-small">
                                    {errorMessage()}
                                    {SuccessMessage()}
                                </div>

                                <form>
                                    <label className="Label">Name</label>
                                    <input
                                        onChange = {handleSpecReq}
                                        className = "Input"
                                        value = {specReq}
                                        type = "text"
                                        placeholder='John Smith'
                                    />

                                    {proofImg &&  (
                                        <div>
                                            <img 
                                                alt="not found"
                                                width = {"250px"}
                                                src = {URL.createObjectURL(proofImg)}
                                            />
                                            <button onClick={()=>setProofImg(null)}>Remove Image</button>
                                        </div>
                                   )}

                                    <input
                                        type="file"
                                        name="myImage"
                                        onChange={(e)=>{
                                            console.log(e.target.files[0]);
                                            setProofImg(e.target.files[0]);
                                        }} 
                                    />

                                    <button onClick={handleSubmit} className="btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <button id="closeModal" className='reg-btn' onClick=
                                                    {()=>{
                                                        setProofImg(null);
                                                        setSpecReq("");
                                                        setSubmitted(false);
                                                    }}>Close</button> 
                         </dialog>*/}
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