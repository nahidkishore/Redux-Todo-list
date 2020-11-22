import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log(props);

 const {products,addToCart}=props;
  return (
    <div>
      <h3>This is a Shop</h3>

      {products.map((pd) => (
        <Product 
        product={pd}
        key={pd.id}
        addToCart={addToCart}
        ></Product>
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
