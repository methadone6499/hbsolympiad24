import './Home.css'
import {Link} from "react-router-dom"

function Home(){

    return(
        <div className='Home'>
            
            {/*nav bar at top of page*/}
            <nav class="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                <div class="dropdown"> 
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">
                        <div class="Login">
                            <button class="btn btn-sm">
                                <Link to="/login" class="links">Login</Link>
                            </button>
                        </div>
                        <div class="SignUp">
                            <button class="btn btn-sm">
                                <Link to="/signup" class="links">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>

                

                {/*navigation list for various menus*/}
                <ul class="nav-list">
                    <li>
                        <Link to="/" class="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" class="links">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/user_dashboard" class="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" class="links">Admin</Link>
                    </li>
                </ul>

                
                {/*search bar for user convinience*/}
                {/*<div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div class="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                    placeholder="logo"
                />
                <h1 class="text-big">
                    Welcome to the HBS Olympiad
                 </h1>
                <p class="text-small">
                    Welcome to HBS OLYMPIAD ‘24, an extravaganza brought to you by the HBS Medical and Dental College 
                    Student Council. As the premier ins tu on in Islamabad, Pakistan, we are proud to present a three-day 
                    event designed to not only engage and smulate our students socially but also foster camaraderie and 
                    compe ve spirit among medical colleges across the region.
                </p>
                <h1 class="text-big" id="program">
                    Featured Events
                </h1>
                
                <div class="events-box">
                    <div class="E-event E_T E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYQTiqHcIlHAI8C5F4jCDkgNhtmxfeg_nSg&s"
                            width="250"
                            height="100" 
                        />
                        <p class="text-big">
                            Scavenger Hunt
                        </p>
                        <p class="text-small">
                            A scavenger hunt is a game in which the organizers prepare a list defining specific items, which the participants seek to gather or complete all items on the list, usually without purchasing them.
                        </p>
                    </div>
                    <div class="E-event E_T E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWOFaY9ZYsNQOZZu_TCEt_byJNbqav4qEcA&s"
                            width="100"
                            height="100" 
                        />
                        <p class="text-big">
                            Art Competition
                        </p>
                        <p class="text-small">
                            Art competitions allow artists to display their work among their peers, have it reviewed by esteemed judges, and sometimes receive exhibition opportunities and monetary incentives.
                        </p>
                    </div>
                    <div class="E-event E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeEoX0s2CnIjAtWD2fMXFceuxVJ1_mzWR3w&s" 
                            width="100"
                            height="100" 
                        />
                        <p class="text-big">
                            Photography Gallery
                        </p>
                        <p class="text-small">
                            An event where competitors can submit their photographs to be displayed so they can be viewed by peers and reviewed by judges to select the best one among them.
                        </p>
                    </div>
                    <div class="E-event E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquooo48SV3Uw_SM4DLHoxzdjOvF-J6Yfgkg&s" 
                            width="100"
                            height="100" 
                        />
                        <p class="text-big">
                            Music Jamming Session
                        </p>
                        <p class="text-small">
                            A jam session is a relatively informal musical event, process, or activity where musicians, typically instrumentalists, play improvised solos and vamp over tunes, drones, songs, and chord progressions
                        </p>
                    </div>
                </div>
                <h1 class="text-big" id="program">
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    Sponsors
                </h1>
                <p class="text-small">
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