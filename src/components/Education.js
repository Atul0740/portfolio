import React from 'react'
import './Education.css'

const Education = () => {
   return (

      <div class="main1">
         <h2 class="title" data-aos="flip-left" >Education</h2>
         <div class="experience1" data-aos="fade-right" data-aos-delay="200">
            <h2 class="h2">10th CBSE</h2>

            <h4>Sanjuba High School, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>
            <button class="btn">View Certification</button>
         </div>

         <div class="experience1" data-aos="fade-left" data-aos-delay="400">
            <h2 class="h2">12th SSC</h2>

            <h4>Shivaji Science College, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>


            <button class="btn">View Certification</button>
         </div>
         <div class="experience1" data-aos="fade-up" data-aos-delay="100">
            <h2 class="h2">B.Tech (Computer Enginnering)</h2>

            <h4>G.H. Raisoni College of Engineering, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>
            <button class="btn">View Certification</button>
         </div>
      </div>
   )
}

export default Education
