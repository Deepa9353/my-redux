import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import cartCountReducer  from "./cartCountSlice";

const Store = configureStore({
  reducer: {
    // cart: cartReducer,
    cartCount:cartCountReducer,
  },
});
 
export default Store;
