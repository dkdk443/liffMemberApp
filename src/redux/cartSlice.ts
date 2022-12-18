import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../@types/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItem[],
  },
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      if (state.items.some(item => item.id === action.payload.id)) {
        const newQuantity = Number(action.payload.quantity);
        const updatedItem = { ...action.payload, ...{ quantity: newQuantity + 1 } }
        state.items = [...state.items];
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  }
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
