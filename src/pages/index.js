import React, { useState } from 'react';

import Navbar from '../components/Home/Navbar';
import Sidebar from '../components/Home/Sidebar';
import Footer from '../components/Home/Footer';
import HeroSection from '../components/Home/HeroSection';
import InfoSection from '../components/Home/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from '../components/Home/InfoSection/Data';
import UsecasesSection from '../components/Home/UsecasesSection';
import Services from '../components/Home/Services';
import RoadmapSection from '../components/Home/RoadmapSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <UsecasesSection />
      <InfoSection {...homeObjTwo} />
      <Services />
      <RoadmapSection />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Home;
