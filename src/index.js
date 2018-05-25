import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import routes from './route-config';

let history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.getElementById('root'));
registerServiceWorker();
