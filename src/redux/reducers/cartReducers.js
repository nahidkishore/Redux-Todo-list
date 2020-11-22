import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";


const initialState = {
  cart: [],
  products: [{ name: "Lenovo Laptop", id: 1 },
  { name: "Assus Laptop", id: 2 },
  { name: "Dell Laptop", id: 3 },
  { name: "Samsung Laptop", id: 4 },
  { name: "HP Laptop", id: 5 },],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.id],
        products: state.products,
      };
    /* const newId = action.id;
      const newCart=[...state.cart, newId];
      return {cart:newCart}; */

    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item !== id);
      return { cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducers;
