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
                    Student Council. As the premier institute on in Islamabad, Pakistan, we are proud to present a three-day 
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
                            Futsal is a football-based game played on a hardcourt like a basketball court, smaller than a football pitch, and mainly indoors. It has similarities to five-a-side football and indoor football.
                        </p>
                    </div>
                </div>
                <br /> <br />
                <h1 className="text-big" id="program">
                    Sponsors
                </h1>
                
                <div className="events-box">
                    <div className="E-event E_T E_L">
                        <img
                            src="https://dcassetcdn.com/design_img/22666/14424/14424_503865_22666_thumbnail.jpg"
                        />
                        <p className="text-big">
                            Jizz
                        </p>
                    </div>
                    <div className="E-event E_T E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRgi6sgapF8I-wHOw3hg9owge4pTP6TJlzw&s"
                        />
                        <p className="text-big">
                            Mr Breast
                        </p>
                    </div>
                    <div className="E-event E_T E_L">
                        <img
                            width="210"
                            height="181"
                            src="https://images-cdn.9gag.com/photo/aBn1yvQ_700b.jpg"
                        />
                        <p className="text-big">
                            FCK
                        </p>
                    </div>
                    <div className="E-event E_T E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7pyrGBWVkAn4yS3uEk-vCJzWarqWgIbfkw&s"
                        />
                        <p className="text-big">
                            Cock
                        </p>
                    </div>
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

export default Home