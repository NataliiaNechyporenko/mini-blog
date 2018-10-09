import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Panel from '../shared/panel'
import Note from '../note';
import Message from '../shared/message';
import { getFilteredPosts } from '../../utils/selectors';
import styles from './styles.module.scss';

const NotesList = ({ notes, users }) => (
  <div className={styles.list}>
      {notes.length === 0 ?
      (<Message msg='There is no notes!' />)
      : (notes.map(note => (
          <Panel key={note.id} title={ note.title }>
              <Note {...note} author={users.find(user => user.id === note.userId)} />
          </Panel>)
      ))
    }
  </div>
);

NotesList.defaultProps = {
  notes: [],
  users: [],
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    }).isRequired,
  ),

  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      website: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({}),
      company: PropTypes.shape({})
    }))
};

const mSTP = state => ({
  notes: getFilteredPosts(state.notes.data, state.searchValue),
  users: state.users
})

export default connect(mSTP)(NotesList);
