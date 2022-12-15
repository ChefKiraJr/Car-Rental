import React from 'react';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import HeroSection from './components/heroSection/HeroSection';
import OurServices from './components/ourServices/OurServices';
import './landingPage.css';

const LandingPage = () => {
  return (
    <CommonLayout>
      <HeroSection />
      <OurServices />
    </CommonLayout>
  );
};

export default LandingPage;
