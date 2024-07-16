import './Home.css'
import CountDownTimer from './CountdownTimer'
import Navbar from '../navbar/Navbar'

function Home(){
    
    const current_time = new Date().getTime();
    const time_to_be_added = 3 * 24 * 60 * 60 * 1000;
    
    const d = new Date("2024-08-29T00:11:00.556094Z");
    console.log(d.getMinutes());

    const targetDate = current_time + time_to_be_added;

    console.log(d);

    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                    placeholder="logo"
                />

                <div className='timerBox'>
                    <h1 className='text-big'>Countdown Timer</h1>
                    <CountDownTimer targetDate={d} />
                </div>

                <h1 className="text-big">
                    Welcome to the HBS Olympiad
                 </h1>
                <p className="text-small">
                    Welcome to HBS OLYMPIAD ‘24, an extravaganza brought to you by the HBS Medical and Dental College 
                    Student Council. As the premier ins tu on in Islamabad, Pakistan, we are proud to present a three-day 
                    event designed to not only engage and smulate our students socially but also foster camaraderie and 
                    compe ve spirit among medical colleges across the region.
                </p>
                <br />
                <h1 className="text-big" id="program">
                    Featured Events
                </h1>
                <br />
                <div className="events-box">
                    <div className="E-event E_T E_L">
                        <p className="text-big">
                            Cultural Festival
                        </p>
                        <p className="text-small">
                            A cultural fest is an event celebrating diverse traditions through music, dance, food, crafts, and performances, promoting cultural exchange and community spirit.
                        </p>
                    </div>
                    <div className="E-event E_T E_R">
                        <p className="text-big">
                            Qawali
                        </p>
                        <p className="text-small">
                            Qawwali is a Sufi devotional music from South Asia, featuring powerful vocals, rhythmic instruments, and repetitive choruses. Its lyrics focus on spiritual themes, aiming to evoke deep emotional and spiritual experiences in the audience.   
                        </p>
                    </div>
                    <div className="E-event E_L">
                        <p className="text-big">
                            BLS Competition
                        </p>
                        <p className="text-small">
                            A BLS (Basic Life Support) competition tests participants' skills in emergency medical procedures, such as CPR, using an AED, and handling choking incidents. Competitors are judged on their ability to perform these life-saving techniques quickly and accurately.
                        </p>
                    </div>
                    <div className="E-event E_R">
                        <p className="text-big">
                            Futsal
                        </p>
                        <p className="text-small">
                            A BLS (Basic Life Support) competition tests participants' skills in emergency medical procedures, such as CPR, using an AED, and handling choking incidents. Competitors are judged on their ability to perform these life-saving techniques quickly and accurately.
                        </p>
                    </div>
                </div>
                <br /> <br />
                <h1 className="text-big" id="program">
                    Sponsors
                </h1>
                <p className="text-small">
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

export default Home