import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section__container">
        <div className="hero-section__main-text">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <div className="hero-section__desc-text">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        <button className="hero-section__button">Mulai Sewa Mobil</button>
      </div>
    </>
  );
};

export default HeroSection;
