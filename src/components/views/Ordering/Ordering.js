import React from 'react';
import './Ordering.scss';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const Ordering = ({id}) => {

  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className='component'>
      <h2>Ordering</h2>
      <div className='cards_container'>
        <Card className='cards_card'>
          <CardContent>
            <h3 className='table_title'>Table 1</h3>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <Chip
              icon={<DoneIcon />}
              label='Delivered'
              onClick={handleClick}
              color='secondary'
              size='small'
              className={classes.root}
            />
            <ListItemLink className='ready' href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Ready' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
          </CardContent>
          <CardActions>
          <Link to={process.env.PUBLIC_URL + '/ordering/new'} className='button_add'>
            <Fab color='primary' aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
          </CardActions>
        </Card>

        <Card className='cards_card'>
          <CardContent>
            <h3 className='table_title'>Table 2</h3>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <Chip
              icon={<DoneIcon />}
              label='Delivered'
              onClick={handleClick}
              color='secondary'
              size='small'
              className={classes.root}
            />
            <ListItemLink className='ready' href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Ready' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
          </CardContent>
          <CardActions>
          <Link to={process.env.PUBLIC_URL + '/ordering/new'} className='button_add'>
            <Fab color='primary' aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
          </CardActions>
        </Card>

        <Card className='cards_card'>
          <CardContent>
            <h3 className='table_title'>Table 3</h3>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <Chip
              icon={<DoneIcon />}
              label='Delivered'
              onClick={handleClick}
              color='secondary'
              size='small'
              className={classes.root}
            />
            <ListItemLink className='ready' href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Ready' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
            <ListItemLink href={`${process.env.PUBLIC_URL}/ordering/order/:${id}`}>
              <ListItemText primary='Pending' secondary='22-12-2019 15:30'/>
              <Typography>22$</Typography>
            </ListItemLink>
            <Divider />
          </CardContent>
          <CardActions>
          <Link to={process.env.PUBLIC_URL + '/ordering/new'} className='button_add'>
            <Fab color='primary' aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

Ordering.propTypes = {

};

export default Ordering;
