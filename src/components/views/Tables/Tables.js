import React from 'react'
import './Tables.scss'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';

class Tables extends React.Component {
  static propTypes = {
    fetchEvents: PropTypes.func,
    fetchBookings: PropTypes.func,
    loadingEvents: PropTypes.shape({
      activeEvents: PropTypes.bool,
      errorEvents: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    loadingBookings: PropTypes.shape({
      activeBookings: PropTypes.bool,
      errorBookings: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchEvents, fetchBookings } = this.props;
    fetchEvents();
    fetchBookings();
  }

  makeHoursTable(){
    const hours = [];

    for(let i=12; i<24.5; i+=0.5){
      if(i<24){
        hours.push((Math.floor(i) % 24) + ':' + (i % 1 * 60 + '').padStart(2, '0'));
      }
      else{
        hours.push('24:00');
      }
    };

    return hours;
  }

  makefinish(events){
    for(let event of events){
      const hour = event.hour;
      const parts = hour.split(':');
      const hourNumber = parseInt(parts[0]) + parseInt(parts[1])/60;
      const finishNumber = hourNumber + event.duration;
      event.finish = Math.floor(finishNumber % 24) + ':' + (finishNumber % 1 * 60 + '').padStart(2, '0');
    }
  }

  render() {
    const { loadingEvents: { activeEvents, errorEvents }, events } = this.props;
    const { loadingBookings: { activeBookings, errorBookings }, bookings } = this.props;

    const today = new Date().toISOString().slice(0, 10);

    const Wrapper = props => (
      <div className='component'>
        <h2>Today bookings and events</h2>
        {props.children}
      </div>
    );

    if(activeBookings || activeEvents || !events.length || !bookings.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(errorEvents) {
      return (
        <Wrapper>
          <p>Error Events! Details:</p>
          <pre>{errorEvents}</pre>
        </Wrapper>
      )}
      else if(errorBookings) {
        return (
          <Wrapper>
            <p>Error Bookings! Details:</p>
            <pre>{errorBookings}</pre>
          </Wrapper>
        )}
     else {

      return (
        <Wrapper>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <h3 className='table_head'>Hour</h3>
            {this.makeHoursTable().map(hour => (
              <p className='row' key={hour}>{hour}</p>
            ))}
          </Grid>
          <Grid item xs={3}>
            <h3 className='table_head'>Table 1</h3>
            {this.makefinish(events)}
            {this.makefinish(bookings)}
            {this.makeHoursTable().map(hour => {
              return <p className='row' key={hour}>
                {events.map(event => {
                  if((hour >= event.hour && hour <= event.finish) && event.table === 1 && (event.repeat !== false || event.date === today)){
                    return <Link key={event.id} to={`${process.env.PUBLIC_URL}/tables/event/${event.id}`}>Event id:  {event.id}</Link>;
                  }
                }
                )}
                {bookings.map(booking => {
                  if((hour >= booking.hour && hour <= booking.finish) && booking.table === 1 && (booking.repeat !== false || booking.date === today)){
                    return <Link key={booking.id} to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}>Booking id:  {booking.id}</Link>;
                  }
                }
                )}
              </p>;
            })}
          </Grid>
          <Grid item xs={3}>
            <h3 className='table_head'>Table 2</h3>
            {this.makeHoursTable().map(hour => {
              return <p className='row' key={hour}>
                {events.map(event => {
                  if((hour >= event.hour && hour <= event.finish) && event.table === 2 && (event.repeat !== false || event.date === today)){
                    return <Link key={event.id} to={`${process.env.PUBLIC_URL}/tables/event/${event.id}`}>Event id:  {event.id}</Link>;
                  }
                }
                )}
                {bookings.map(booking => {
                  if((hour >= booking.hour && hour <= booking.finish) && booking.table === 2 && (booking.repeat !== false || booking.date === today)){
                    return <Link key={booking.id} to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}>Booking id:  {booking.id}</Link>;
                  }
                }
                )}
              </p>;
            })}
          </Grid>
          <Grid item xs={3}>
            <h3 className='table_head'>Table 3</h3>
            {this.makeHoursTable().map(hour => {
              return <p className='row' key={hour}>
                {events.map(event => {
                  if((hour >= event.hour && hour <= event.finish) && event.table === 3 && (event.repeat !== false || event.date === today)){
                    return <Link key={event.id} to={`${process.env.PUBLIC_URL}/tables/event/${event.id}`}>Event id:  {event.id}</Link>;
                  }
                }
                )}
                {bookings.map(booking => {
                  if((hour >= booking.hour && hour <= booking.finish) && booking.table === 3 && (booking.repeat !== false || booking.date === today)){
                    return <Link key={booking.id} to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}>Booking id:  {booking.id}</Link>;
                  }
                }
                )}
              </p>;
            })}
          </Grid>
        </Grid>
        </Wrapper>
      );
    }
  }
}

export default Tables;
