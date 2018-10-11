import axios from 'axios';
import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_START
} from './types';

const getCommentsStart = () => ({
  type: GET_COMMENTS_START, 
});

const getCommentsSuccess = comments => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});

const getCommentsFail = error => ({
  type: GET_COMMENTS_FAIL,
  payload: error,
})

export const getComments = (id) => dispatch => {
  dispatch(getCommentsStart());
  
  axios
  .get(`/posts/${id}/comments`)
  .then(({data}) => dispatch(getCommentsSuccess(data)))
  .catch(err => dispatch(getCommentsFail(err.response)));
};