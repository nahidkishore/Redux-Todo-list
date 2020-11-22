import React from 'react';

const Product = (props) => {
  const {addToCart,product}=props;

  return (
    <div className="p-5" style={{border: '1px solid #ccc'}}>
      <h2>{product.name}</h2>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;