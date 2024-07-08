import './userDashboard.css'
import {useNavigate, Link} from "react-router-dom"

function userDashboard(){

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
                <h1 class="text-big">
                    User Dashboard
                </h1>
                <div class="userInfo infoViewBox">
                    <p class="text-small">
                        <p class="text-small">
                            Name: A Man {"\n"}
                        </p>
                        <p class="text-small">
                              ID Number: Immeasurable {"\n"}
                        </p>
                        <p class="text-small">
                            Email: Wouldn't you like to know, fed boy {"\n"}
                        </p>
                        <p class="text-small">
                            Phone Number: Nice try scammer {"\n"}
                        </p>
                    </p>
                </div>
                <h2 class="text-big">
                    List of Registered Events
                </h2>
                <div class="eventInfo infoViewBox">
                    <p class="text-small">
                        Event 1 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </p>
                    <button type="submit" class="btn">Download Ticket</button>
                    <button type="submit" class="btn">Cancel Event Registration</button>
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

export default userDashboard