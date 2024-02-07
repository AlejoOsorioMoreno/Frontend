import React from 'react';
import HeaderHome from './HeaderHome';
import DefaultLayout from '../layout/DefaultLayout';
import Footer from './Footer';
import FrontPage from './FrontPage'
import Services from './Services'


const Home = () => {
  return (
    <div>
      <DefaultLayout/>
      <HeaderHome/>
      <FrontPage/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Home;