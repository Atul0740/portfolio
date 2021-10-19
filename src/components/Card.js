import React from 'react'
import './Card.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
const Card = (props) => {
    let rows = [];
    let notrows=[];
    
    if(props.isstars==="1")
    {
        for (let i = 0; i < props.stars; i++) {
            rows.push(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(255, 187, 0)" stroke="black" strokeWidth="0px"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>)
        }
        for(let i=0;i<5-props.stars;i++){
            notrows.push( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 187, 0)" strokeWidth="1px"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>)
        }
    }
    
    const {ref,inView}=useInView();
    const animation = useAnimation();
    useEffect(()=>{
        if(inView )
        {
            animation.start({
                x:0,
                transition :{
                    duration:0.1,
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
        <div ref={ref}>
            <motion.div class="experience1"  style={props.style} animate={animation} data-aos="fade-up">
                <h2 class="h2">{props.desg}</h2>
                <h4>{props.company}</h4>
                <span>{props.date}</span>
                <p>
                    {props.desc}
                </p>
                <span>{rows}{notrows}</span>
                <p></p>
                <button class="div-btn">{props.buttonInfo}</button>
            </motion.div>
            </div>
    )
}

export default Card
