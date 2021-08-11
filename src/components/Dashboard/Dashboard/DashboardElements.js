import styled from 'styled-components';

export const DashboardContainer = styled.div`
  background: #FBF5F0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
`

export const DashboardBg = styled.div`
  position: absolute;
  top: 0;
  right: 0; 
  bottom: 0;
  left: 0;
  max-height: 6400px;
  overflow: hidden;
`

export const ImageBg = styled.img`
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: shrink-to-fit;
  overflow: hidden;
`;

export const DashboardUserContent = styled.div`
  /*z-index: 2;
  width: 60vw;
  height: 50vh;
  max-width: 1200px;
  position: absolute;
  padding: 6px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #113A72;
  background-color: #F4F3F3;
  transparency: 20%;*/
`;

export const DashboardUserItem = styled.div`
  display: grid;
  /*height: 300px;
  width: calc(60vh - 60px);
  align-items: center;
  background: #FFF;
  border: 1px solid;*/
`

export const Img = styled.img`
  z-index: 4;

`

export const Title = styled.div`
  z-index: 3;
  font-size: 3rem;
  font-color: #1F5CC0;
`

export const Output = styled.div`
  z-index: 4;
`

