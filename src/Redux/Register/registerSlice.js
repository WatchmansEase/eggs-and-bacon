import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    listings: [],
  },
  reducers: {
    setRegister(state, action) {
      state.listings = action.payload;
    },
  },
});

export const { setRegister } = registerSlice.actions;
export default registerSlice.reducer;