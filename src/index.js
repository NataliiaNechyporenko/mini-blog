import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app';
import store from './redux/store';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/build" >
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
