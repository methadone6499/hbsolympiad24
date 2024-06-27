import './Home.css'
import {Link} from "react-router-dom"

function Home(){

    return(
        <div className='Home'>
            <nav class="navbar">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
                            "../../images/insta.png"
                        />
                    </div>
                    <li>
                        <Link to="/events" class="links">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
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
            </nav>

            <div class="box-main">
                <div class="firstHalf">
                    <img src='../../images/insta.png' />
                    <h1 class="text-big">
                        Welcome to the HBS Olympiad
                     </h1>
                    <p class="text-small">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                    </p>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Sports
                    </h1>
                    <p class="text-small">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                    </p>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Competitions
                    </h1>
                    <p class="text-small">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                    </p>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        What is Olympiad?
                    </h1>
                    <p class="text-small">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                    </p>
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

export default Home