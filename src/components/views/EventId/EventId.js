import React from 'react';
import styles from './EventId.scss';

const EventId = (props) => (
  <div className={styles.component}>
    <h2>Event</h2>
    <h3>id{props.match.params.id}</h3>
  </div>
);

EventId.propTypes = {

};

export default EventId;
