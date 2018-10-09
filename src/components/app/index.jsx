import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '../app-bar';
import NotesList from '../notes-list';
import { getNotes } from '../../redux/actions/notes';
import { getUsers } from '../../redux/actions/users';
import styles from './styles.module.scss';

class App extends Component {


  componentDidMount() {
    this.props.getNotes();
    this.props.getUsers();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.app}>
        <AppBar titleText="My mini blog" />
        <main className={styles.contant_container}>
        {isLoading ? 'Loading' : <NotesList />}
        </main>
      </div>
    );
  }
}

export default connect(state => ({ isLoading: state.notes.loading }), { getNotes, getUsers })(App);
