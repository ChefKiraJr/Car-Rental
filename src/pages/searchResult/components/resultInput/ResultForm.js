import { Button, Input, Select } from '@chakra-ui/react';
import React from 'react';
import './resultForm.css';

const ResultForm = () => {
  return (
    <div className="result-form__main">
      <div className="result-form__header">Pencarianmu</div>
      <div className="result-form__content">
        <div className="result-form__input">
          <p>Nama Mobil</p>
          <Input
            placeholder="Ketik nama/tipe mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="221px"
          />
        </div>
        <div className="result-form__input">
          <p>Kategori</p>
          <Select
            placeholder="Masukan Kapasitas Mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="221px"
          />
        </div>
        <div className="result-form__input">
          <p>Nama Mobil</p>
          <Select
            placeholder="Masukan Kapasitas Mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="221px"
          />
        </div>
        <div className="result-form__input">
          <p>Nama Mobil</p>
          <Select
            placeholder="Masukan Kapasitas Mobil"
            color="#8A8A8A"
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            fontFamily="Rubik"
            fontStyle="normal"
            w="221px"
          />
        </div>
        <Button
          className="result-form__button"
          padding="8px 12px"
          color="#0D28A6"
          fontWeight="700"
          fontSize="14px"
          lineHeight="20px"
          backgroundColor="#fff"
          border="1px solid #0D28A6"
          borderRadius="2px"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ResultForm;
