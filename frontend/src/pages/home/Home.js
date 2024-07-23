import './Home.css'
import CountDownTimer from './CountdownTimer'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

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
                <Logo />

                <div className='timerBox'>
                    <h1 className='text-big'>Countdown Timer</h1>
                    <CountDownTimer targetDate={d} />
                </div>

                <h1 className="text-big">
                    Welcome to the HBS Olympiad
                 </h1>
                <p className="text-small">
                    Welcome to HBS OLYMPIAD ‘24, an extravaganza brought to you by the HBS Medical and Dental College 
                    Student Council. As the premier institute in Islamabad, Pakistan, we are proud to present a three-day 
                    event designed to not only engage our students socially but also foster camaraderie and 
                    competitive spirit among medical colleges across the region.
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
                            A celebration of the arts, music, dance and community, the cultural festival stands at the heart of the HBS Olympiad, promising incredible performances and a refreshing taste of community spirit
                        </p>
                    </div>
                    <div className="E-event E_T E_R">
                        <p className="text-big">
                            Qawali
                        </p>
                        <p className="text-small">
                            Prepare to be enthralled by the powerful vocals, rhythmic beats and standout energy of our greatly anticipated Qawali event! Whether you are new to the genre or an avid enjoyer of the classics, we hope you are excited for this passionate segment
                        </p>
                    </div>
                    <div className="E-event E_L">
                        <p className="text-big">
                            BLS Competition
                        </p>
                        <p className="text-small">
                            When it comes to a crashing patient, there’s no time to waste. Showcase your ability to deal with an active emergency with CPR, AEDs and more in our fast paced BLS even
                        </p>
                    </div>
                    <div className="E-event E_R">
                        <p className="text-big">
                            Futsal
                        </p>
                        <p className="text-small">
                            Consider yourself a trick shot expert? Or perhaps you prefer to dazzle the competition with your dribbling. Look no further than our Futsal event to showcase your skills
                        </p>
                    </div>
                </div>
                <br /> <br />
                <h1 className="text-big" id="program">
                    Sponsors
                </h1>
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