import React from 'react'
import './CourseCard.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
const CourseCard = (props) => {
    // const style1 = { color: "green"};
    // const style2 = { color:"yellow"};
    return (
        <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
        <div className="course" data-aos="zoom-in" >
            
                <div className="course_image" style={{ backgroundImage: `url(${props.imgsrc})` }} ></div>
                <Tippy content={props.title}>
                <p className="course-title" onClick="">{props.title}</p>
                </Tippy>
                <p><strong>{props.subtitle}</strong>{props.duration}</p>
            
        </div>
        </a>
    )
}

export default CourseCard
