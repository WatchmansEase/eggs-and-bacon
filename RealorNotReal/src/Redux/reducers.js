import { CHANGE_SCORE, RESET_GAME } from './actions';

// setting initial state
const initialState = {
  screen: "/intro",
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload, // Update score
      };
    case RESET_GAME:
      return {
        ...state,
        score: 0,
        screen: "/intro",
      }
    default:
      return state;
  }
};

export default quizReducer;