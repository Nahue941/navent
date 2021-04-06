import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';// Esto va a rutas del front
import TestContainer from './OneTestContainer';//ruta privada
import AllTestContainer from './AllTestsContainer';//ruta privada
import Footer from '../components/Footer';//no es una ruta
import Navbar from '../components/Navbar'; //no es una ruta
import styles from '../styles/app.module.css'; // aca va bien
import Register from '../components/Register'; // es una ruta publica
// import Login from '../components/Login'; // esto es una ruta publica
import NotFound from '../components/NotFound'; // ruta publica
import Results from "../components/Results" //ruta privada

import PublicRoute from './routers/PublicRoute'; // Componente de todas las rutas del front

const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <Switch>
          <Redirect exact from="/" to="/test" />
          <Route
            path="/test/:id"
            render={({ match }) => <TestContainer id={match.params.id} />}
          />
          <Route path="/test" render={() => <AllTestContainer />} />
          <Route exact path="/" render={() => <div>Inicio</div>} />
          <PublicRoute/>
          <Route path="/results/:id" render={() => <Results />} />
          <Route path="/register" component={Register} />
          <Route path="/404" render={() => <NotFound />} />
          <Redirect to="/404" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
