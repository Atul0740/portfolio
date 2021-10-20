import React from 'react'
import './AboutMe.css'
import photo from '../assets/profile_image.jpg'
import video from '../assets/video.mp4'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const AboutMe = () => {
    const {ref,inView}=useInView();
    const animation = useAnimation();
    useEffect(()=>{
        if(inView )
        {
            animation.start({
                x:0,
                transition :{
                    duration:0.1,
                    type:'spring',
                    bounce:0.6
                }
            })
            
        }
        if(!inView)
        {
            animation.start({
                x:'-100vw'
            })
        }

    },[inView,animation])
    return (
        <div className='aboutme'>
            <div className="first-content">
                <div className="text" >
                    <div className="text-name" ref={ref} data-aos="fade-up" data-aos-once="true">
                        Hello I'm <span style={{ fontWeight: "bolder" }} >Rob Davidson</span>
                        <motion.p className="email" style={{ fontSize: "20px" }}  animate={animation} >robdavison@gmail.com</motion.p>
                        <motion.p className="email" style={{ fontSize: "15px" }} >+91-9876543210</motion.p>
                        <motion.div className="icons" >
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-facebook-square text-white" style={{ fontSize: "50%" }}></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram text-white" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.twitte.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-twitter-square text-white" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin text-white" style={{ fontSize: "50%" }}></i></a>
                            <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                <i class="fab fa-github-square text-white" style={{ fontSize: "50%" }}></i></a>
                        </motion.div>
                    </div>

                    <div className="text-text" data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum dignissimos labore odit, accusantium ea voluptatum assumenda, perspiciatis eveniet a nam, nesciunt perferendis dolore natus repudiandae libero? Distinctio, possimus. Quidem.</div>
                    <button className="div-btn" data-aos="fade-up" data-aos-once="true">Download CV</button>
                </div>
                <div className="photo" data-aos="fade-up" data-aos-once="true">
                    <img src={photo} alt="" />
                </div>
            </div>
            <br />
            <div className="second-content" data-aos="fade-up" >
                <div className="second-title"><u style={{ color: "aqua" }}> <span style={{ color: "white" }}> Expertise and Interests </span></u></div>
                <div className='video'>
                    <div className="video-video">
                        <video src={video} style={{ backgroundColor: "white", borderRadius: "5px", marginBottom: "50px",width:"70%", height:"50%" }} controls className="intro-video"/>
                    </div>
                    <div className="video-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis placeat dolorem dicta labore, numquam provident laudantium? Ad ipsum maiores quos hic suscipit exercitationem necessitatibus expedita, iure ipsam similique repellat facilis, ab illum deleniti eos, adipisci ex. Maxime, amet ducimus!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
