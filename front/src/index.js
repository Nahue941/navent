import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./state/store";
import Main from './containers/Main';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
  );
