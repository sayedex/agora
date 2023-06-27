import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

export const BuynftUser = createAsyncThunk(
    "user/buynft",
    async (params: { data: any }, { rejectWithValue }) => {
        try {
            const response = await userService.Buynft(params.data);
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

