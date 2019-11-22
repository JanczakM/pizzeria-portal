import { connect } from 'react-redux'
import Tables from './Tables';
import { getAllEvents, fetchEventsFromAPI, getEventsLoadingState } from '../../../redux/eventsRedux';
import { getAllBookings, fetchBookingsFromAPI, getBookingsLoadingState } from '../../../redux/bookingsRedux';

const mapStateToProps = (state) => ({
  events: getAllEvents(state),
  bookings: getAllBookings(state),
  loadingEvents: getEventsLoadingState(state),
  loadingBookings: getBookingsLoadingState(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEventsFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
