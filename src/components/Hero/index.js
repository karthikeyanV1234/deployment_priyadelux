import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Video from '../../video/video.mp4';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBg,
  VideoBg,
  
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg 
        autoPlay 
        loop 
        muted 
        >
        <source src ={Video} type='video/mp4' />
        </VideoBg>
      </HeroBg>
      <Navbar toggle={toggle} />
      
      <Sidebar isOpen={isOpen} toggle={toggle} />
      
      <HeroContent>
      
        <HeroItems>
          <HeroH1>சிறந்த விலையில் தரமான செக்கு  எண்ணெய்</HeroH1>
          <HeroP>Pure traditional & Natural Chekku Coconut Oil</HeroP>
         
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
