import React from 'react';
// import styles from '../'; arreglar import de css modules
import { Route, Switch } from 'react-router-dom';
import App from './App';

const Main = () => {
  return (
    <div>
      <h1>Hola ( ͡° ͜ʖ ͡°)</h1>
      <img
        src={'http://navent.com/es/wp-content/uploads/Navent-isologo.svg'}
      ></img>

      <App/>
    </div>
  );
};

export default Main;
