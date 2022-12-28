import React from 'react';
import './testimonySlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonyDetail from './TestimonyDetail';

const TestimonySlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '0px',
    slidesToShow: 1,
  };
  return (
    <div className="testimony-slider__container">
      <Slider {...settings}>
        <TestimonyDetail />
        <TestimonyDetail />
        <TestimonyDetail />
      </Slider>
    </div>
  );
};

export default TestimonySlider;
