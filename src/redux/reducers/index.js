import { combineReducers } from 'redux';
import notesReducer from './notes';
import searchReducer from './search';
import usersReducer from './users';

const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
  searchValue: searchReducer
});

export default rootReducer;