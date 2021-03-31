import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from './OneTestContainer';
import AllTestContainer from './AllTestsContainer';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/app.module.css';
import Login from '../components/Login';

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
          <Route path="/login" component={Login} />
          <Route path="/404" render={() => <div className={styles.error}>Página no encontrada</div>} />
          <Redirect to="/404" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
