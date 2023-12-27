import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT_PROGRESS } from '../Reduc-saga/Product/action/action';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ProductReducer.Product);

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  // Display only the first 5 items from the data array
  const displayedData = data ? data.slice(0, 5) : [];


  return (
    <div className='container'>
      <div className='d-flex flex-wrap'>
        {displayedData.map((item, index) => (
          <div className='card' key={index}>
            <h4>{item.product_name}</h4>
            <h5>{item.price}</h5>
            <h5>{item.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
