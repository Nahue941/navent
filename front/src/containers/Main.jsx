import React from 'react';
// import styles from '../'; arreglar import de css modules
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from '../components/Navbar';


const Main = () => {
  return (
    <div>
      <Navbar />
      <App />

    </div>
  );
};

export default Main;
