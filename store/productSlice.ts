import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { addProduct } from "./reducers/addproduct";
import { getupdateinfo,updateProduct } from "./reducers/updateproduct";
import { getproductALL } from "./reducers/product";

export interface product{
  name: string;
  productid: number;
  minted: number;
  description: string;
  imgUrl: string;
  maxmint: number;
  Type: string;
  _id: string;
  rarity: string;
  series: string;
  character: string;
  mint: string;
  value:number
}


interface productState {
  isRender: boolean;
  loading: "idle" | "pending" | "done" | "error";
  error: any;
  product: product | null
  allproduct:product[] | []
}

const initialState: productState = {
  isRender: false,
  loading: "idle",
  error: null,
  product: null,
  allproduct:[]
};

// Define the slice for pools data and token prices
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setRender: (state) => {
      state.isRender = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = "done";
        // state.products.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.payload;
      }),
      builder
      .addCase(getupdateinfo.pending, (state) => {
        // state.loading = "pending";
        state.error = null;
      })
      .addCase(getupdateinfo.fulfilled, (state, action) => {
        // state.loading = "done";
       state.product =action.payload.product;
        console.log(action.payload);
      })
      .addCase(getupdateinfo.rejected, (state, action) => {
        // state.loading = "error";
        state.error = action.payload;
      }),
      builder
      .addCase(updateProduct.pending, (state) => {
       state.loading = "pending";
        
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
       state.loading = "done";
       state.product =action.payload.product;
        
      })
      .addCase(updateProduct.rejected, (state, action) => {
         state.loading = "error";
        state.error = action.payload;
      }), builder
      .addCase(getproductALL.pending, (state) => {
       state.loading = "pending";
        
        state.error = null;
      })
      .addCase(getproductALL.fulfilled, (state, action) => {
       state.loading = "done";
       state.allproduct =action.payload.product;
        
      })
      .addCase(getproductALL.rejected, (state, action) => {
         state.loading = "error";
        state.error = action.payload;
      });

  },
});

export const { setRender } = productSlice.actions;
export default productSlice.reducer;
