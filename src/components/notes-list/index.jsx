import React from "react";
import PropTypes from 'prop-types';
import Panel from '../shared/panel'
import Note from '../note';
import Message from '../shared/message';
import styles from './styles.module.scss';

const NotesList = ({ notes, ...rest }) => (
  <div className={styles.list}>
      {notes.length === 0 ?
      (<Message msg='There is no Heroes!' />)
      : (notes.map(note => (
          <Panel key={note.id} >
              <Note {...note} {...rest} />
          </Panel>)
      ))
    }
  </div>
);

NotesList.defaultProps = {
  notes: []
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
};

export default NotesList;