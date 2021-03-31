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
      <div className={styles.body}>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/test" />
          <Route
            path="/test/:id"
            render={({ match }) => <TestContainer id={match.params.id} />}
          />
          <Route path="/test" render={() => <AllTestContainer />} />
          <Route exact path="/" render={() => <div>Inicio</div>} />
          <Route path="/login" component={Login} />
          <Route path="/404" render={() => <div>Página no encontrada</div>} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
