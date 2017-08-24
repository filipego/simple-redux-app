import { combineReducers } from 'redux';
import movies from './movies_reducer'

const roothReducer = combineReducers({
  movies
});

export default roothReducer;
