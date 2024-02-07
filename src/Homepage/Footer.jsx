import React from 'react';
import './StyleHome/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <hr />
        
        <div className="info">
          <div className="copyrigth">
            <p>&copy; MULTISERVICIOS COMPANY</p>
          </div>
          <div className="social">
            <div className="media">
              <img src="#" className="redes" />
              <img src= "#"  className="redes" />
              <img src="#" className="redes" />
              <img src="#" className="redes" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
