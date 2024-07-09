import "./adminDashboard.css"
import {useNavigate, Link} from "react-router-dom"
import Popup from "reactjs-popup"

function adminDashboard(){
    return(
        <div className='Home'>
            <nav class="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div class="dropdown"> 
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">*
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
                    {</div>
                </div>*/}

                

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
                    </li>{/*}
                    <li>
                        <Link to="/user_dashboard" class="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" class="links">Admin</Link>
                    </li>*/}
                </ul>
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

                {/*<div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div class="box-main">
                <h1 class="text-big">
                    Admin Dashboard
                </h1>
                <div class="adminInfo infoViewBox">
                    <p class="text-small">
                        Name: A Man {"\n"}
                        ID Number: Immeasurable {"\n"}
                        Email: Wouldn't you like to know, fed boy {"\n"}
                        Phone Number: Nice try scammer {"\n"}
                    </p>
                </div>
                <h1 class="text-big">
                    Registered Users
                </h1>
                <div class="registrationOverview infoViewBox">
                    <ul class="regList">
                        <li class="text-small">
                            User 1
                            <Popup trigger=
                                {<button class="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div class="modal">
                                            <div class="content">
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
                                            </div>
                                            <div>
                                                <button class="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li class="text-small">
                            User 2
                            <Popup trigger=
                                {<button class="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div class="modal">
                                            <div class="content">
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
                                            </div>
                                            <div>
                                                <button class="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li class="text-small">
                            User 3
                            <Popup trigger=
                                {<button class="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div class="modal">
                                            <div class="content">
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
                                            </div>
                                            <div>
                                                <button class="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                    </ul>
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

export default adminDashboard