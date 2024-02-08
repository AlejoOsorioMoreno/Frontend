import React from 'react';
import HeaderHome from './HeaderHome';
import DefaultLayout from '../layout/DefaultLayout';
import Footer from './Footer';
import FrontPage from './FrontPage'
// import Services from './Services'
import About from './About';


const Home = () => {
  return (
    <div>
      <DefaultLayout/>
      <HeaderHome/>
      <FrontPage/>
      {/* <Services/> */}
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;