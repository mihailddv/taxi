import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOrder, cancelOrder } from '../../modules/Order';
import SetAddress from './SetAddress';
import OrderSuccess from './OrderSuccess';
import Info from '../Profile/Info';

import './Order.scss';

class Order extends Component {
  createOrder = (fromWhere, toWhere) => {
    const { createOrder } = this.props;

    createOrder({
      fromWhere: fromWhere,
      toWhere: toWhere
    });
  };

  cancelOrder = () => {
    const { removeLayer, cancelOrder } = this.props;

    removeLayer();
    cancelOrder();
  };

  render() {
    const { map, user, order } = this.props;

    if (!user.userInfo) {
      return (
        <div className='setAddres'>
          <Info />
        </div>
      );
    }

    if (order.status) {
      return (
        <div className='setAddres'>
          <OrderSuccess cancelOrder={this.cancelOrder} />
        </div>
      );
    }

    return (
      <div className='setAddres'>
        <SetAddress 
          map={map} 
          createOrder={this.createOrder} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { map, user, order } = state;
  return { map, user, order };
};

const mapDispatchToProps = { createOrder, cancelOrder };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
