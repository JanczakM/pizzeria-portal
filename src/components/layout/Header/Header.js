import React from 'react';
import './Header.scss';
import PageNav from '../PageNav/PageNav';

const Header = () => (
  <header className='header'>
    <div className='container'>
      <div className='header__wrapper'>
        <div className='logo'>
          <h1 className='logo__title'><span>Mamma</span>Mia!</h1>
          <h2 className='logo__subtitle'>the best homemade Italian food</h2>
        </div>
        <PageNav />
      </div>
    </div>
  </header>
);

export default Header;
