import React, { useState } from 'react';
import { Button } from '../Button';

import Video from '../../videos/video.mp4';
import Image from '../../images/logo.png'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroImage,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroImage alt='logo' src={Image}></HeroImage>
        <HeroH1>Fetus Doge</HeroH1>
        <HeroP>
          The youngest Doge yet. <br></br>
          The biggest potential. <br></br>
          Goal: The Greatest Doge of all Time (GDAT)
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href='//poocoin.app'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Chart {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
