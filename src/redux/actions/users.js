import axios from 'axios';
import { 
  GET_USERS_SUCCESS,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_START,
 } from './types';

const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsers = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(({data}) => dispatch(getUsersSuccess(data)));
};

const getUserByIdStart = () => ({
  type: GET_USER_BY_ID_START, 
});
    
const getUserByIdSuccess = user => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: user,
});
    
const getUserByIdFail = error => ({
  type: GET_USER_BY_ID_FAIL,
  payload: error,
});
    
export const getUserById = (id) => dispatch => {
  dispatch(getUserByIdStart());
  
  axios
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(({data}) => dispatch(getUserByIdSuccess(data)))
  .catch(err => dispatch(getUserByIdFail(err.response)));
};