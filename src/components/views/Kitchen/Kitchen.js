import React from 'react'
import PropTypes from 'prop-types'

class Kitchen extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  render() {
    const { loading: { active, error }, orders } = this.props;

    const Wrapper = props => (
      <div>
        <h2>Kitchen</h2>
        {props.children}
      </div>
    );

    if(active || !orders.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ul>
            {console.log(orders)}
            {orders.map(({id, products}) => (
              <li key={id}>{products[0].id}</li>
            ))}
          </ul>
        </Wrapper>
      );
    }
  }
}

export default Kitchen;
