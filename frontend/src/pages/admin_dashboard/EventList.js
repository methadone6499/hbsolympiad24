import React from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function EventList(){
    return(
        <div className='Home'>
            <Navbar />
            <div className='box-main'>
                <Logo />
                <h1 className="text-big">
                    Event List
                </h1>
            </div>
        </div>
    )
}

export default EventList