import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Menu from './Menu/Menu';

const LandingPage = () => {
  const renderLandingPage = () => (
    <Layout title='Savour our Delicasies' background backdrop>
      <section style={{ color: 'var(--primary-white)' }}>
        <h1
          style={{ color: 'var(--primary-orange)', fontFamily: 'Roboto Bold' }}
        >
          DrewCaf&egrave;
        </h1>
        <p>
          <button
            className='btn btn-warning'
            style={{
              padding: '5px 20px',
              fontWeight: 'bold',
              margin: '3px 10px',
            }}
          >
            <Link style={{ color: 'inherit' }} to='/browse'>
              Explore
            </Link>
          </button>{' '}
          our offers and enjoy the food!
        </p>
        <p>Home Deliveries under 30 minutes.</p>
      </section>
      <Menu />
    </Layout>
  );

  return <>{renderLandingPage()}</>;
};

export default LandingPage;
