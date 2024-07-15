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
    const [university, setUniversity] = useState("");
    const [uniCardImg, setUniCardImg] = useState("") 
    const [password, setPassword] = useState(""); 
    const [proofImg, setProofImg] = useState("")
  
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

    const handleUniversity = (e) => {
        setUniversity(e.target.value);
        setSubmitted(false);
    }
  
    const handleUniCardImg = (e) => {
        setUniCardImg(e.target.value);
        setSubmitted(false);
    }

    // Handling the password change 
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
        setSubmitted(false); 
    }; 

    const handleProofImg = (e) => {
        setProofImg(e.target.value);
        setSubmitted(false);
    }

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
            <nav className="navbar">
                {/*button to be used for holding the signup/login in a drop down menu*/}
                {/*<div className="dropdown"> 
                    <button className="dropbtn"></button>
                    <div className="dropdown-content">*
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
                    {</div>
                </div>*/}

                

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
                    </li>{/*}
                    <li>
                        <Link to="/user_dashboard" className="links">User</Link>
                    </li>
                    <li>
                        <Link to="/admin_dashboard" className="links">Admin</Link>
                    </li>*/}
                </ul>
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

                {/*<div className="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div className="box-main">
                <div className="SignUpForm">
                    <div>
                        <h1>User Registration</h1>
                    </div>

                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>

                    <form>
                        <label className="Label">Name</label>
                        <input
                            onChange = {handleName}
                            className = "Input"
                            value = {name}
                            type = "text"
                            placeholder='John Smith'
                        />

                        <label className="Label">Roll Number/CNIC</label>
                        <input
                            onChange = {handleIdNum}
                            className = "Input"
                            value = {idNum}
                            type = "number"
                            placeholder='11111-1111111-1'
                        />
                        
                        <label className="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            className = "Input"
                            value = {email}
                            type = "email"
                            placeholder='someone@something.com'
                        />
                        
                        <label className="Label">Phone Number</label>
                        <input
                            onChange = {handleNumber}
                            className = "Input"
                            value = {phoneNumber}
                            type = "number"
                            placeholder='0000-0000000'
                        />

                        <label className="Label">University</label>
                        <input
                            onChange={handleUniversity}
                            className = "Input"
                            value = {university}
                            type = "text"
                            placeholder='HBS'
                        />

                        <label className='Label'>University ID Card</label>
                        <div className='imgInuput'>
                            {uniCardImg &&  (
                                <div className='imgDisplay'>
                                    <img 
                                        alt="not found"
                                        width = {"250px"}
                                        src = {URL.createObjectURL(uniCardImg)}
                                    />
                                    <button className='reg-btn' onClick={()=>setUniCardImg(null)}>Remove Image</button>
                                </div>
                            )}

                            <input
                                className='Input'
                                type="file"
                                name="myImage"
                                onChange={(e)=>{
                                    console.log(e.target.files[0]);
                                    setUniCardImg(e.target.files[0]);
                                }} 
                            />
                        </div>
                        
                        <label className="Label">Password</label>
                        <input
                            onChange = {handlePassword}
                            className = "Input"
                            value = {password}
                            type = "password"
                            placeholder='password'
                        />
                        
                        <label className='Label'>Proof of Payment</label>
                        <div className='imgInuput'>
                            {proofImg &&  (
                                <div className='imgDisplay'>
                                    <img 
                                        alt="not found"
                                        width = {"250px"}
                                        src = {URL.createObjectURL(proofImg)}
                                    />
                                    <button className='reg-btn' onClick={()=>setProofImg(null)}>Remove Image</button>
                                </div>
                            )}

                            <input
                                className='Input'
                                type="file"
                                name="myImage"
                                onChange={(e)=>{
                                    console.log(e.target.files[0]);
                                    setProofImg(e.target.files[0]);
                                }} 
                            />
                        </div>


                        <button onClick={handleSubmit} className="buton" type="submit">
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