import './Home.css'
import {Link} from "react-router-dom"

function Home(){

    return(
        <div className='Home'>
            <nav class="navbar">
            <ul class="nav-list">
                <div class="logo">
                    <img src=
                    "https://hbs.edu.pk/wp-content/uploads/2019/11/HBS-Logo-1-150x150.png"
                    />
                </div>
                <li>
                    <a href="#Events">List Of Events</a>
                </li>
                <li>
                    <a href="#IndEventReg">Individual Event Registration</a>
                </li>
                <li>
                    <a href="#TeamEventReg">Team Event Registration</a>
                </li>
            </ul>

            <div class="Login">
                <a href="#Login">
                <button class="btn btn-sm">
                    <Link to="/login">Login</Link>
                </button>
                </a>
            </div>

            <div class="SignUp">
            <a href="#SignUp">
                <button class="btn btn-sm">
                Sign Up
                </button>
            </a>
            </div>
        </nav>

        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        Welcome to the HSB Olympiad
                    </h1>
                    <p class="text-small">

                    </p>
                </div>
            </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Sports
                        </h1>
                        <p class="text-small">
                        
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Competitions
                        </h1>
                        <p class="text-small">
                        
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Olympiad?
                        </h1>
                        <p class="text-small">
                        
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default Home