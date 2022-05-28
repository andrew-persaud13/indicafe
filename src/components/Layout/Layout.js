import React from 'react';

import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import './Layout.css';

const Layout = ({ title, children, background, backdrop }) => {
  const renderLayout = () => (
    <div className='layout'>
      <Navbar />
      <Main title={title} background={background} backdrop={backdrop}>
        {children}
      </Main>
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
