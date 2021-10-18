import React from 'react'
import './Course.css'
import CourseCard from './CourseCard'
import photo from '../assets/photo.jfif'
const Courses = () => {
    return (
        <section className="main">
            <div className="title" data-aos="flip-left" style={{ marginBottom: "20px" }}>Courses</div>

            <div className="courses_container">
                
                <CourseCard
                    imgsrc={photo}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis dolorum minus tempora ipsum ab, laboriosam aliquid a expedita ex, nesciunt, dolorem fugiat consequuntur perspiciatis labore nam saepe repellat. Dolorum!"
                    subtitle="Duration : "
                    duration="6 hrs."
                    type="course"
                    link="https://www.instagram.com"
                />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : " duration="6 hrs." type="course" link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : " duration="6 hrs." type="course" link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : " duration="6 hrs." type="course" link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : " duration="6 hrs." type="course" link="https://www.instagram.com" />
                <CourseCard imgsrc={photo} title="Complete Web Development Course" subtitle="Duration : " duration="6 hrs." type="course" link="https://www.instagram.com" />

            </div>

        </section>
    )
}

export default Courses
