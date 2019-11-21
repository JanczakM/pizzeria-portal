import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({children}) => (
  <div className='main_container'>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
