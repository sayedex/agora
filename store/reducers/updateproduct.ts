import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from "../../services/productService"

import { ToastContainer, toast } from "react-toastify";


export const getupdateinfo = createAsyncThunk(
    'products/getinfo',
    async (params: { productid:any}, { rejectWithValue }) => {
      try {
        const response = await productService.getProduct(params.productid);
        console.log("res",response);
        
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
        toast.success("Product changed successfully");
        return response.data;

      } catch (error:any) {
        toast.error("something wrong");
        return rejectWithValue(error.response.data);
      }
    }
  );