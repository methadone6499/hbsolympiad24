import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


const Navbar = () => {

    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);
        localStorage.clear();
        navigate('/');
    }

    const isMobile = useMediaQuery( {query: '(max-width: 580px)'})


    return (
        
        <nav className="navbar">
            { isMobile ? 
            (
                <div className='nav-div'>
                    
                <ul className="nav-list-mob">
                    <li>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" className="links">Events</Link>
                    </li>
                    <li>
                        { user ? 
                        ( 
                            <Link to="/ind_event_reg" className="links">Individual Registration</Link>) : 
                        ( <></> )
                        }
                    </li>
                    <li>
                        { user ? 
                        ( 
                            <Link to="/team_event_reg" className="links">Team Registration</Link>) : 
                        ( <></> )
                        }
                    </li>
                </ul>
                { user ? 
                (
                    <div className='reg-buttons-mob'>
                        <div className="userDashboard">
                            <Link to="/user_dashboard" className="links">
                                <button className="btn btn-sm">Profile {user.name}</button>
                            </Link>
                        </div>
                        <div className="LogOut">
                            <button className="btn btn-sm" onClick={logOut}>
                                Logout
                            </button>
                        </div>
                    </div>
                ) : 
                (
                    <div className='reg-button-mobs'>
                        <div className="Login">
                            <Link to="/login" className="links">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                        </div>
                        <div className="SignUp">
                            <Link to="/signup" className="links">
                                <button className="btn btn-sm">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                ) } </div>
            ) : 
            (
                <div className='nav-div-mob'>
                {/*navigation list for various menus*/}
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" className="links">List of Events</Link>
                    </li>
                    <li>
                        { user ? 
                        ( 
                            <Link to="/ind_event_reg" className="links">Individual Event Registration</Link>) : 
                        ( <></> )
                        }
                    </li>
                    <li>
                        { user ? 
                        ( 
                            <Link to="/team_event_reg" className="links">Team Event Registration</Link>) : 
                        ( <></> )
                        }
                    </li>
                </ul>
        
                { user ? 
                (
                    <div className='reg-buttons'>
                        <div className="userDashboard">
                            <Link to="/user_dashboard" className="links">
                                <button className="btn btn-sm">Profile {user.name}</button>
                            </Link>
                        </div>
                        <div className="LogOut">
                            <button className="btn btn-sm" onClick={logOut}>
                                Logout
                            </button>
                        </div>
                    </div>
                ) : 
                (
                    <div className='reg-buttons'>
                        <div className="Login">
                            <Link to="/login" className="links">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                        </div>
                        <div className="SignUp">
                            <Link to="/signup" className="links">
                                <button className="btn btn-sm">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                ) } </div>
            )}
        
    </nav>
    )
}

export default Navbar