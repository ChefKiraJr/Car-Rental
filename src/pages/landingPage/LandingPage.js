import React from 'react';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import CtaBanner from './components/ctaBanner/CtaBanner';
import Faq from './components/faq/Faq';
import HeroSection from './components/heroSection/HeroSection';
import OurServices from './components/ourServices/OurServices';
import Testimony from './components/testimony/Testimony';
import WhyUs from './components/whyUs/WhyUs';
import './landingPage.css';

const LandingPage = () => {
  return (
    <CommonLayout>
      <HeroSection />
      <OurServices />
      <WhyUs />
      <Testimony />
      <CtaBanner />
      <Faq />
    </CommonLayout>
  );
};

export default LandingPage;
