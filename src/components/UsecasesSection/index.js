import React from 'react';
import ImageReflections from '../../images/ada_reflections.png';
import {
  UsecasesContainer,
  UsecasesH1,
  UsecasesWrapper,
  UsecasesCard,
  UsecasesH2,
  UsecasesP,
  UsecasesImg
} from './UsecasesElements';

const Usecases = () => {
  return (
    <UsecasesContainer id='usecases'>
      <UsecasesH1>Usecases</UsecasesH1>
      <UsecasesWrapper>
      <UsecasesCard>
          <UsecasesH2>ADA Reflections</UsecasesH2>
          <UsecasesP>
            Reflections will come to you in the form of BEP-20 ADA. Our first step beyond that is building an interface for holders to see their reflections. This will be right here on ADABoyToken.com.
          </UsecasesP>
        </UsecasesCard>
        <UsecasesCard>
          <UsecasesImg src={ImageReflections} alt='Reflections Image'></UsecasesImg>
        </UsecasesCard>
        <UsecasesCard>
          <UsecasesH2>Staking</UsecasesH2>
          <UsecasesP>
            Right from the beginning, the ADA gained from reflections can be staked. After the reflections interface is up and running, the team will create staking opportunties directly for ADABoy tokens.
          </UsecasesP>
        </UsecasesCard> 
        <UsecasesCard>
          <UsecasesH2>The Future</UsecasesH2>
          <UsecasesP>
            The team has a vast array of ideas for the future of ADABoy. Many are new ideas on BSC and in crypto in general. These ideas are better off left unshared, for now..
          </UsecasesP>
        </UsecasesCard>
      </UsecasesWrapper>
    </UsecasesContainer>
  );
};

export default Usecases;