import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Productpage = () => {
  let [query, setQeury] = useSearchParams();
  console.log(query.get('q'));
  return (
    <div>
      <h1>Show All Products!!</h1>
    </div>
  );
};

export default Productpage;
