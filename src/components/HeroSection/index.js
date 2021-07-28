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
              //href=''
              target='_blank'
              aria-label='Youtube'
              //rel='noopener noreferrer'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='//Instagram.com/adaboytoken'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='https://t.me/Adaboytoken'
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
          CA: 0x61059512739E31e272a697f04C0Ce4226504003D
          </CA>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href='//poocoin.app/tokens/0x61059512739E31e272a697f04C0Ce4226504003D'
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
            href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x61059512739E31e272a697f04C0Ce4226504003D'
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
