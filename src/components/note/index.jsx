import React from "react";
import PropTypes from 'prop-types';
// import { PersonAdd, DeleteForever, Info, Delete } from '@material-ui/icons';
// import IconButton from '../shared/IconButton';
import styles from './styles.module.scss';

const Note = ({ body, author }) => (
  <div className={styles.note} >
    <p className={styles.autor}>{author.username}</p>
    <p className={styles.note_body}>{body}</p>
  </div>
);

Note.defaultProps = {
  body: "Title Content",
  author: {},
}

Note.propTypes = {
  body: PropTypes.string,
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({}),
    company: PropTypes.shape({})
  }),
}; 

export default Note;