import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = ({bookingId, eventId}) => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:${bookingId}`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/:${eventId}`}>Event</Link>
  </div>
);

Tables.propTypes = {

};

export default Tables;
