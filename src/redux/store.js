import {combineReducers, createStore, applyMiddleware} from 'redux';
import productReducer from './productRedux';
import eventsReducer from './eventsRedux';
import bookingsReducer from './bookingsRedux';
import ordersReducer from './ordersRedux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
  events: {
    loading: {
      activeEvents: false,
      errorEvents: false,
    },
    data: [],
  },
  bookings: {
    loading: {
      activeBookings: false,
      errorBookings: false,
    },
    data: [],
  },
  orders: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
};

// define reducers
const reducers = {
  products: productReducer,
  events: eventsReducer,
  bookings: bookingsReducer,
  orders: ordersReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
