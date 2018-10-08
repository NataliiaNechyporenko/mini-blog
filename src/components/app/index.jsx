import React, { Component } from 'react';
import axios from 'axios';
import AppBar from '../app-bar';
import NotesList from '../notes-list';
// import { getFilteredPosts } from '../../utils/selectors.js';
import styles from './styles.module.scss';

const INITIAL_STATE = {
  posts: [],
  visiblePosts: []
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    axios.get('/posts')
        .then(({data, status}) => {
            if (status === 200) {
                this.setState({
                    posts: data,
                    visiblePosts: data
                })
            }
    });
};

searchByName = (evt) => {
    const value = evt.target.value;
    this.setState({
        searchValue: value
    });
};


  render() {
    const { searchValue, visiblePosts, posts } = this.state;
        
    // const filteredPosts = getFilteredPosts(visiblePosts, searchValue);


    return (
      <div className={styles.app}>
        <AppBar cls={styles.searchInput}                         placeholder="Search by name" search={this.searchByName} searchValue={searchValue}/>
        <NotesList notes={posts} />
      </div>
    );
  }
}

export default App;
