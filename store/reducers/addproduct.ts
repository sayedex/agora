import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from "../../services/productService"


export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (params: { productData: any}, { rejectWithValue }) => {
      try {
        const response = await productService.addProduct(params.productData);
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.response.data);
      }
    }
  );