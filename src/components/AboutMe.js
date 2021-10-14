import React from 'react'
import './AboutMe.css'
import photo from '../assets/profile_image.jpg'
import video from '../assets/video.mp4'
import ReactPlayer from 'react-player'
const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className="first-content" data-aos="fade-up">
                <div className="text" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <div className="text-name" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Hello I'm <span style={{ fontWeight: "bolder" }}>Rob Davidson</span> </div>
                    <div className="text-text" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum dignissimos labore odit, accusantium ea voluptatum assumenda, perspiciatis eveniet a nam, nesciunt perferendis dolore natus repudiandae libero? Distinctio, possimus. Quidem.</div>
                    <div className="btns" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <div className="btn"><span className='dn-txt'>Download CV</span></div>
                        <div className="btn-text">Download Cv</div>
                    </div>
                    <div className="btns" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <div className="btn"><span className='dn-txt'>Contact</span></div>
                        <div className="btn-text1">Contact</div>
                    </div>
                </div>
                <div className="photo">
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className="second-content" data-aos="fade-up" data-aos-delay="500">
                <div className="second-title"><u style={{ color: "aqua" }}> <span style={{ color: "white" }}> Expertise and Interests </span></u></div>
                <div className='video'>
                    <div className="video-video">
                        <ReactPlayer url={video} style={{ backgroundColor: "white", borderRadius: "5px", marginBottom: "50px" }} controls width='30vw' height='40vh' />
                    </div>
                    <div className="video-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis placeat dolorem dicta labore, numquam provident laudantium? Ad ipsum maiores quos hic suscipit exercitationem necessitatibus expedita, iure ipsam similique repellat facilis, ab illum deleniti eos, adipisci ex. Maxime, amet ducimus!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
