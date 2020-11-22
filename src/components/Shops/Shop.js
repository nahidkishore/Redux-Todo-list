import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const Shop = () => {
  const products = [
    { name: "Lenovo Laptop", id: 1 },
    { name: "Assus Laptop", id: 2 },
    { name: "Dell Laptop", id: 3 },
    { name: "Samsung Laptop", id: 4 },
    { name: "HP Laptop", id: 5 },
  ];
  return (
    <div>
      <h3>This is a Shop</h3>

      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToPros = {
  addToCart: addToCart,
};

/* const connectToStore =connect(mapStateToProps,mapDispatchToPros);
connectToStore(Shop); */

export default connect(mapStateToProps, mapDispatchToPros)(Shop);
