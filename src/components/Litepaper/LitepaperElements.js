import styled from 'styled-components';

export const LitepaperContainer = styled.div `
  display: grid;
  max-width: 100vw;
`

export const Footer = styled.div `
  z-index 1; 
  margin-top: -20px;
`

export const Buttonc = styled.div `
  display: flex;
  padding: 0 10px;
  max-width: 100vw;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px;
    btn-size: 2rem;
    font-size: 2rem;
  }
`