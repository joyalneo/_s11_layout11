import React, { useState, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import Logo from '../../assets/img/logo.svg';
import avatarIcon from '../../assets/img/prof.svg';
import { shield } from 'blox-js-sdk';

const Header = (props) => {
  const [profDropdown, setProfDropdown] = useState(false);
  const profDropContainer = useOnclickOutside(() => {
    setProfDropdown(false);
  });

  const signOut = async () => {
    setProfDropdown(false);
    await shield.logout();
  };

  return (
    <header className='fixed top-0 left-0 z-[99] w-full border-b border-[#D1D5DA] bg-white'>
      <div className='w-full px-4 md:px-8'>
        <div className='flex h-[72px] w-full items-center justify-between py-2'>
          <div className='flex items-center'>
            <a className='flex items-center'>
              <img src={Logo}></img>
              <span className='pl-2 text-base font-bold'>Hiring App</span>
            </a>
          </div>
          <div className='flex items-center'>
            <div className='relative ml-6' ref={profDropContainer}>
              <img
                onClick={() => setProfDropdown(!profDropdown)}
                className={`max-h-[48px] max-w-[48px] cursor-pointer rounded-full border transition-all duration-100 ${
                  profDropdown ? 'border-[#0C5DFF]' : 'hover:border-[#0C5DFF]'
                }`}
                src={avatarIcon}
                width='48px'
                height='48px'
                alt='Profile'
              ></img>
              <div
                className={`absolute top-14 right-0 z-10 ${
                  profDropdown ? '' : 'hidden'
                }`}
              >
                <div className='border-primary float-left min-w-[180px] overflow-hidden rounded-lg border-2 bg-white shadow shadow-white'>
                  <div className='float-left w-full px-4 py-2 text-sm'>
                    <p className='font-normal'>Signed in as</p>
                    <p className='font-semibold'>esther@neoito.com</p>
                  </div>
                  <div className='float-left w-full text-sm'>
                    <ul>
                      <li className='border-primary flex w-full border-t text-xs font-semibold'>
                        <button
                          onClick={() => signOut()}
                          className='w-full px-4 py-3 hover:bg-[#F6F8FA]'
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
