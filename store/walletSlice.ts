import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

interface PoolsState {
  isRender: boolean;
  Buypopup: boolean;
  Platformpopup:boolean,
  DepositPopup:boolean
}

const initialState: PoolsState = {
  isRender: false,
  Buypopup: false,
  Platformpopup:false,
  DepositPopup:false
};

// Define the slice for pools data and token prices
const walletSlice = createSlice({
  name: "pools",
  initialState,
  reducers: {
    setRender: (state) => {
      state.isRender = true;
    },
    setBuypopup: (state, action) => {
      state.Buypopup = action.payload;
    },
    setPlatformpopip:(state, action)=>{
      state.Platformpopup = action.payload;
    },
    setDepositPopup:(state,action) =>{
      state.DepositPopup = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { setRender,setBuypopup ,setPlatformpopip,setDepositPopup} = walletSlice.actions;
export default walletSlice.reducer;
