import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      const {user, jwt} = action.payload;
      state.user = user;
      state.jwt = jwt;
    },
  },
})

export const { login } = authSlice.actions

export default authSlice.reducer
