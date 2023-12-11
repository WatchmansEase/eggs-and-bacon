import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './Quiz/quizSlice'; // Update path if necessary
import loginReducer from './Login/logInSlice';
import registerSlice from './Register/registerSlice';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    login: loginReducer,
    register: registerSlice,
  },
});

export default store;