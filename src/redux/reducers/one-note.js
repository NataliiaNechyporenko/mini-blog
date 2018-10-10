import { combineReducers } from 'redux';
// import { GET_NOTES_FAIL, GET_NOTES_SUCCESS } from '../actions/notes';

function dataReducer(state = {}, { type, payload }) {
  switch (type) {
    case 'GET_NOTE_BY_ID_SUCCESS':
      return payload;
    default:
      return state;
    }
};

function loaderReducer(state = false, { type }) {
  switch (type) {
    case 'GET_NOTE_BY_ID_START':
    return true;
    case 'GET_NOTE_BY_ID_SUCCESS':
      return false;
    case 'GET_NOTE_BY_ID_FAIL':
      return true;
    default:
      return state;
    }
};

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case 'GET_NOTE_BY_ID_SUCCESS':
      return null;

    case 'GET_NOTE_BY_ID_FAIL':
      return payload;

    default:
      return state;
    }
};

export default combineReducers({
  data: dataReducer,
  loading: loaderReducer,
  error: errorReducer,
});
