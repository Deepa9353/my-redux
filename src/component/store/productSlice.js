import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    items:[],
    status:null,
 };
 const productSlice = createSlice({
    name:"product",
    initialState,
    reducer:{}
});
export default productSlice.reducer;