import React from 'react'
import Card from './Card'
const Achievements = () => {
    const style = { marginBottom: "250px"};
    return (
        <div class="main" >
           <h2 class="title" data-aos="flip-right">Achievements</h2>
           <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="" isstars="0" stars="" buttonInfo="View Certification" />
           <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="" isstars="0" stars="" buttonInfo="View Certification" style={style}/>
        </div>
    )
}

export default Achievements
