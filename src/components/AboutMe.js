import React from 'react'
import './AboutMe.css'
import photo from '../assets/profile_image.jpg'
import video from '../assets/video.mp4'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className="first-content" data-aos="fade-up">
                <div className="text" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <div className="text-name" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        Hello I'm <span style={{ fontWeight: "bolder" }}>Rob Davidson</span>
                        <p className="email" style={{ fontSize: "20px" }}>robdavison@gmail.com</p>
                        <p className="email" style={{ fontSize: "15px" }}>+91-9876543210</p>
                        <div className="icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-facebook-square" style={{ fontSize: "50%" }}></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.twitte.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-twitter-square" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-github-square" style={{ fontSize: "50%" }}></i></a>
                        </div>
                    </div>

                    <div className="text-text" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum dignissimos labore odit, accusantium ea voluptatum assumenda, perspiciatis eveniet a nam, nesciunt perferendis dolore natus repudiandae libero? Distinctio, possimus. Quidem.</div>
                    <button className="div-btn">Download CV</button>
                </div>
                <div className="photo">
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className="second-content" data-aos="fade-up" data-aos-delay="500">
                <div className="second-title"><u style={{ color: "aqua" }}> <span style={{ color: "white" }}> Expertise and Interests </span></u></div>
                <div className='video'>
                    <div className="video-video">
                        <video src={video} style={{ backgroundColor: "white", borderRadius: "5px", marginBottom: "50px",width:"70%", height:"50%" }} controls />
                    </div>
                    <div className="video-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis placeat dolorem dicta labore, numquam provident laudantium? Ad ipsum maiores quos hic suscipit exercitationem necessitatibus expedita, iure ipsam similique repellat facilis, ab illum deleniti eos, adipisci ex. Maxime, amet ducimus!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
