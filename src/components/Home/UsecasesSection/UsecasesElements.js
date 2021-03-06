import styled from 'styled-components';

export const UsecasesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1F5CC0;
  color: #FFC22E;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const UsecasesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const UsecasesCard = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 450px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const UsecasesH1 = styled.h1`
  font-size: 3.2rem;
  color: #FFC22E;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const UsecasesH2 = styled.h2`
  color: #1F5CC0;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const UsecasesP = styled.p`
  font-size: 1.3rem;
  color: #242020;
  text-align: center;
`;

export const UsecasesImg = styled.img`
  height: 150px;
  width: 150px;
`