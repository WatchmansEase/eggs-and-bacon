import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen: "/intro",
  score: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    changeScore: (state, action) => {
      state.score = action.payload;
    },
    resetGame: (state, action) => {
      state.score = 0;
      state.screen = action.payload;
    },
  },
});

export const { changeScore, resetGame } = quizSlice.actions;
export default quizSlice.reducer;