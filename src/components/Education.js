import React from 'react'
import Card from './Card'
import './Experiences.css'

const Education = () => {
   return (

      <div class="main">
         <h2 class="title" data-aos="flip-left"  >Education</h2>
         <Card desg="10th CBSE" company="Sanjuba High School, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" />
         <Card desg="12th SSC" company="Shivaji Science College, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" />
         <Card desg="B.Tech (Computer Enginnering)" company="G.H. Raisoni College of Engineering, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" />
      </div>
   )
}

export default Education
