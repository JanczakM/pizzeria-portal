import React from 'react';
import styles from './OrderId.scss';

const OrderId = ({id}) => (
  <div className={styles.component}>
    <h2>OrderId</h2>
    <h3>id: {id}</h3>
  </div>
);

OrderId.propTypes = {

};

export default OrderId;
