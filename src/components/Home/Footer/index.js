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
              <FooterLink href='/litepaper'>
                Litepaper
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              ADABoy
            </SocialLogo>
            <WebsiteRights>ADABoy © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://www.twitter.com/adaboytoken'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com/channel/UCYJelvhOji7AWhcEqFUMDhw'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//instagram.com/adaboytoken'
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
