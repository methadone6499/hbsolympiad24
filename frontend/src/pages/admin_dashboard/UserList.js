import React from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'
import './Lists.css'

function UserList(){

    const ListOfUser = [
        { name: "mush", id: 1234, email: "something@something.com", aff: "FAST" },
        { name: "fahad", id: 5678, email: "fallout@bomb.com", aff: "FAST" },
        { name: "umar", id: 9012, email: "meth@newb.com", aff: "LUMS" },
        { name: "hamza", id: 3456, email: "pillowgwife.com", aff: "Curtin" },
    ]

    const listNames = ListOfUser.map((d) => <li key={d.name}>{d.name}</li>);
    const listIDs = ListOfUser.map((d) => <li key={d.id}>{d.id}</li>);
    const listEmails = ListOfUser.map((d) => <li key={d.email}>{d.email}</li>);
    const listAffs = ListOfUser.map((d) => <li key={d.aff}>{d.aff}</li>);

    return(
        <div className='Home'>
            <Navbar />
            <div className='box-main'>
                <Logo />
                <h1 className="text-big">
                    User List
                </h1>
                <div className='shownList'>
                    <ul>
                        <h2>Names</h2>
                        { listNames }
                    </ul>
                    <ul>
                        <h2>IDs</h2>
                        { listIDs }
                    </ul>
                    <ul>
                        <h2>Emails</h2>
                        { listEmails }
                    </ul>
                    <ul>
                        <h2>Affiliation</h2>
                        { listAffs }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserList