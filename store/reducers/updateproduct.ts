import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from "../../services/productService"


export const getupdateinfo = createAsyncThunk(
    'products/getinfo',
    async (params: { productId:string}, { rejectWithValue }) => {
      try {
        const response = await productService.getProduct(params.productId);
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.response.data);
      }
    }
  );


  export const updateProduct = createAsyncThunk(
    'products/updateproduct',
    async (params: { productId:string,productData: any}, { rejectWithValue }) => {
      try {
        const response = await productService.updateProduct(params.productId,params.productData);
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.response.data);
      }
    }
  );