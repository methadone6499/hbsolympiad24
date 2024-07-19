import './Login.css'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import axios, { all } from 'axios'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function Login(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   

    // States for registration 
    const [idNum, setIdNum] = useState("");  
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
  
    
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNo] = useState("");

    // Handling the ID change 
    const handleIdNum = (e) => { 
        setIdNum(e.target.value); 
        //setSubmitted(false); 
    }; 
  
    // Handling the email change 
    const handleEmail = (e) => { 
        setEmail(e.target.value); 
        //setSubmitted(false); 
    }; 
  
    // Handling the password change 
    const handlePassword = (e) => { 
        setPassword(e.target.value); 
        //setSubmitted(false); 
    }; 

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

{/*}
    useEffect(() => {
        if (name!= "" && phoneNumber!="" && idNum && email) {
            navigate('/user_dashboard', { state: { name, idNum, email, phoneNumber } });
        }
    }, [name, phoneNumber, idNum, email]);*/}

  
    // Handling the form submission 
    const handleSubmit = async(e) => { 
       console.log(e);
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
                    idNum, email, password, 
                })
                .then(res=>{
                    //alert("Successful login!");
                    console.log(res.data.result.name);
                    const userInfo = { name: res.data.result.name, id: res.data.result.id, email: res.data.result.email , phoneNumber: res.data.result.phoneNumber, token: res.data.token };
                    localStorage.setItem('profile', JSON.stringify(userInfo));
                    navigate('/user_dashboard');
                })
            }
            catch(e){
                alert('Server error');
                console.log(e);
            }
            
        } 
    }; 
    
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


    if (user) {
        return (
            <img src="https://i.redd.it/oaafntunc8wb1.jpeg" className='kysNOW'  />)

    }

    else {
    return(
        <div className='Home'>

            <Navbar />

            <div className="box-main">
                <Logo />
                <div className="LoginPage">
                    <div>
                        <h1>User Login</h1>
                    </div>

                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label className="Label">Roll Number/CNIC</label>
                        <input
                            onChange = {handleIdNum}
                            className = "Input"
                            value = {idNum}
                            type = "number"
                        />
                        
                        <label className="Label">Email</label>
                        <input
                            onChange = {handleEmail}
                            className = "Input"
                            value = {email}
                            type = "text"
                        />
                        
                        <label className="Label">Password</label>
                        <input
                            onChange = {handlePassword}
                            className = "Input"
                            value = {password}
                            type = "password"
                        />

                        <button className="buton" type="submit">
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
    )}
}

export default Login