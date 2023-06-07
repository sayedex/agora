import { configureStore } from '@reduxjs/toolkit';
import walletSlice from "./walletSlice";
import Addproduct from "./productSlice";
import userSlice from "./userSlice"
const store = configureStore({
    reducer: {
        wallet:walletSlice,
        product:Addproduct,
        user:userSlice

    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch