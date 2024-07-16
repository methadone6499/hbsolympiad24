import './TeamEventReg.css'
import Navbar from '../navbar/Navbar'

function TeamEventReg(){

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                />
                <h1 className="text-big">
                    Team Event Registration
                </h1>
                <p className="text-small">
                    Here you can register for all events and competitions that require a team of people to cooperate.{"\n"}
                    For events relating to individual please check out the individual event registration tab.
                </p>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default TeamEventReg