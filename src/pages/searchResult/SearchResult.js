import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import CarCatalogue from './components/carCatalogue/CarCatalogue';
import ResultInput from './components/resultInput/ResultForm';
import queryString from 'query-string';
import './searchResult.css';

const SearchResult = () => {
  const [data, setData] = useState();
  const { search } = useLocation();
  const [input, setInput] = useState(queryString.parse(search));
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car${search}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
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
  const handleEdit = async () => {
    try {
      let temp = { ...input };
      let queries = queryString.stringify(temp);
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?${queries}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(input);
  return (
    <CommonLayout>
      <div className="search-result__header"></div>
      <ResultInput
        input={input}
        handleChange={handleChange}
        handleEdit={handleEdit}
      />
      <CarCatalogue data={data} />
    </CommonLayout>
  );
};

export default SearchResult;
