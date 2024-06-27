import './Login.css'
import {useNavigate, Link} from "react-router-dom"

function Login(){

    return(
        <div className='login'>
            <form action="POST">
                <input className='textbox' type="text" name="email"  placeholder="Enter Email"/>
                <input className="textbox" type="password" name="password" placeholder="Password"/>
                <input className="button" type="submit" />
                <p>Don't have an account? Sign Up <Link to ="/signup">Here</Link></p>
            </form>
        </div>
    )
}

export default Login