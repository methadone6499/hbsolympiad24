import './Events.css'
import {useNavigate, Link} from "react-router-dom"

function Events(){

    return(
        <div className='Home'>
            <nav class="navbar">

                <div class="dropdown">
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">
                        <div class="Login">
                            <button class="btn btn-sm">
                                <Link to="/login" class="links">Login</Link>
                            </button>
                        </div>
                        <div class="SignUp">
                            <button class="btn btn-sm">
                                <Link to="/signup" class="links">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>

                

                <ul class="nav-list">
                    <li>
                        <Link to="/" class="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/events" class="links here">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
                </ul>

                {/*<div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>*/}
            </nav>

            <div class="box-main">
                <img
                    src="https://i.imgur.com/e6Lnl9j.png"
                    alt="Logo"
                    height="235"
                    width="325"
                    placeholder="logo"
                />
                <h1 class="text-big">
                    Events for the HBS Olympiad
                 </h1>
                <p class="text-small">
                    The HBS olympiad offers a variety of events for all your interests ranging from Sports of both the body and mind to Academic events to clash with your peers in regards to your learnt skills all the way to Social events to chill out with friends and even make more.
                </p>
                <h1 class="text-big" id="program">
                    Sports
                </h1>
                <div class="events-box">
                    <div class="E-event E_T E_L">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3439/3439594.png" 
                            width="100"
                            height="100"
                            placeholder="Table Tennis"
                        />
                        <p class="text-big">
                            Table Tennis
                        </p>
                        <p class="text-small">
                            Table tennis is a racket sport derived from tennis but distinguished by its playing surface being atop a stationary table. Either individually or in teams of two, players take alternating turns returning a light, hollow ball over the table's net onto the opposing half of the court using small rackets until they fail to do so, which results in a point for the opponent
                        </p>
                    </div>
                    <div class="E-event E_T E_R">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/184/184093.png"
                            width="100"
                            height="100" 
                            placeholder="Volleyball"
                        />
                        <p class="text-big">
                            Volleyball
                        </p>
                        <p class="text-small">
                            Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.
                        </p>
                    </div>
                    <div class="E-event E_L">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/889/889455.png" 
                            width="100"
                            height="100"
                            placeholder="Basketball"
                        />
                        <p class="text-big">
                            Basketball
                        </p>
                        <p class="text-small">
                            Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop, while preventing the opposing team from shooting through their own hoop.
                        </p>
                    </div>
                    <div class="E-event E_R">
                        <img
                            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png" 
                            width="80"
                            height="100" 
                            placeholder="Chess"
                        />
                        <p class="text-big">
                            Chess
                        </p>
                        <p class="text-small">
                            Chess is an abstract strategy game that involves no hidden information and no elements of chance. It is played on a chessboard with an 8×8 grid. The players, referred to as "White" and "Black", each control sixteen pieces. White moves first, followed by Black. The game is won by checkmating the opponent's king.
                        </p>
                    </div>
                    <div class="E-event E_B E_L">
                        <img
                            src="https://w7.pngwing.com/pngs/977/162/png-transparent-video-game-game-controllers-gaming-miscellaneous-game-logo-thumbnail.png" 
                            width="100"
                            height="100" 
                            placeholder="E Games"
                        />
                        <p class="text-big">
                            E-Games
                        </p>
                        <p class="text-small">
                            An electronic game is a game that uses electronics to create an interactive system with which a player can play. Video games are the most common form today along with other common forms including handheld electronic games, standalone systems and exclusively non-visual products.
                        </p>
                    </div>
                    <div class="E-event E_B E_R">
                        <img
                            src="https://p7.hiclipart.com/preview/128/528/45/football-player-computer-icons-futsal-football.jpg" 
                            width="80"
                            height="100" 
                            placeholder="Futsal"
                        />
                        <p class="text-big">
                            Futsal
                        </p>
                        <p class="text-small">
                            Futsal is a football-based game played on a hardcourt like a basketball court, smaller than a football pitch, and mainly indoors. It has similarities to five-a-side football and indoor football.
                        </p>
                    </div>
                </div>
                <h1 class="text-big" id="program">
                    Academic
                </h1>
                <div class="events-box">
                    <div class="E-event E_T E_L">
                        <img
                            src="https://image.similarpng.com/very-thumbnail/2020/12/Quiz-comic-pop-art-style-illustration-on-transparent-background-PNG.png"
                            width="125"
                            height="100" 
                            placeholder="Quiz"
                        />
                        <p class="text-big">
                            Quizzes
                        </p>
                        <p class="text-small">
                            A quiz is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, and skills.
                        </p>
                    </div>
                    <div class="E-event E_T E_R">
                        <img
                            src="https://p1.hiclipart.com/preview/765/543/748/windows-metafile-yellow-surgery-surgical-suture-scalpel-symbol-logo-png-clipart.jpg"
                            width="100"
                            height="100" 
                            placeholder="Suturing"
                        />
                        <p class="text-big">
                            Suturing
                        </p>
                        <p class="text-small">
                            A surgical suture, also known as a stitch or stitches, is a medical device used to hold body tissues together and approximate wound edges after an injury or surgery. Application generally involves using a needle with an attached length of thread.
                        </p>
                    </div>
                    <div class="E-event E_L">
                        <img
                            src="https://e7.pngegg.com/pngimages/90/932/png-clipart-first-aid-supplies-cardiopulmonary-resuscitation-basic-life-support-cpr-and-aed-advanced-cardiac-life-support-first-aid-facilities-love-class-thumbnail.png" 
                            width="100"
                            height="100" 
                            placeholder="BLS Comp"
                        />
                        <p class="text-big">
                            BLS Competition
                        </p>
                        <p class="text-small">
                            Basic life support (BLS) is a level of medical care which is used for patients with life-threatening condition of cardiac arrest until they can be given full medical care by advanced life support providers.
                        </p>
                    </div>
                    <div class="E-event E_R">
                        <img
                            src="https://image.similarpng.com/very-thumbnail/2021/06/Dental-Logo-and-Icon-with-Modern-Design-Style-on-transparent-background-PNG.png" 
                            width="100"
                            height="100" 
                            placeholder="Dental Comp"
                        />
                        <p class="text-big">
                            Dental Competition
                        </p>
                        <p class="text-small">
                        Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.
                        </p>
                    </div>
                    <div class="E-event E_L E_B">
                        <img
                            src="https://w1.pngwing.com/pngs/405/111/png-transparent-background-meeting-presentation-poster-session-convention-research-organization-advertising-education.png" 
                            width="100"
                            height="100" 
                            placeholder="Research Conf"
                        />
                        <p class="text-big">
                            Research Conference
                        </p>
                        <p class="text-small">
                            A research conference or scientific conference is an event for researchers to present and discuss their scholarly work. Together with academic or scientific journals and preprint archives, conferences provide an important channel for exchange of information between researchers.
                        </p>
                    </div>
                    <div class="E-event E_B E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdG2uK04Tvm_i0swaSeypkIU-pgQqcWXHkg&s" 
                            width="100"
                            height="100" 
                            placeholder="MUN"
                        />
                        <p class="text-big">
                            MUN/Debates
                        </p>
                        <p class="text-small">
                        Model United Nations, also known as Model UN or MUN, is an educational model of the United Nations used for simulations in which students learn about diplomacy and international relations. At a MUN conference, each student works as the representative of a country, organization, or person, and must solve a problem with other delegates from around the world.
                        </p>
                    </div>
                </div>
                <h1 class="text-big" id="program">
                    Social
                </h1>
                <div class="events-box">
                    <div class="E-event E_T E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYQTiqHcIlHAI8C5F4jCDkgNhtmxfeg_nSg&s"
                            width="250"
                            height="100" 
                            placeholder="Scavenger Hunt"
                        />
                        <p class="text-big">
                            Scavenger Hunt
                        </p>
                        <p class="text-small">
                            A scavenger hunt is a game in which the organizers prepare a list defining specific items, which the participants seek to gather or complete all items on the list, usually without purchasing them.
                        </p>
                    </div>
                    <div class="E-event E_T E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWOFaY9ZYsNQOZZu_TCEt_byJNbqav4qEcA&s"
                            width="100"
                            height="100" 
                            placeholder="Art Comp"
                        />
                        <p class="text-big">
                            Art Competition
                        </p>
                        <p class="text-small">
                            Art competitions allow artists to display their work among their peers, have it reviewed by esteemed judges, and sometimes receive exhibition opportunities and monetary incentives.
                        </p>
                    </div>
                    <div class="E-event E_L">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeEoX0s2CnIjAtWD2fMXFceuxVJ1_mzWR3w&s" 
                            width="100"
                            height="100" 
                            placeholder="Photo Gallery"
                        />
                        <p class="text-big">
                            Photography Gallery
                        </p>
                        <p class="text-small">
                            An event where competitors can submit their photographs to be displayed so they can be viewed by peers and reviewed by judges to select the best one among them.
                        </p>
                    </div>
                    <div class="E-event E_R">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquooo48SV3Uw_SM4DLHoxzdjOvF-J6Yfgkg&s" 
                            width="100"
                            height="100" 
                            placeholder="Music Jam"
                        />
                        <p class="text-big">
                            Music Jamming Session
                        </p>
                        <p class="text-small">
                            A jam session is a relatively informal musical event, process, or activity where musicians, typically instrumentalists, play improvised solos and vamp over tunes, drones, songs, and chord progressions
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

export default Events