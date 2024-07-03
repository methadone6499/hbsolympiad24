import './Login.css'
import {useNavigate, Link} from "react-router-dom"
import { useState } from 'react'

function Login(){
    
    // States for registration 
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
  
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 
  

    // Handling the ID change 
    const handleIdNum = (e) => { 
        setIdNum(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Handling the email change 
    const handleEmail = (e) => { 
        setEmail(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Handling the password change 
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Handling the form submission 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (idNum  === "" || email === "" || password === "") { 
            setError(true); 
        } else { 
            setSubmitted(true); 
            setError(false); 
        } 
    }; 
  
    // Showing success message 
    const successMessage = () => { 
        return ( 
            <div 
                className="success"
                style={{ 
                    display: submitted ? "" : "none", 
                }} 
            > 
                <h1>User successfully Logged in!!</h1> 
            </div> 
        ); 
    }; 
  
    // Showing error message if error is true 
    const errorMessage = () => { 
        return ( 
            <div 
                className="error"
                style={{ 
                    display: error ? "" : "none", 
                }} 
            > 
                <h1>Please enter all the fields</h1> 
            </div> 
        ); 
    };



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
                        <Link to="/events" class="links">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
                </ul>

                <div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </nav>

            <div class="box-main">
                <div class="LoginPage">
                    <div>
                        <h1>User Login</h1>
                    </div>

                    <div class="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>

                    <form>
                        <label class="Label">Roll Number/CNIC</label>
                        <input
                            onChange = {handleIdNum}
                            class = "Input"
                            value = {idNum}
                            type = "text"
                        />
                        
                        <label class="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            class = "Input"
                            value = {email}
                            type = "text"
                        />
                        
                        <label class="Label">Password</label>
                        <input
                            onChange = {handlePassword}
                            class = "Input"
                            value = {password}
                            type = "password"
                        />

                        <button onClick={handleSubmit} class="buton" type="submit">
                            Submit
                        </button>
                    </form>
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

export default Login