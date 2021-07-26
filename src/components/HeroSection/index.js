import React, { useState } from 'react';
import { Button } from '../Button';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram
} from 'react-icons/fa';
import Image from '../../images/adaboy_banner.png';
import Image1 from '../../images/logo.png';
import {
  HeroContainer,
  HeroBg,
  ImageBg,
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
        <ImageBg alt='banner' src={Image}/>
      </HeroBg>
      <HeroContent>
        <HeroImage alt='logo' src={Image1}></HeroImage>
        <HeroH1>ADABoy</HeroH1>
        <SocialMediaWrap>
            <SocialIcons>
            <SocialIconLink
              target='_blank'
              aria-label='Twitter'
              href='//www.twitter.com/@adaboytoken'
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href=''
              target='_blank'
              aria-label='Youtube'
              rel='noopener noreferrer'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href=''
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href=''
              target='_blank'
              aria-label='Telegram'
              rel='noopener noreferrer'
            >
              <FaTelegram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
        <HeroP>
          Great Rewards<br></br>
          A Well Trained Team<br></br>
          Treat Yourself with ADA<br></br>
          <CA>
          CA: ToBeUpdatedAtLaunch
          </CA>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href='//poocoin.app/tokens/'
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
            href='https://exchange.pancakeswap.finance/#/swap?outputCurrency='
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
