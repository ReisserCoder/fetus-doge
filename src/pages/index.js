import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from '../components/InfoSection/Data';
import UsecasesSection from '../components/UsecasesSection';
import Services from '../components/Services';
import RoadmapSection from '../components/RoadmapSection';

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
