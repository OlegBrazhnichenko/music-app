import React from 'react'

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { CssBaseline } from '@material-ui/core'
import Pages from './pages'

const store = configureStore();
const history = createBrowserHistory();

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <Provider store={store}>
        <Router history={history}>
          <Pages />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
