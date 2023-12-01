import { createStore } from 'redux';
import quizReducer from './reducers'; // Update path if necessary

const store = createStore(quizReducer);

export default store;