import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

interface PoolsState {
  isRender: boolean;

}

const initialState: PoolsState = {
  isRender: false,

};

// Define the slice for pools data and token prices
const walletSlice = createSlice({
  name: "pools",
  initialState,
  reducers: {
    setRender: (state) => {
      state.isRender = true;
    },
  },
  extraReducers: (builder) => {

  },
});

export const { setRender } = walletSlice.actions;
export default walletSlice.reducer;
