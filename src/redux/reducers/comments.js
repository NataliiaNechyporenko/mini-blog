
import { combineReducers } from 'redux';
// import { GET_COMMENTS_FAIL, GET_COMMENTS_SUCCESS } from '../actions/COMMENTS';

function dataReducer(state = [], { type, payload }) {
  switch (type) {
    case 'GET_COMMENTS_SUCCESS':
      return payload;
    default:
      return state;
    }
};

function loaderReducer(state = false, { type }) {
  switch (type) {
    case 'GET_COMMENTS_START':
    return true;
    case 'GET_COMMENTS_SUCCESS':
      return false;
    case 'GET_COMMENTS_FAIL':
      return true;
    default:
      return state;
    }
};

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case 'GET_COMMENTS_SUCCESS':
      return null;

    case 'GET_COMMENTS_FAIL':
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