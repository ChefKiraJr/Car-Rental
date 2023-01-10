import React from 'react';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import './carDetail.css';
import CarInformation from './components/carInformation/CarInformation';
import DetailForm from './components/detailForm/DetailForm';

const CarDetail = () => {
  return (
    <CommonLayout>
      <div className="car-detail__header"></div>'
      <DetailForm />
      <CarInformation />
    </CommonLayout>
  );
};

export default CarDetail;
