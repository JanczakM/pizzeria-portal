import { connect } from 'react-redux'
import BookingId from './BookingId';
import { getAllBookings, fetchBookingsFromAPI, patchBookingsToAPI, getBookingsLoadingState } from '../../../redux/bookingsRedux';

const mapStateToProps = (state) => ({
  bookings: getAllBookings(state),
  loadingBookings: getBookingsLoadingState(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
  patchBookings: (id, changedpart, changedvalue) => dispatch(patchBookingsToAPI(id, changedpart, changedvalue)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingId);
