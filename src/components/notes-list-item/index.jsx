import React from "react";
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import styles from './styles.module.scss';

const NotesListItem = ({ id, body, userId, author, match }) => (
  <div className={styles.note} >
    <p className={styles.autor}>{author.username}</p>
    <p className={styles.note_body}>{body}</p>
    <div className={styles.link_btn}>
      <Link to={{
        pathname: `${match.url}/${id}`,
        state: { userId: `${userId}`}
        }}>Learn more...</Link>
    </div>
  </div>
);

NotesListItem.defaultProps = {
  body: "Title Content",
  author: {},
  match: { url: ""}
}

NotesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  match: PropTypes.shape({}),
  body: PropTypes.string,
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({}),
    company: PropTypes.shape({})
  }),
}; 

export default NotesListItem;