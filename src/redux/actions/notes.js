import axios from 'axios';
import { GET_NOTES_SUCCESS, GET_NOTES_FAIL, GET_NOTES_START } from './types';

const getNotesStart = () => ({
  type: GET_NOTES_START, 
});

const getNotesSuccess = notes => ({
  type: GET_NOTES_SUCCESS,
  payload: notes,
});

const getNotesFail = error => ({
  type: GET_NOTES_FAIL,
  payload: error,
})

export const getNotes = () => dispatch => {
  dispatch(getNotesStart());
  
  axios
  .get('/posts')
  .then(({data, status}) => dispatch(getNotesSuccess(data)))
  .catch(err => dispatch(getNotesFail(err.response)));
};
