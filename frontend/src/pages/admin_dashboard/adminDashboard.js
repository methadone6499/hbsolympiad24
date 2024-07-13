import "./adminDashboard.css"
import {Link} from "react-router-dom"
import Popup from "reactjs-popup"

function adminDashboard(){
    return(
        <div className='Home'>
            <nav className="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div className="dropdown"> 
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

                {/*<div className="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div className="box-main">
                <h1 className="text-big">
                    Admin Dashboard
                </h1>
                <div className="adminInfo infoViewBox">
                    <p className="text-small">
                        Name: A Man {"\n"}
                        ID Number: Immeasurable {"\n"}
                        Email: Wouldn't you like to know, fed boy {"\n"}
                        Phone Number: Nice try scammer {"\n"}
                    </p>
                </div>
                <h1 className="text-big">
                    Registered Users
                </h1>
                <div className="registrationOverview infoViewBox">
                    <ul className="regList">
                        <li className="text-small">
                            User 1
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li className="text-small">
                            User 2
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li className="text-small">
                            User 3
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
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