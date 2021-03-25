import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./containers/Main"
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter> 
    <h1>Hola ( ͡° ͜ʖ ͡°)</h1>
    <img
      src={'http://navent.com/es/wp-content/uploads/Navent-isologo.svg'}
    ></img>
    <Main />
    <Route path="/" component={Main}/>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root'),
);
