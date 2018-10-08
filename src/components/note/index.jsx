import React from "react";
import PropTypes from 'prop-types';
// import { PersonAdd, DeleteForever, Info, Delete } from '@material-ui/icons';
// import IconButton from '../shared/IconButton';
import styles from './styles.module.scss';

const Note = ({ title, body, userId }) => (
  <div className={styles.note} >
    <h2 className={styles.note_title}>{title}</h2>
    <p className={styles.autor}>{userId}</p>
    <p className={styles.note_body}>{body}</p>
  </div>
);

Note.defaultProps = {
  title: "Note title",
  body: "Title Content",
}

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  // id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
}; 

export default Note;