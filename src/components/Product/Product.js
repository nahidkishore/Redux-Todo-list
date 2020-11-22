import React from 'react';

const Product = (props) => {
  const {name,id}=props.product
  return (
    <div className="p-5" style={{border: '1px solid #ccc'}}>
      <h2>{name}</h2>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;