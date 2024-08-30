import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/Shopcarslice";

export const store = configureStore({
    reducer:{
        cart: CartSlice
    }
});