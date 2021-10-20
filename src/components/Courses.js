import React from 'react'
import './Course.css'
import CourseCard from './CourseCard'
import photo from '../assets/photo.jfif'
const Courses = () => {
    const style={marginBottom:"300px"}
    return (
        <section className="main">
            <div className="title" data-aos="flip-left" style={{ marginBottom: "20px" }} data-aos-once="true">Courses</div>

            <div className="courses_container">
                
                <CourseCard
                    imgsrc={photo}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis dolorum minus tempora ipsum ab, laboriosam aliquid a expedita ex, nesciunt, dolorem fugiat consequuntur perspiciatis labore nam saepe repellat. Dolorum!"
                    subtitle="Duration : 6 hrs."
                    link="https://www.instagram.com"
                />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : 6 hrs." link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : 6 hrs." link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : 6 hrs." link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : 6 hrs." link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : 6 hrs." link="https://www.instagram.com" style={style}/>

            </div>

        </section>
    )
}

export default Courses
