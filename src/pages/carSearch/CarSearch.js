import { Input, Button, Select } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import HeroSection from '../landingPage/components/heroSection/HeroSection';
import './carSearch.css';

const CarSearch = () => {
  const navigate = useNavigate();
  return (
    <CommonLayout>
      <HeroSection page="carSearch" />
      <div className="car-search__main">
        <div className="car-search__input">
          <p>Nama Mobil</p>
          <Input
            placeholder="Ketik nama/tipe mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
          />
        </div>
        <div className="car-search__input">
          <p>Kategori</p>
          <Select
            placeholder="Masukan Kapasitas Mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
          />
        </div>
        <div className="car-search__input">
          <p>Harga</p>
          <Select
            placeholder="Masukan Harga Sewa per Hari"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
          />
        </div>
        <div className="car-search__input">
          <p>Status</p>
          <Select
            placeholder="Status Penyewaan"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="219px"
          />
        </div>
        <Button
          className="car-search__button"
          backgroundColor="#5CB85F"
          color="white"
          borderRadius="2px"
          padding="8px 12px"
          w="92px"
          h="36px"
          fontSize="14px"
          fontWeight="700"
          lineHeight="20px"
          onClick={() => navigate('/search-result')}
        >
          Cari Mobil
        </Button>
      </div>
    </CommonLayout>
  );
};

export default CarSearch;
