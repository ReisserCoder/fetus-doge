import React from 'react';
import Image from '../../../images/banner-no-logo.png';

import {
  DashboardContainer,
  DashboardBg,
  ImageBg,
  DashboardUserContent,
  DashboardUserItem,
  Img,
  Title,
  Output
} from './DashboardElements';

const Dashboard = ({
  id,
  img,
  alt,
  title,
  output,
  primary
}) => {
  console.log(primary);
  return (
    <>
      <DashboardContainer>
        <DashboardBg>
          <ImageBg alt="banner" src={Image}></ImageBg>
        </DashboardBg>
        <DashboardUserContent>
          <DashboardUserItem id={id}>
            <Img src={img} alt={alt}></Img>
            <Title>Coming soon!</Title>
            <Output>{output}</Output>
          </DashboardUserItem>
        </DashboardUserContent>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;