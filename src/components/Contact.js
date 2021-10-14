import React from 'react'
import './Contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    return (
        <div className='contact'>
            <h2 class="title" data-aos="flip-left">Contact</h2>
            <div className="contact-icons" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" >
                <div class="contact1 c1">
                    <LocationOnIcon style={{ color: "black", background: "white", height: "80px", width: "80px" }} className="img-icon"/>
                    <div className="con-text">San Francissco</div>
                </div>
                <div class="contact1">
                    <PhoneIcon style={{ color: "black", background: "white", height: "80px", width: "80px" }}className="img-icon" />
                    <div className="con-text">415-832-2000</div>
                </div>
                <div class="contact1">
                    <MailIcon style={{ color: "black", background: "white", height: "80px", width: "80px" }} className="img-icon"/>
                    <div className="con-text">alex@example.com</div>
                </div>
            </div>
            <p class="help" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">How can I help you? </p>
            <hr class="new2"></hr>
            <form data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">
                <label for="fname">Full name:</label><br />
                <input type="text" id="fname" name="fname"></input><br />
                <label for="lname">Email Address:</label><br />
                <input type="text" id="lname" name="lname"></input><br />
                <label for="lname">Subject:</label><br />
                <input type="text" id="lname" name="lname"></input><br />
                <label for="lname">Message:</label><br />
                <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            </form>
            
            <button class="message" data-aos="fade-up"  data-aos-duration="1000">Send Message</button>

        </div>
    )
}

export default Contact
