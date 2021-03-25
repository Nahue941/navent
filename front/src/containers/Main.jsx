import React from 'react';
import styles from '../';
import { Route, Switch} from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Test css module</h1>
      <Switch>
        <Route path="/" render={() => <App/>}/>
      </Switch>
    </div>
  );
};

export default Main;
