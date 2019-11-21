import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Container from '../Container/Container';

const MainLayout = ({children}) => (
  <div>
    <Header />
    <main>
      <Container>
        {children}
      </Container>
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
