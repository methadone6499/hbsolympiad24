import './SignUp.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function SignUp(){
    
    // States for registration 
    const [name, setName] = useState("");
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [phoneNumber, setNumber] = useState("");
    const [university, setUniversity] = useState("");
    const [password, setPassword] = useState(""); 
    const [ confirmPassword, setCofnirmPassword] = useState("");
    const [uniCardImgFR, setUniCardImgFR] = useState("");
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    const [ succMessage, setSuccMessage ] = useState("")

    const navigate = useNavigate();


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

    // Handling the password change 
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
        setSubmitted(false); 
    }; 

    const handleConfirmPassword = (e) => {
        setCofnirmPassword(e.target.value);
        setSubmitted(false);
    }

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    
    const handleFileChange = (base64) => {
        console.log("hello");
        const file = base64;
        console.log(file.length);
        var sizeInBytes = 4 * Math.ceil((file.length / 3))*0.5624896334383812;
        console.log(sizeInBytes);
        if (sizeInBytes > 2097152) { // 5 MB in bytes
            console.log("hello");
            alert('File size exceeds 2 MB. Please choose a smaller file.');
            setUniCardImgFR("")
        } else {
            setUniCardImgFR(base64);
            console.log("here too");
        }
      };
   
  
    // Handling the form submission 
    const handleSubmit = async(e) => { 
        
        e.preventDefault(); 
        
        
        if (name === "" || idNum  === "" || email === "" || phoneNumber === "" || university==="" || password === "" || uniCardImgFR === "" || password != confirmPassword) 
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
            console.log(uniCardImgFR); 
            try{
                await axios.post("http://localhost:5000/v1/signup",{
                    name, idNum, email, phoneNumber, university, uniCardImgFR, password, 
                })
                .then(res=>{
                    console.log(res.data.token);
                    setSuccMessage(res.data.message);
                    navigate('/login');
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
                <h1> {succMessage} </h1> 
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
        else if (password != confirmPassword)
        {
            return ( 
            <div 
                className="error"
                style={{ 
                    display: error ? "" : "none", 
                }} 
            > 
                <h1>Passwords do not match</h1> 
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
            <Navbar />

            <div className="box-main">
                <Logo />
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
                            maxLength="25"
                        />

                        <label className="Label">Roll Number/CNIC (No dashes)</label>
                        <input
                            onChange = {handleIdNum}
                            className = "Input"
                            value = {idNum}
                            type = "text"
                            placeholder=''
                            maxLength="13"
                        />
                        
                        <label className="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            className = "Input"
                            value = {email}
                            type = "email"
                            placeholder='someone@something.com'
                            maxLength="50"
                        />
                        
                        <label className="Label">Phone Number</label>
                        <input
                            onChange = {handleNumber}
                            className = "Input"
                            value = {phoneNumber}
                            type = "number"
                            placeholder='00000000000'
                            maxLength="13"
                        />

                        <label className="Label">University Name</label>
                        <input
                            onChange={handleUniversity}
                            className = "Input"
                            value = {university}
                            type = "text"
                            placeholder='HBS'
                            maxLength="50"
                        />

                        <label className='Label'>University ID Card</label>
                        <div className='imgInuput'>
                            {uniCardImgFR &&  (
                                <div className='imgDisplay'>
                                    <img 
                                        alt="not found"
                                        width = {"250px"}
                                        src = {uniCardImgFR}
                                    />
                                    <button className='reg-btn' onClick={()=>{setUniCardImgFR(null)}}>Remove Image</button>
                                </div>
                            )}
                            <FileBase64 type="file" multiple={false} onDone={({ base64 })=> handleFileChange(base64)}/>
                        </div>
                        
                        <label className="Label">Password</label>
                        <input
                            onChange = {handlePassword}
                            className = "Input"
                            value = {password}
                            type = "password"
                            placeholder='password'
                            maxLength="14"
                        />
                        
                        <label className="Label">Confirm Password</label>
                        <input
                            onChange = {handleConfirmPassword}
                            className = "Input"
                            value = {confirmPassword}
                            type = "password"
                            placeholder='password'
                            maxLength="14"
                        />


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