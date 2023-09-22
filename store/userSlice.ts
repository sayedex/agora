import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getuserlogin, getuserMe,getNFT } from "./reducers/userlogin";
import { BuynftUser } from "./reducers/buy";
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
  nftloading: "idle" | "pending" | "done" | "error";
  buyloading:"idle" | "pending" | "done" | "error";
  user:{
    balances:balance[],
    wallet:string,
    role:string
  } | null

  nftBalance:[]

}

const initialState: userState = {
  issignIn: false,
  isActive: false,
  loading: "idle",
  nftloading:'idle',
  buyloading:'idle',
  user:null,
  nftBalance:[]
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
        if (action.payload.success == true ) {
          state.issignIn = true;
          console.log("update");
          
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
        
        if (action.payload.user.success == true && action.payload.wallet ==  action.payload.user.user.wallet) {
          state.isActive = true;
          state.user = action.payload.user.user;
        } else {
          state.isActive = false;
        }
      })
      .addCase(getuserMe.rejected, (state, action) => {
        state.loading = "error";
      }),
      builder
      .addCase(getNFT.pending, (state) => {
        state.nftloading = "pending";
      })
      .addCase(getNFT.fulfilled, (state, action) => {
        state.nftloading = "done";
       state.nftBalance = action.payload.nft
        
      
      })
      .addCase(getNFT.rejected, (state, action) => {
        state.nftloading = "error";
      }),
      builder
      .addCase(BuynftUser.pending, (state) => {
        state.buyloading = 'pending';
      })
      .addCase(BuynftUser.fulfilled, (state, action) => {
        state.buyloading = "done";
      })
      .addCase(BuynftUser.rejected, (state, action) => {
        state.buyloading = 'error';
      })
  },
});

export const { setwallet } = userSlice.actions;
export default userSlice.reducer;
