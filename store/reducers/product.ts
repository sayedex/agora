import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";

export const getproductALL = createAsyncThunk(
    "product/getproductALL",
    async (_, { rejectWithValue }) => {
        try {
            const response = await productService.getproductALL();
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getfeaturedproduct = createAsyncThunk(
    "product/getfeaturedproduct",
    async (_, { rejectWithValue }) => {
        try {
            const response = await productService.getfeaturedproduct();
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

