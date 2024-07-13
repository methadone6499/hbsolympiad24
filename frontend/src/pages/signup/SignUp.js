import './SignUp.css'
import {Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

function SignUp(){
    
    // States for registration 
    const [name, setName] = useState("");
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [phoneNumber, setNumber] = useState(""); 
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
        if (name === "" || idNum  === "" || email === "" || phoneNumber === "" || password === "") 
        { 
            setError(true); 
        } 

        else if (!isValidEmail(email)){
            setError(true);
            setSubmitted(false);
        }
        
        else { 
            setSubmitted(true); 
            setError(false); 
            try{
                await axios.post("http://localhost:5000/v1/signup",{
                    name, idNum, email, phoneNumber, password, 
                })
                .then(res=>{
                    alert(res.data.message);
                })
            }
            catch(e){
                alert('Server error');
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
        ); }
    };



    return(
        <div className='Home'>
            <nav class="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div class="dropdown"> 
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">*
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
                    {</div>
                </div>*/}

                

                {/*navigation list for various menus*/}
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
                    </li>{/*}
                    <li>
                        <Link to="/user_dashboard" class="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" class="links">Admin</Link>
                    </li>*/}
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
                            placeholder='John Smith'
                        />

                        <label class="Label">Roll Number/CNIC</label>
                        <input
                            onChange = {handleIdNum}
                            class = "Input"
                            value = {idNum}
                            type = "number"
                            placeholder='11111-1111111-1'
                        />
                        
                        <label class="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            class = "Input"
                            value = {email}
                            type = "email"
                            placeholder='someone@something.com'
                        />
                        
                        <label class="Label">Phone Number</label>
                        <input
                            onChange = {handleNumber}
                            class = "Input"
                            value = {phoneNumber}
                            type = "number"
                            placeholder='0000-0000000'
                        />
                        
                        <label class="Label">Password</label>
                        <input
                            onChange = {handlePassword}
                            class = "Input"
                            value = {password}
                            type = "password"
                            placeholder='password'
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