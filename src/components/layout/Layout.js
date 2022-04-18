import React, { useState } from 'react';
import Header from '../header/Header.js';
import './layout.scss';

const Layout = (props) => {
  const { children, shield } = props;

  return (
    <div className={`float-left flex min-h-screen w-full overflow-x-hidden`}>
      <Header />
      <div className='float-left min-h-full w-full pt-[72px]'>
        <div className='clearfix mx-auto max-w-[1380px] px-4 md:px-8'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
