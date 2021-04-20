import '../styles/global.scss';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Router from './routers/Router';
import { getUser } from '../state/user/actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <>
      <Navbar />
        <div className="body">
            <Router/>          
        </div>
      <Footer />
    </>
  );
};

export default App;
