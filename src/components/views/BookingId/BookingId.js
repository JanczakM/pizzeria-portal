import React from 'react';
import styles from './BookingId.scss';

const BookingId = ({bookingId}) => (
  <div className={styles.component}>
    <h2>Booking</h2>
    <h3>id: {bookingId}</h3>
  </div>
);

BookingId.propTypes = {

};

export default BookingId;
