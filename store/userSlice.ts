import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getuserlogin, getuserMe } from "./reducers/userlogin";

interface balance {
  amount:number,
  token:token
}
interface token{
  decimal:number
  name:string
  address:string
}

interface userState {
  issignIn: boolean;
  isActive: boolean;
  loading: "idle" | "pending" | "done" | "error";
  user:{
    balances:balance[],
    wallet:string,
  } | null

}

const initialState: userState = {
  issignIn: false,
  isActive: false,
  loading: "idle",
  user:null
};

// Define the slice for pools data and token prices
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setwallet: (state) => {
      state.isActive = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuserlogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getuserlogin.fulfilled, (state, action) => {
        state.loading = "done";
        if (action.payload.success == true) {
          state.issignIn = true;
        } else {
          state.issignIn = false;
        }
      })
      .addCase(getuserlogin.rejected, (state, action) => {
        state.loading = "error";
      }),
      builder
      .addCase(getuserMe.pending, (state) => {
        state.loading = "pending";
      
      })
      .addCase(getuserMe.fulfilled, (state, action) => {
        state.loading = "done";
        console.log(action.payload);
        
        if (action.payload.success == true) {
          state.isActive = true;
          state.user = action.payload.user;
        } else {
          state.isActive = false;
        }
      })
      .addCase(getuserMe.rejected, (state, action) => {
        state.loading = "error";
      })
  },
});

export const { setwallet } = userSlice.actions;
export default userSlice.reducer;
