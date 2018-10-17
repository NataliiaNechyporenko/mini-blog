import { combineReducers } from 'redux';
import notesReducer from './notes';
import searchReducer from './search';
import userReducer from './user';
import oneNoteReducer from './one-note';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  notes: notesReducer,
  user: userReducer,
  searchValue: searchReducer,
  oneNote: oneNoteReducer,
  comments: commentsReducer,
});

export default rootReducer;