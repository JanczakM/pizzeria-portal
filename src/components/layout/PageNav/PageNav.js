import React from 'react';
import {NavLink} from 'react-router-dom';
import './PageNav.scss';

const PageNav = () => (
  <nav className='main-nav'>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
  </nav>
);

export default PageNav;
