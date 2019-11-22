import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllEvents = ({events}) => events.data;
export const getEventsLoadingState = ({events}) => events.loading;


/* action name creator */
const reducerName = 'events';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchEventsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchEventsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchEventsError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchEventsFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().events.data.length === 0){
      dispatch(fetchEventsStarted());

      Axios
        .get(`${api.url}/${api.event}`)
        .then(res => {
          dispatch(fetchEventsSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchEventsError(err.message || true));
        });
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_ALL_START: {
      return {
        ...statePart,
        loading: {
          activeEvents: true,
          errorEvents: false,
        },
      }
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          activeEvents: false,
          errorEvents: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          activeEvents: false,
          errorEvents: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}
