import React from 'react';
import styles from './EventId.scss';

const EventId = ({eventId}) => (
  <div className={styles.component}>
    <h2>Event</h2>
    <h3>id: {eventId}</h3>
  </div>
);

EventId.propTypes = {

};

export default EventId;
