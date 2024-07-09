import './SignUp.css'
import {useNavigate, Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

function SignUp(){
    
    // States for registration 
    const [name, setName] = useState("");
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [number, setNumber] = useState(""); 
    const [password, setPassword] = useState(""); 
  
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 
  
    // Handling the name change 
    const handleName = (e) => { 
        setName(e.target.value); 
        setSubmitted(false); 
    }; 

    // Handling the ID number change 
    const handleIdNum = (e) => { 
        setIdNum(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Handling the email change 
    const handleEmail = (e) => { 
        setEmail(e.target.value); 
        setSubmitted(false); 
    }; 
  
    // Handling the phone Number change 
    const handleNumber = (e) => { 
        setNumber(e.target.value); 
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
        if (name === "" || idNum  === "" || email === "" || number === "" || password === "") 
        { 
            setError(true); 
        } 

        else if (!isValidEmail(email)){
            setError(true);
        }
        
        else { 
            setSubmitted(true); 
            setError(false); 
            console.log(email);
            try{
                await axios.post("http://localhost:5000/v1/signup",{
                    email, idNum, email, phoneNo, password, 
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
                <h1>{name} successfully registered!!</h1> 
            </div> 
        ); 
    }; 
  
    // Showing error message if error is true 
    const errorMessage = () => { 
        if (!isValidEmail){
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
        ); }
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
                <div class="SignUpForm">
                    <div>
                        <h1>User Registration</h1>
                    </div>

                    <div class="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>

                    <form>
                        <label class="Label">Name</label>
                        <input
                            onChange = {handleName}
                            class = "Input"
                            value = {name}
                            type = "text"
                        />

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
                            class = "Input"
                            value = {email}
                            type = "email"
                        />
                        
                        <label class="Label">Phone Number</label>
                        <input
                            onChange = {handleNumber}
                            class = "Input"
                            value = {number}
                            type = "number"
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

export default SignUp