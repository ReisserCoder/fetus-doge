import React, { useState } from 'react';

import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';


function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Dashboard />
    </>
  );
}

export default DashboardPage;