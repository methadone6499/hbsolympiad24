import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Navbar = () => {

    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);
        localStorage.clear();
        navigate('/');
    }


    return (
        <div className='nav-div'>
            <nav className="navbar">
                {/*navigation list for various menus*/}
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" className="links">Events</Link>
                    </li>
                    <li>
                        <Link to="/faqs" className='"lnks'>FAQs</Link>
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
            </nav>

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
            )}
        </div>
    )
}

export default Navbar