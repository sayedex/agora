import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

export const getuserlogin = createAsyncThunk(
    "user/login",
    async (params: { info: any }, { rejectWithValue }) => {
        try {
            const response = await userService.login(params.info);
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const getuserMe = createAsyncThunk(
    "user/me",
    async (_, { rejectWithValue }) => {
        try {
            const response = await userService.getuser();
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

