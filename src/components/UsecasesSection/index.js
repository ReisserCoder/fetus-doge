import React from 'react';
import {
  UsecasesContainer,
  UsecasesH1,
  UsecasesWrapper,
  UsecasesCard,
  UsecasesH2,
  UsecasesP
} from './UsecasesElements';

const Usecases = () => {
  return (
    <UsecasesContainer id='usecases'>
      <UsecasesH1>Usecases</UsecasesH1>
      <UsecasesWrapper>
      <UsecasesCard>
          <UsecasesH2>Fetus Farm</UsecasesH2>
          <UsecasesP>
            Stake your Fetus. Twins? Triplets? Maybe your mother would disagree but in this case the more Fetus the better! The tokenmonics aren't the only way for Fetus to make more Fetus.
          </UsecasesP>
        </UsecasesCard>
        <UsecasesCard>
          <UsecasesH2>Fetus Swap</UsecasesH2>
          <UsecasesP>
            Part of the planning is to be able to buy and sell FDOGE, among other tokens, right through our website. Think of it like an umbilical cord between you and your Fetus. And always remember to feed your Fetus!
          </UsecasesP>
        </UsecasesCard>
        
        <UsecasesCard>
          <UsecasesH2>The Test Tube</UsecasesH2>
          <UsecasesP>
          Blockchain babies? Has computer science gone too far? Rugpulls have. Not only will Fetus vet and audit new projects, but Fetus holders will automatically help these projects get started, and reap the rewards of a fresh launch in the process.
          </UsecasesP>
        </UsecasesCard>
      </UsecasesWrapper>
    </UsecasesContainer>
  );
};

export default Usecases;