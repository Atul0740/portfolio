import React from 'react'
import './CourseCard.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
const CourseCard = (props) => {
    
    return (
        <a href={props.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div className="course" data-aos="zoom-in"  data-aos-anchor-placement="top-bottom">

                <div className="course_image" style={{ backgroundImage: `url(${props.imgsrc})` }} ></div>
                <Tippy content={props.title}>
                    <p className="course-title" >{props.title}</p>
                </Tippy>
                <p>{props.subtitle}</p>

            </div>
        </a>
    )
}

export default CourseCard
