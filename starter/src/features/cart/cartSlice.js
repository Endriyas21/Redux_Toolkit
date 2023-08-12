import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItems: (state, action) => {
      state.cartItems = cartItems.filter((item) => item.id !== action.payload);
    },
  },
});
export const { clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
