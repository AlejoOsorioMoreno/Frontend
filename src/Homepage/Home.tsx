
import HeaderHome from './HeaderHome';
import DefaultLayout from '../layout/DefaultLayout';
import Footer from './Footer';
import FrontPage from './FrontPage'
import Advertising from './Advertising'
import Job from './Job'
import About from './About';


const Home = () => {
  return (
    
      <DefaultLayout>
      <HeaderHome/>
      <FrontPage/>
      <About/>
      <Advertising/>
      <Job/>
      <Footer/>
     </DefaultLayout>
  );
};

export default Home;