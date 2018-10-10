import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesList from '../notes-list';
import { getNotes } from '../../redux/actions/notes';
import { getUsers } from '../../redux/actions/users';

class HomePage extends Component {

  componentDidMount() {
    this.props.getNotes();
    this.props.getUsers();
  }

  render() {
    const { isLoading } = this.props;

    return isLoading ? 'Loading' : <NotesList />}
  }

  const mSTP = state => ({ isLoading: state.notes.loading });
  const mDTP = { getNotes, getUsers };

export default connect(mSTP, mDTP)(HomePage);
