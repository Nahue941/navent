import React from 'react';
// import styles from '../'; arreglar import de css modules
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <App />
      <Footer />
    </div>
  );
};

export default Main;
