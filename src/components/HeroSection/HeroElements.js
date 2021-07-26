import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  margin-top: 80px;
  background: #FBF5F0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 720px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 800px;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: shrink-to-fit;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  margin-top: 200px;
  padding: 6px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`;

export const SocialIconLink = styled.a`
  color: #113A72;
  font-size: 24px;
`;

export const HeroImage = styled.img`
  max-width: 200px;
  transition: opacity .5s;

  @media screen and (min-width: 1100px){
    opacity: 0;
  }
`

export const HeroH1 = styled.h1`
  color: #113A72;
  font-size: 48px;
  text-align: center;
  margin-top: -6px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1100px){
    opacity: 0;
  }
`;

export const HeroP = styled.p`
  color: #242020;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CA = styled.div`
  margin-top: 4px;
  color: #242020;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
