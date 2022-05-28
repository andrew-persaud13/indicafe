import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.css';

const Footer = () => {
  const renderFooter = () => (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center flex-wrap'>
          <section className='col-md-4 footer-column'>
            <p>iC - A Food Delivery Startup</p>
            <p>Copyright &copy; 2022</p>
          </section>
          <section className='col-md-4 footer-column'>
            <ul>
              <li>
                <a href='/delivery'>Delivery</a>
              </li>
              <li>
                <a href='/returns'>Returns</a>
              </li>
              <li>
                <a href='/support'>Support</a>
              </li>
            </ul>
          </section>
          <section className='col-md-4 footer-column'>
            <div>
              <a href='git#'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>
              <a href='fb#'>
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
              <a href='twt#'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
              <a href='lnk#'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
  return <>{renderFooter()}</>;
};

export default Footer;
