import React from 'react';
import Image from '../../images/roadmap.png';

import {
  RoadmapContainer,
  RoadmapImg
} from './RoadmapElements';

const RoadmapSection = () => {
  return (
    <RoadmapContainer>
      <RoadmapImg src={Image} alt='roadmap'/>
    </RoadmapContainer>
  )
}

export default RoadmapSection;