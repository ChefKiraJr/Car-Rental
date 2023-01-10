import React from 'react';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import CarCatalogue from './components/carCatalogue/CarCatalogue';
import ResultInput from './components/resultInput/ResultForm';
import './searchResult.css';

const SearchResult = () => {
  return (
    <CommonLayout>
      <div className="search-result__header"></div>
      <ResultInput />
      <CarCatalogue />
    </CommonLayout>
  );
};

export default SearchResult;
