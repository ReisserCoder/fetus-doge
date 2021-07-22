import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Tokenomics</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>4% FDoge Redistribution</ServicesH2>
          <ServicesP>
            The more you hold the more you receive.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>4% Liquidity Pool</ServicesH2>
          <ServicesP>
            Liquidity is locked on <a href='https://dxsale.app/app/v2_9/dxlockview?id=0&add=0x656B9875624e5BceCe96910E5Fb840A90386840B&type=lplock&chain=BSC'>DxSale</a>.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>4% Marketing</ServicesH2>
          <ServicesP>
            Quality marketing focused on building community.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
