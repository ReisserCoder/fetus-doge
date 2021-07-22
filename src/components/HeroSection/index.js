import React, { useState } from 'react';
import { Button } from '../Button';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import Video from '../../videos/video.mp4';
import Image from '../../images/logo.png';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroImage,
  HeroH1,
  HeroP,
  CA,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons
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
        <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/fetusdoge'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com/channel/UCg0aftSmWoShMxnsZ_L8z1g'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//instagram.com/fetusdoge'
                target='_blank'
                aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        <HeroH1>Fetus Doge</HeroH1>
        <HeroP>
          The youngest Doge. <br></br>
          The biggest potential. <br></br>
          Goal: The Greatest Doge of all Time (GDAT) <br></br>
          <CA>
          CA: 0x045fd3795068358343608f469cd1a9b184be6f70
          </CA>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href='//poocoin.app/tokens/0x045fd3795068358343608f469cd1a9b184be6f70'
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
          <Button
            href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x045fd3795068358343608f469cd1a9b184be6f70'
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
            Buy {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
