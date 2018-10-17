import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const NotesListItem = ({ id, body, title, userId, match }) => (
  <div className={styles.note} >
    <Link to={{
      pathname: `${match.url}/${id}`,
      state: { userId: `${userId}`}
      }} className={styles.title_link}>
      <h2 className={styles.title} >{title}</h2>
    </Link>
    <p className={styles.note_body}>{body}</p>
    <Link to={{
        pathname: `${match.url}/${id}`,
        state: { userId: `${userId}`}
        }} className={styles.link}>Learn more...</Link>
  </div>
);

NotesListItem.defaultProps = {
  title: "Title",
  body: "It's must be an article",
  match: { url: ""}
}

NotesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  match: PropTypes.shape({}),
  title: PropTypes.string,
  body: PropTypes.string
}; 

export default NotesListItem;