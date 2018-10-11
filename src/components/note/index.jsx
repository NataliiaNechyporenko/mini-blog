import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNoteById } from '../../redux/actions/notes';
import Comments from '../comments';
import UserInfo from '../userInfo';
import styles from './styles.module.scss';

const getIdFromProps = props => props.match.params.id;

class Note extends Component {
  static propTypes = {
    oneNote: PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
    getNoteById: PropTypes.func,
  };
 
  componentDidMount() {
    const id = getIdFromProps(this.props);

    this.props.getNoteById(id);
  }

  render () {
    const { oneNote } = this.props;

    return (
      <div className={styles.note_container}>
        <h1 className={styles.note_title}>{oneNote.title}</h1>
        <UserInfo userId={oneNote.userId} />
        <p className={styles.note_body}>{oneNote.body}</p>
        <Comments id={oneNote.id} />
      </div>
      

)}};


Note.defaultProps = {
  getNoteById: {},
  oneNote: {
    id: 0,
    userId: 0,
    title: 'Post title',
    body: 'No text',
  }
};

const mSTP = state => ({ 
  oneNote: state.oneNote.data,
});

const mDTP = { getNoteById };

export default connect(mSTP, mDTP)(Note);