import React from 'react';
import './heroSection.css';
import carImage from '../../../../assets/images/mercedes_car.png';
import { Button } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <>
      <div className="hero-section__container">
        <div className="hero-section__content">
          <div className="hero-section__main-text">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </div>
          <div className="hero-section__desc-text">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </div>
          <Button
            className="hero-section__button"
            backgroundColor="#5CB85F"
            color="white"
            borderRadius="2px"
            padding="8px 12px"
          >
            Mulai Sewa Mobil
          </Button>
          <img
            src={carImage}
            alt="mercedes-car"
            className="hero-section__photo"
          />
          <div className="hero-section__image-background"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
