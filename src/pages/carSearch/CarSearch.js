import { Input, Button, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import queryString from 'query-string';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import HeroSection from '../landingPage/components/heroSection/HeroSection';
import './carSearch.css';

const CarSearch = () => {
  const [input, setInput] = useState({
    name: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    isRented: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    if (e.target.name === 'minPrice') {
      if (e.target.value === '0') {
        temp.maxPrice = '1999999';
      } else if (e.target.value === '2000000') {
        temp.maxPrice = '5000000';
      } else {
        temp.maxPrice = '20000000';
      }
    }
    setInput(temp);
  };
  const handleSubmit = () => {
    let temp = { ...input };
    const queries = queryString.stringify(temp);
    navigate(`/search-result?${queries}`);
  };
  return (
    <CommonLayout>
      <HeroSection page="carSearch" />
      <div className="car-search__main">
        <div className="car-search__input">
          <p>Nama Mobil</p>
          <Input
            value={input.name}
            name="name"
            placeholder="Ketik nama/tipe mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="car-search__input">
          <p>Kategori</p>
          <Select
            value={input.category}
            name="category"
            placeholder="Masukan Kapasitas Mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
            onChange={(event) => handleChange(event)}
          >
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 orang</option>
          </Select>
        </div>
        <div className="car-search__input">
          <p>Harga</p>
          <Select
            value={input.minPrice}
            name="minPrice"
            placeholder="Masukan Harga Sewa per Hari"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="208px"
            onChange={(event) => handleChange(event)}
          >
            <option value="0">{`< Rp 2.000.000`}</option>
            <option value="2000000">Rp 2.000.000 - Rp 5.000.000</option>
            <option value="5000000">{`> Rp 5.000.000`}</option>
          </Select>
        </div>
        <div className="car-search__input">
          <p>Status</p>
          <Select
            value={input.isRented}
            name="isRented"
            placeholder="Status Penyewaan"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="219px"
            onChange={(event) => handleChange(event)}
          >
            <option value="false">Disewakan</option>
            <option value="true">Dijual</option>
          </Select>
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
          onClick={() => handleSubmit()}
        >
          Cari Mobil
        </Button>
      </div>
    </CommonLayout>
  );
};

export default CarSearch;
