import React from 'react'


const Education = () => {
   return (

      <div class="main">
         <h2 class="title" data-aos="flip-left" >Education</h2>
         <div class="experience1" data-aos="fade-up" >
            <h2 class="h2">10th CBSE</h2>

            <h4>Sanjuba High School, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>
            <p></p>
            <button class="div-btn">View Certification</button>
         </div>

         <div class="experience1" data-aos="fade-up" >
            <h2 class="h2">12th SSC</h2>

            <h4>Shivaji Science College, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>


            <button class="div-btn">View Certification</button>
         </div>
         <div class="experience1" data-aos="zoom-in"  style={{marginBottom:"240px"}}>
            <h2 class="h2">B.Tech (Computer Enginnering)</h2>

            <h4>G.H. Raisoni College of Engineering, Nagpur</h4>

            <span>Apr 2020 - May 2020</span>
            <button class="div-btn">View Certification</button>
         </div>
      </div>
   )
}

export default Education
