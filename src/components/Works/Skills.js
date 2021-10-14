import React from 'react';
import "./Works.css";
import video from "../../assets/video.mp4";

function SkillVideos() {
    return (
        <section className="blogs">
            <div className="video_container">
                <div className="video" data-aos="fade-up">
                    <video src={video}  controls />
                </div>
                <div className="video" data-aos="fade-up">
                    <video src={video} controls />
                </div>
                <div className="video" data-aos="fade-up">
                    <video src={video} controls />
                </div>
            </div>
        </section>
    )
};

export default SkillVideos