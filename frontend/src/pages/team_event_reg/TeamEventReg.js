import './TeamEventReg.css'
import {useNavigate, Link} from "react-router-dom"

function TeamEventReg(){

    return(
        <div className='Home'>
            <nav class="navbar">

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

                

                <ul class="nav-list">
                    <li>
                        <Link to="/" class="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" class="links here">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
                </ul>

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
                />
                <h1 class="text-big">
                    Team Event Registration
                </h1>
                <p class="text-small">
                    Here you can register for all events and competitions that require a team of people to cooperate.{"\n"}
                    For events relating to individual please check out the individual event registration tab.
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

export default TeamEventReg