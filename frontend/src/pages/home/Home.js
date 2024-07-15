import './Home.css'
import {Link} from "react-router-dom"
import CountDownTimer from './CountdownTimer'

function Home(){
    
    const current_time = new Date().getTime();
    const time_to_be_added = 3 * 24 * 60 * 60 * 1000;
    
    const d = new Date("2024-07-29T00:11:00.556094Z");
    console.log(d.getMinutes());

    const targetDate = current_time + time_to_be_added;

    console.log(d);

    return(
        <div className='Home'>
            
            {/*nav bar at top of page*/}
            <nav className="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div classname="dropdown"> 
                    <button className="dropbtn"></button>
                    <div className="dropdown-content">*
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
                    {</div>
                </div>*/}

                

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
                    </li>{/*}
                    <li>
                        <Link to="/user_dashboard" className="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" className="links">Admin</Link>
                    </li>*/}
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

                
                {/*search bar for user convinience*/}
                {/*<div className="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div className="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                    placeholder="logo"
                />

                <div className='timerBox'>
                    <h1 className='text-big'>Countdown Timer</h1>
                    <CountDownTimer targetDate={d} />
                </div>

                <h1 className="text-big">
                    Welcome to the HBS Olympiad
                 </h1>
                <p className="text-small">
                    Welcome to HBS OLYMPIAD ‘24, an extravaganza brought to you by the HBS Medical and Dental College 
                    Student Council. As the premier ins tu on in Islamabad, Pakistan, we are proud to present a three-day 
                    event designed to not only engage and smulate our students socially but also foster camaraderie and 
                    compe ve spirit among medical colleges across the region.
                </p>
                <h1 className="text-big" id="program">
                    Featured Events
                </h1>
                
                <div className="events-box">
                    <div className="E-event E_T E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYQTiqHcIlHAI8C5F4jCDkgNhtmxfeg_nSg&s"
                            width="250"
                            height="100" 
                        />
                        <p className="text-big">
                            Scavenger Hunt
                        </p>
                        <p className="text-small">
                            A scavenger hunt is a game in which the organizers prepare a list defining specific items, which the participants seek to gather or complete all items on the list, usually without purchasing them.
                        </p>
                    </div>
                    <div className="E-event E_T E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWOFaY9ZYsNQOZZu_TCEt_byJNbqav4qEcA&s"
                            width="100"
                            height="100" 
                        />
                        <p className="text-big">
                            Art Competition
                        </p>
                        <p className="text-small">
                            Art competitions allow artists to display their work among their peers, have it reviewed by esteemed judges, and sometimes receive exhibition opportunities and monetary incentives.
                        </p>
                    </div>
                    <div className="E-event E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeEoX0s2CnIjAtWD2fMXFceuxVJ1_mzWR3w&s" 
                            width="100"
                            height="100" 
                        />
                        <p className="text-big">
                            Photography Gallery
                        </p>
                        <p className="text-small">
                            An event where competitors can submit their photographs to be displayed so they can be viewed by peers and reviewed by judges to select the best one among them.
                        </p>
                    </div>
                    <div className="E-event E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquooo48SV3Uw_SM4DLHoxzdjOvF-J6Yfgkg&s" 
                            width="100"
                            height="100" 
                        />
                        <p className="text-big">
                            Music Jamming Session
                        </p>
                        <p className="text-small">
                            A jam session is a relatively informal musical event, process, or activity where musicians, typically instrumentalists, play improvised solos and vamp over tunes, drones, songs, and chord progressions
                        </p>
                    </div>
                </div>
                <h1 className="text-big" id="program">
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    Sponsors
                </h1>
                <p className="text-small">
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                </p>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default Home