import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Homepage</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
      <button onClick={goToHomepage}>Go to homepage</button>
    </div>
  );
};

export default Aboutpage;
