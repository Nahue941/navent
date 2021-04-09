import '../styles/global.scss';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Router from './routers/Router';

const App = () => {
  return (
    <>
      <Navbar />
        <div className={styles.bodygit}>
            <Router/>          
        </div>
      <Footer />
    </>
  );
};

export default App;
