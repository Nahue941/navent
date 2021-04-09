import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';// Esto va a rutas del front
// import TestContainer from './OneTestContainer';//ruta privada
// import AllTestContainer from './AllTestsContainer';//ruta privada
import Footer from '../components/Footer';//no es una ruta
import Navbar from '../components/Navbar'; //no es una ruta
import styles from '../styles/app.module.css'; // aca va bien
// import Register from '../components/Register'; // es una ruta publica
// import Login from '../components/Login'; // esto es una ruta publica
// import NotFound from '../components/NotFound'; // ruta publica
// import Results from "../components/Results"; //ruta privada
import Router from './routers/Router'; // Componente de todas las rutas del front

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
