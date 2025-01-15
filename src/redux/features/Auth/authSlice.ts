import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TUsers = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuthSlice = {
  user: null | TUsers;
  token: null | string;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
