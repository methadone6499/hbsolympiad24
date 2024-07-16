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

    useEffect (() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [])

    return (
        
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

        { user ? (
            <div>
                <div className="userDashboard">
                    <button className="btn btn-sm">
                        <Link to="/user_dashboard" className="links">UserDashboard {user.result.name}</Link>
                    </button>
                </div>
                <div className="LogOut">
                    <button className="btn btn-sm" onClick={logOut}>
                        Logout
                    </button>
                </div>
            </div>
        ) : (
            <div>
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
            </div>
        ) }
    </nav>
    )
}

export default Navbar