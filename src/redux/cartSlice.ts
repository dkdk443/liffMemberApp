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
        const targetItem = state.items.find(item => item.id === action.payload.id);

        const beforeQuantity = targetItem ? targetItem.quantity : 1;
        const addQuantity = Number(action.payload.quantity);
        const newQuantity = beforeQuantity + addQuantity;

        const updatedItem = { ...action.payload, quantity: newQuantity }

        const updatedItems = state.items.map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        })
        state.items = updatedItems;
      } else {
        state.items.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  }
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
