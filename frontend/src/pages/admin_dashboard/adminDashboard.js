import "./adminDashboard.css"
import Popup from "reactjs-popup"
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

function AdminDashboard(){
    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <h1 className="text-big">
                    Admin Dashboard
                </h1>
                <h1 className="text-big">
                    Admin Options
                </h1>
                <div className="registrationOverview infoViewBox">
                    <Link to="/WufZhss2VJkaT8oGh7AJ/UserList" className="links">
                        <button className="btn">See all user registration</button>
                    </Link>
                    <Link to="/WufZhss2VJkaT8oGh7AJ/EventList" className="links">
                        <button className="btn">See all event registration</button>
                    </Link>
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

export default AdminDashboard