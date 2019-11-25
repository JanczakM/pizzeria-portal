import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllBookings = ({bookings}) => bookings.data;
export const getBookingsLoadingState = ({bookings}) => bookings.loading;


/* action name creator */
const reducerName = 'bookings';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchBookingsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchBookingsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchBookingsError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchBookingsFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().bookings.data.length === 0){
      dispatch(fetchBookingsStarted());

      Axios
        .get(`${api.url}/${api.booking}`)
        .then(res => {
          dispatch(fetchBookingsSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchBookingsError(err.message || true));
        });
    }
  };
};

export const patchBookingsToAPI = (bookingId, changedData, changedValue) => {
  return (dispatch, getState) => {
    Axios
      .patch(`${api.url}/${api.booking}?id=${bookingId}`, {
        hangedData: changedValue,
      })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log( error);
      });
  }
}

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_ALL_START: {
      return {
        ...statePart,
        loading: {
          activeBookings: true,
          errorBookings: false,
        },
      }
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          activeBookings: false,
          errorBookings: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          activeBookings: false,
          errorBookings: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}
