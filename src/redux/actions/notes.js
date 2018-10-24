import axios from 'axios';

import {
  GET_NOTES_SUCCESS,
  GET_NOTES_FAIL,
  GET_NOTES_START,
  GET_NOTE_BY_ID_SUCCESS,
  GET_NOTE_BY_ID_FAIL,
  GET_NOTE_BY_ID_START,
} from './types';

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
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(({data}) => dispatch(getNotesSuccess(data)))
  .catch(err => dispatch(getNotesFail(err.response)));
};

const getNoteByIdStart = () => ({
  type: GET_NOTE_BY_ID_START, 
});

const getNoteByIdSuccess = note => ({
  type: GET_NOTE_BY_ID_SUCCESS,
  payload: note,
});

const getNoteByIdFail = error => ({
  type: GET_NOTE_BY_ID_FAIL,
  payload: error,
})

export const getNoteById = (id) => dispatch => {
  dispatch(getNoteByIdStart());
  
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(({data}) => dispatch(getNoteByIdSuccess(data)))
  .catch(err => dispatch(getNoteByIdFail(err.response)));
};