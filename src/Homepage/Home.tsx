import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Footer from './Footer';
import FrontPage from './FrontPage';
import About from './About';
import Advertising from './Advertising';

const Home = () => {
  return (
    <div>
      <DefaultLayout/>
      <FrontPage/>
      <About/>
      <Advertising/>
      <Footer/>
    </div>
  );
};

export default Home;