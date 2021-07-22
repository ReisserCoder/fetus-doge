import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink href='//docs.google.com/document/d/1vuNt47kSfiQOvMuh01VmTuWNDAYHg0c2zMt2HPGSlcc'>
                Litepaper
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Fetus Doge
            </SocialLogo>
            <WebsiteRights>Fetus Doge © 2021 All rights reserved.</WebsiteRights>
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
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
