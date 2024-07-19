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

    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const res = await axios.post('http://localhost:5000/admin/getUsers', {
                    page
                })
                const userAmmount = (Object.values(res.data).length);
                const userData = res.data;
                const userList = userData.map((d) => <li key={d.name}>{d.name}</li>);
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
                <div className='shownList'>
                    <ul>
                        <h2>Names</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.name}>{d.name}</li>)  ) : ( 'none' ) }
                    </ul>
                    <ul>
                        <h2>IDs</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.id}>{d.id}</li>)  ) : ( 'none' ) }
                    </ul>
                    <ul>
                        <h2>Emails</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.email}>{d.email}</li>)  ) : ( 'none' ) }
                    </ul>
                    <ul>
                        <h2>Phone Number</h2>
                        { sentUser ? ( sentUser.map((d) => <li key={d.phoneNumber}>{d.phoneNumber}</li>)  ) : ( 'none' ) }
                    </ul>
                </div>
                <button className='btn btn-sm' onClick={ handleSetPage } >Next Page</button>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default UserList