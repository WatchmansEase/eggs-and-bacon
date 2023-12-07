import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice'; // Update path if necessary
import loginReducer from './Login/logInSlice';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    login: loginReducer,
  },
});

export default store;