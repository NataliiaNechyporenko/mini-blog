import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesList from '../notes-list';
import { getNotes } from '../../redux/actions/notes';

class HomePage extends Component {
  static propTypes = {
    OnGetNotes: PropTypes.func,
    isLoading: PropTypes.bool
  };

  componentDidMount() {
    const { OnGetNotes } = this.props;
    OnGetNotes();
  }

  render() {
    const { isLoading } = this.props;

    return isLoading ? 'Loading' : <NotesList />}
  }

  HomePage.defaultProps = {
    OnGetNotes: () => {},
    isLoading: true
  };

  const mSTP = state => ({ isLoading: state.notes.loading });

  const mDTP = dispatch => ({ 
    OnGetNotes: () => dispatch(getNotes()),
   });

export default connect(mSTP, mDTP)(HomePage);
