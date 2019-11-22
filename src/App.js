import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from './components/layout/MainLayout/Palette';


import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/Ordering';
import OrderingNew from './components/views/OrderingNew/OrderingNewContainer';
import Tables from './components/views/Tables/TablesContainer';
import EventId from './components/views/EventId/EventId';
import BookingId from './components/views/BookingId/BookingId';
import OrderId from './components/views/OrderId/OrderId';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/panel'>
        <MainLayout>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={OrderingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={EventId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingId} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderId} />
            </Switch>
          </ThemeProvider>
        </MainLayout>
      </BrowserRouter>
  </Provider>
  )};


export default App;
