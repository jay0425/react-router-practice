import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams(); // 객체가 반환된다. 그안에는 id라는 키값이 있다. => 파라미터 값을 가져올 수 있다.
  console.log(id);
  return (
    <div>
      <h1>Show Product Detail {id}</h1>
    </div>
  );
};

export default ProductDetailPage;
