import React from 'react';
import './carCatalogue.css';
import carImage from '../../../../assets/images/avanza_car.png';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const CarCatalogue = () => {
  const navigate = useNavigate();
  return (
    <div className="car-catalogue__container">
      {[1, 2, 3].map((value) => {
        return (
          <div className="car-catalogue__card">
            <img src={carImage} alt="avanza-car"></img>
            <div className="car-catalogue__card-information">
              <p>Innova</p>
              <p>Rp 500.000 / hari</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
            <Button
              w="100%"
              h="48px"
              padding="14px"
              color="#fff"
              fontWeight="700"
              fontSize="14px"
              lineHeight="20px"
              backgroundColor="#5CB85F"
              borderRadius="2px"
              onClick={() => navigate('/car-detail')}
            >
              Pilih Mobil
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default CarCatalogue;
