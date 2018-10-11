import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../app-bar';
import HomePage from '../pages/home';
// import PostPage from '../pages/post';
import Note from '../note';
import NotFoundPage from '../pages/not-found';
import styles from './styles.module.scss';

const App = () => (
  <div className={styles.app}>
    <AppBar titleText="My mini blog" />
    <main className={styles.contant_container}>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/:id" component={Note} />
        <Route component={ NotFoundPage } />
      </Switch>
    </main>
  </div>
);

export default App;
