import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main"

ReactDOM.render(
  <React.StrictMode>
    <h1>Hola ( ͡° ͜ʖ ͡°)</h1>
    <img
      src={'http://navent.com/es/wp-content/uploads/Navent-isologo.svg'}
    ></img>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
