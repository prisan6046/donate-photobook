import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import Router from './route'

const AppWithRouter = () => (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )


ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

serviceWorker.unregister();
