import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});
