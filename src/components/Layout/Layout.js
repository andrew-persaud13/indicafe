import React from 'react';

import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import './Layout.css';

const Layout = (props) => {
  const renderLayout = () => (
    <div className='layout'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
