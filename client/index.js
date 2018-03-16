import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadMembers } from './actions/membersAction';
import App from './components/App';

import './scss/App.scss';

const store = configureStore();
store.dispatch(loadMembers());

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
