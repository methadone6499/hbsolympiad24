import "./adminDashboard.css"
import Popup from "reactjs-popup"
import Navbar from '../navbar/Navbar'

function adminDashboard(){
    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <h1 className="text-big">
                    Admin Dashboard
                </h1>
                <div className="adminInfo infoViewBox">
                    <p className="text-small">
                        Name: A Man {"\n"}
                        ID Number: Immeasurable {"\n"}
                        Email: Wouldn't you like to know, fed boy {"\n"}
                        Phone Number: Nice try scammer {"\n"}
                    </p>
                </div>
                <h1 className="text-big">
                    Registered Users
                </h1>
                <div className="registrationOverview infoViewBox">
                    <ul className="regList">
                        <li className="text-small">
                            User 1
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li className="text-small">
                            User 2
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                        <li className="text-small">
                            User 3
                            <Popup trigger=
                                {<button className="btn"> View Info </button>}
                                modal nested>
                                {
                                    close=> (
                                        <div className="modal">
                                            <div className="content">
                                                <p className="text-small">
                                                    Name: A Man {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    ID Number: Immeasurable {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Email: Wouldn't you like to know, fed boy {"\n"}
                                                </p>
                                                <p className="text-small">
                                                    Phone Number: Nice try scammer {"\n"}
                                                </p>
                                            </div>
                                            <div>
                                                <button className="btn" onClick=
                                                    {()=>close() }>
                                                        Close Info
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </li>
                    </ul>
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

export default adminDashboard