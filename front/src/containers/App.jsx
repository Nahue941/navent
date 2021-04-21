import '../styles/global.scss';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Router from './routers/Router';
import { getUser } from '../state/user/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)


  useEffect(() => {
    if(!user) dispatch(getUser())
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
