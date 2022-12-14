import React from "react";
import CommonLayout from "../../components/commonLayout/CommonLayout";
import HeroSection from "./components/heroSection/HeroSection";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <CommonLayout>
      <HeroSection />
    </CommonLayout>
  );
};

export default LandingPage;
