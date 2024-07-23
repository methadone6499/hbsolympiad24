import './Faqs.css'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function Faqs(){
    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <div className= "faqtexto">
                    <div className= "text-big">
                        <h1>FAQS</h1>
                    </div>
                    <div className = "faqstuff">
                            <h1 className='text-big'>How to register for events?</h1>
                            <div className='text-small'>
                                <p>For Solo events just press the register button and you'll register yourself for the event.</p>
                                <p>For Team events if you want to register as a captain then just register on the Team events page. Then send the token you get to the people you want to have as team members.</p>
                                <p>If you want to register as a team member. Press the "Switch to Member Registration" and then enter the token you got from the friend in the empty field. After that press register for the event.</p>
                            </div>
                            <h1 className='text-big'>How does fee payment work?</h1>
                            <div className='text-small'>
                                <p>The steps to do payment are uploaded on the user dashboard, just pay according to the steps given on user dashboard account and upload the fee payment proof on the user dashboard. The user dashboard can be accessed by pressing Profile button on the top right. If there's a discrepancy in payment or a terrible image is uploaded your payment will be disapproved and you will not be allowed to take part in the event until you reupload with the proper fee payment amount and image.</p>
                            </div>
                            <h1 className='text-big'>What not to do when signing up?</h1>
                            <div className='text-small'>
                                <p>Insert all correct information and images, because if you do insert wrong images or details your account will be purged.</p>
                            </div>
                            <h1 className='text-big'>I forgot my password what do I do?</h1>
                            <div className='text-small'>
                                <p>When signing up please remember to write down your password otherwise you can email at hbsolympiad@gmail.com and it will take around 2-3 days to recover your password.</p>
                            </div>
                            <p className='text-big'>Can I change the events I have registered for?</p>
                            <p className='text-small'>No, please do a double or triple take when registering, you cannot drop events but exceptional cases will be dealt separately.</p>
                            <h2 className='text-small'>If there's weird bugs or glitches please send an email at hbsolympiad@gmail.com</h2>
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

export default Faqs;