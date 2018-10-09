import axios from 'axios';
import { GET_USERS_SUCCESS } from './types';

const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users
})

export const getUsers = () => dispatch => {
  axios.get('/users')
  .then(({data, status}) => dispatch(getUsersSuccess(data)));
    };
