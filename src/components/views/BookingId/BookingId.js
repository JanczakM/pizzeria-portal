import React from 'react';
import styles from './BookingId.scss';

const BookingId = (props) => (
  <div className={styles.component}>
    <h2>Booking</h2>
    <h3>id: {props.match.params.id}</h3>
  </div>
);

BookingId.propTypes = {

};

export default BookingId;
