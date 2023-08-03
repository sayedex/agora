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
    async (params:{wallet:string}, { rejectWithValue }) => {
        try {
            const response = await userService.getuser();
            const user = response.data
            return {user,wallet:params.wallet};

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getNFT = createAsyncThunk(
    "user/NFTbalance",
    async (_, { rejectWithValue }) => {
        try {
            const response = await userService.getNFT();
            console.log(response.data);
            return response.data;

        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

