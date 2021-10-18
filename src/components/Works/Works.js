import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Works.css'




const Works = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'white', size: '25px' }}>
      <div className='skill'>
      <div className="title" data-aos="flip-right">My Works</div>
        <div className="Container" data-aos="fade-left">
          {Data.map((item, index) => {
            return (
              <>
                <div className="Wrap" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="Dropdown">
                    {item.answer}
                    
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Works;