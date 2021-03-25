import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main"
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import store from "./state/store"

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter >
    {/* <Main /> */}
    <h1>Hola</h1>
    </BrowserRouter>
  </React.StrictMode>
    </Provider>,
  document.getElementById('root'),
  );

  {/* <img
    src={'http://navent.com/es/wp-content/uploads/Navent-isologo.svg'}
  ></img> */}
