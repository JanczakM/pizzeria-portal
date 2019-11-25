import React from 'react';
import 'date-fns';
import PropTypes from 'prop-types';
import './BookingId.scss';
import {api} from '../../../settings'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class BookingId extends React.Component {

  static propTypes = {
    fetchBookings: PropTypes.func,
    loadingBookings: PropTypes.shape({
      activeBookings: PropTypes.bool,
      errorBookings: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchBookings } = this.props;
    fetchBookings();
  }

  render(){
    const { loadingBookings: { activeBookings, errorBookings }, bookings } = this.props;

    const bookingId = this.props.match.params.id;
    const allBookings = this.props.bookings;
    const thisBooking = allBookings.filter(b => b.id == bookingId);
    const min = 1;
    const max = 9;

    const bookingData = {
      date: thisBooking[0] ? thisBooking[0].date : '',
      time: thisBooking[0] ? thisBooking[0].date + 'T' + thisBooking[0].hour : '',
      duration: thisBooking[0] ? thisBooking[0].duration : '',
      ppl: thisBooking[0] ? thisBooking[0].ppl : '',
      table: thisBooking[0] ? thisBooking[0].table : '',
      starters: thisBooking[0] ? thisBooking[0].starters : '',
    }


    const handleDateChange = event => {
      const { patchBookings } = this.props;
      const bookingDate = event.toISOString().slice(0, 10);
      patchBookings(bookingId, 'date', bookingDate);
      //console.log(bookingDate);
    };

    const handleTimeChange = event => {
      const bookingTime = event.toString().slice(16, 21);
      //console.log(bookingTime);
    };

    const handleFormChange = event => {
      //console.log(event.target.value);
    };

    const Wrapper = props => (
      <div className='booking-component'>
        {props.children}
      </div>
    );

    if(activeBookings || !bookings.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    }
    else if(errorBookings) {
        return (
          <Wrapper>
            <p>Error! Details:</p>
            <pre>{errorBookings}</pre>
          </Wrapper>
        )}
     else {

      return (
        <Wrapper>
          <h2>Booking id: {bookingId}</h2>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify='flex-start'>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='dd-MM-yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Date'
              value={bookingData.date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin='normal'
              id='time-picker'
              label='Time'
              format='HH:mm'
              minutesStep={30}
              value={bookingData.time}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            <TextField
               id='standard-number'
               label='Duration'
               value={bookingData.duration}
               type='number'
               onChange={handleFormChange}
               InputProps={{ inputProps: { min: min, max: max } }}
               InputLabelProps={{
                 shrink: true,
               }}
               margin='normal'
             />
            <TextField
               id='standard-number'
               label='People'
               value={bookingData.ppl}
               onChange={handleFormChange}
               type='number'
               InputProps={{ inputProps: { min: min, max: max } }}
               InputLabelProps={{
                 shrink: true,
               }}
               margin='normal'
             />
              <FormControl>
                <InputLabel shrink id="table">
                  Table
                </InputLabel>
                <Select
                  labelId="table"
                  id="table"
                  value={bookingData.table}
                  onChange={handleFormChange}
                  displayEmpty
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
              <FormGroup>
                <FormHelperText>Starters</FormHelperText>
                <FormControlLabel
                  control={
                    <Checkbox checked={bookingData.starters.includes('water')} onChange={handleFormChange} value='Water' />
                  }
                  label="Water"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={bookingData.starters.includes('bread')} onChange={handleFormChange} value='Bread' />
                  }
                  label="Bread"
                />
              </FormGroup>
              </Grid>
            </MuiPickersUtilsProvider>
        </Wrapper>
      );
    }
  }
}

export default BookingId;
