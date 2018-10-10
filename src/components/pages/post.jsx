import React from 'react';
import { Route } from 'react-router-dom';
import Note from '../note';

const PostPage = () => (
  <Route path="/:id" component={Note} />
);

export default PostPage;