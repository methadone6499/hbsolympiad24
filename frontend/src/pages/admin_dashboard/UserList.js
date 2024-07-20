import { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import './Lists.css'
import axios from 'axios'

function UserList(){

    const [email, setEmail] = useState("");

    const [name, setName] = useState("");

    const [ sentUser, setSentUsers ] = useState();
    
    const [ page, setPage ] = useState(1);

    const [ searchMessage, setSearchMessage ] = useState("");

    const [searchTerm, setSearchTerm ] = useState(true);

    const [ userCardImg, setUserCardImg ] = useState("");
    const [ userPayProof, setUserPayProofImg ] = useState("");
    const [ picEmail, setPicEmail] = useState("")

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const handleSetPage = () => {
        setPage(page + 1);
    }

    const handleSetSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(!searchTerm);
    }

    const handlePic = async(email) => {
        console.log(email);
        try {
            const res = await axios.post('http://localhost:5000/admin/getImages', {
                email
            })
            setPicEmail(email);
            console.log(res.data);
            setUserCardImg(res.data.uniCard);
            if (res.data.feePayment) {setUserPayProofImg(res.data.feePayment)}
            else { alert(res.data.message); setUserPayProofImg("")}
        }
        catch(e) {
            console.log("error innit");
            console.log(e);
            alert(e)
;        }
    } 
    const handleDisapprove = async(email) => {
        console.log(email);
        try {
            const res = await axios.post('http://localhost:5000/admin/approveFeePayment', {
                email
            })
            console.log(res);
        }
        catch(e) {
            alert(e);
;        }
    }

    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const res = await axios.post('http://localhost:5000/admin/getUsers', {
                    page
                })
                const userAmmount = (Object.values(res.data).length);
                const userData = res.data;
                const userList = userData.map((d) => <li key={d.name}>{d.name}</li>);
                console.log(userData);
                setSentUsers(userData);
                if ( sentUser ) 
                    { 
                        if (userData[0]) { }
                        else { setPage(1); }
                    }
                else {  }
            }
            catch(e){
                console.log("Error fetching stuff");
            }
        }

        fetchUsers();
    }, [page])

    const handleSearchSubmit = async(e) => {
        e.preventDefault();
        if (searchTerm)
        {
            try {
                const res = await axios.post('http://localhost:5000/admin/getOneUserByEmail', {
                    email
                })
                setSearchMessage(res.data.message);
                const userData = [ { name:res.data.name, id:res.data.id, email:res.data.email, phoneNumber:res.data.phoneNumber } ];
                console.log(userData);
                setSentUsers(userData);
            }
            catch(e) {
                alert('server error here')
                console.log(e)
            }
        }

        else 
        {
            console.log(searchTerm);
            try {
                const res = await axios.post('http://localhost:5000/admin/getUsersByName', {
                    name
                })
                setSearchMessage(res.data.message);
                console.log(res.data[0]);
                const userAmmount = Object.values(res.data).length;
                console.log(userAmmount);
                const userData = [];
                for (var i = 0; i < userAmmount; i++)
                {
                    const userDataListRN = Object.values(res.data)[i];
                    const userDataRN = { name:userDataListRN.name, id:userDataListRN.id, email:userDataListRN.email, phoneNumber:userDataListRN.phoneNumber };
                    userData[i] = userDataRN;
                }
                setSentUsers(userData);
                // const userData = [ { name:res.data.name, id:res.data.id, email:res.data.email, phoneNumber:res.data.phoneNumber } ];
                // console.log(userData);
                // setSentUsers(userData);
            }
            catch(e) {
                alert('server error here')
                console.log(e)
            }
        }
    }

    return(
        <div className='Home'>
            <Navbar />
            <div className='box-main'>
                <Logo />
                { searchTerm ? 
                    ( 
                        <form>
                            <input
                                onChange = {handleSetEmail}
                                className = "Input"
                                value = {email}
                                type = "text"
                                placeholder='Email Search'
                            />
                            <button className='btn btn-sm' onClick={ handleSearchSubmit}>Search via Email</button>
                            <div className='text-big'>{ searchMessage }</div>  
                            <button className='btn btn-sm' onClick={ handleSetSearchTerm }>Switch to Name Search </button>
                        </form>
                    ) : 
                    ( 
                        <form>
                            <input
                                onChange = {handleSetName}
                                className = "Input"
                                value = {name}
                                type = "text"
                                placeholder='Name Search'
                            />
                            <button className='btn btn-sm' onClick={ handleSearchSubmit}>Search via Name</button>
                            <div className='text-big'>{ searchMessage }</div>  
                            <button className='btn btn-sm' onClick={ handleSetSearchTerm }>Switch to Email Search</button>
                        </form>
                    ) 
                }
                <h1 className="text-big">
                    User List
                </h1>
                <div className='shownList user'>
                    <ul>
                        <h2>Names</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}>{d.name}</li>)  ) : ( 'none' ) }
                    
                        <h2>IDs</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}>{d.id}</li>)  ) : ( 'none' ) }
                    
                        <h2>Emails</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}>{d.email}</li>)  ) : ( 'none' ) }
                    
                        <h2>Phone Number</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}>{d.phoneNumber}</li>)  ) : ( 'none' ) }
                    
                        <h2>Buttons</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}><button onClick={()=>handlePic(d.email)}>{d.email}</button></li>)  ) : ( 'none' ) }
                    </ul>
                </div>
                <button className='btn btn-sm' onClick={ handleSetPage } >Next Page</button>
            </div>
            { sentUser ? ( sentUser.map((d) => <li key={d.email}>
                { d.email === picEmail ? 
                ( 
                    <div>
                        <label className='Label'>Uni Card</label>
                        { userCardImg ? (<img width="100px" height="100px" src={userCardImg}></img>) : (<></>)}
                        { userPayProof ? 
                        (
                            <div>
                                <label className='Label'>Fee Payment</label>
                                <img width="100px" height="100px" src={userPayProof}></img>
                                <button className='btn btn-sm' onClick={()=>handleDisapprove(d.email)}>Disapprove Fee Image</button>
                            </div>
                        ) : (<h2 className='text-big'>No Fee Payment Yet</h2>)}
                    </div>
                ) : 
                (
                    <></>
                ) } 
                </li>)  ) : ( 'none' ) }
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default UserList