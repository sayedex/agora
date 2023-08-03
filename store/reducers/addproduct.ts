import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from "../../services/productService"
import { ToastContainer, toast } from "react-toastify";

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (params: { productData: any}, { rejectWithValue }) => {
      try {
        const response = await productService.addProduct(params.productData);
        toast.success("Product added successfully")
        return response.data;
      } catch (error:any) {
        toast.error("something wrong");
        return rejectWithValue(error.response.data);
      }
    }
  );