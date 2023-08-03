import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { addProduct } from "./reducers/addproduct";
import { getupdateinfo,updateProduct } from "./reducers/updateproduct";
import { getproductALL,getfeaturedproduct } from "./reducers/product";



export interface product{
  name: string;
  productid: number;
  minted: number;
  description: string;
  imgUrl: string;
  maxmint: number;
  Type: string;
  _id: string;
  rarity:"SecretRare" | "Uncommon" | "UltraRare" | "Rare" | "Common";
  series: string;
  character: string;
  mint: string;
  value:number
  USD:number,
  featured:boolean
    paymentTokens?:[{
    name:string,
    id:string,
    price:number
  }]
}


interface productState {
  isRender: boolean;
  loading: "idle" | "pending" | "done" | "error";
  addproductLoad: "idle" | "pending" | "done" | "error";
  loadbuypageProduct:"idle" | "pending" | "done" | "error";
  error: any;
  product: product | null
  productfeatured: product[] | []
  allproduct:product[] | []
}

const initialState: productState = {
  isRender: false,
  loading: "idle",
  error: null,
  product: null,
  addproductLoad:'idle',
  allproduct:[],
  productfeatured:[],
  loadbuypageProduct:'idle'
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
        state.addproductLoad = "pending";
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.addproductLoad = "done";
        // state.products.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.addproductLoad = "error";
        state.error = action.payload;
      }),
      builder
      .addCase(getupdateinfo.pending, (state) => {
         state.loadbuypageProduct = "pending";
        state.error = null;
      })
      .addCase(getupdateinfo.fulfilled, (state, action) => {
         state.loadbuypageProduct = "done";
       state.product =action.payload.product;

      })
      .addCase(getupdateinfo.rejected, (state, action) => {
       state.loadbuypageProduct = "error";
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
      }),
      builder
      .addCase(getfeaturedproduct.pending, (state) => {
       state.loading = "pending";
        
        state.error = null;
      })
      .addCase(getfeaturedproduct.fulfilled, (state, action) => {
       state.loading = "done";
       state.productfeatured =action.payload.product;
        
      })
      .addCase(getfeaturedproduct.rejected, (state, action) => {
         state.loading = "error";
        state.error = action.payload;
      });

  },
});

export const { setRender } = productSlice.actions;
export default productSlice.reducer;
