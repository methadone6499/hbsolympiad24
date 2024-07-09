import './Login.css'
import {useNavigate, Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

function Login(){
    
    // States for registration 
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
  
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 
    const [name, setName] = useState("");
  

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

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
  
    // Handling the form submission 
    const handleSubmit = async(e) => { 
       
        e.preventDefault(); 
        if (idNum  === "" || email === "" || password === "") { 
            setError(true); 
        }

        else if (!isValidEmail(email)) {
            setError(true);
            setSubmitted(false);
            console.log("Incorrect Email")
        }
        
        else { 
            setSubmitted(true); 
            setError(false); 
            console.log(email);
            try{
                await axios.post("http://localhost:5000/v1/login",{
                    email, idNum, password
                })
                .then(res=>{
                    console.log(res.data)
                    setName(res.data.name);
                    if(res.data){
                        console.log("User is logged in")
                    }
                })
            }
            catch(e){
                alert('Email or password doesn not exist')
            }
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
                <h1>{name} successfully Logged in!!</h1> 
            </div> 
        ); 
    }; 
  
    // Showing error message if error is true 
    const errorMessage = () => { 
        if (!isValidEmail(email)){
            return ( 
                <div 
                    className="error"
                    style={{ 
                        display: error ? "" : "none", 
                    }} 
                > 
                    <h1>Please enter the email correctly</h1> 
                </div> 
            ); 
        }
        else {
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
        }
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
                            type = "number"
                        />
                        
                        <label class="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            class = "Email"
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