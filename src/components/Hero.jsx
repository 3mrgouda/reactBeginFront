import React from 'react';
import HeroBg from '../assets/heroBg.png';
const BgStyle = {
    backgroundImage:`url(${HeroBg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    width:'100%',
    height:'100',
};

export const Hero = () => {
  return (
    <>
    <div style={BgStyle}>
        <div  className="container mx-auto">
            
        </div>
    </div>
    </>
  )
}
