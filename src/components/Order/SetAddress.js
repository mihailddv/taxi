import React, { Component } from "react";
import Select from "react-select";
// import Grid from "@material-ui/core/Grid";
// import { Typography } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import './Order.scss';


class SetAddress extends Component {
  state = {
    fromAddr: null,
    toAddr: null
  };

  setFromAddr = place => {
    this.setState({
      fromAddr: place
    });
  };

  setToAddr = place => {
    this.setState({
      toAddr: place
    });
  };

  createOrder = () => {
    const { fromAddr, toAddr } = this.state;

    if (fromAddr && toAddr) {
      this.props.createOrder(fromAddr.value, toAddr.value);
    }
      
  };

  render() {
    const { fromAddr, toAddr } = this.state;

    const {
      map: { routeVarians }
    } = this.props;

    const variants = routeVarians.filter(
      variant => !~[fromAddr, toAddr].indexOf(variant)
    );

    return (
      <div className="call">
        <div className="call__content">
          <div className="call__caption">
            Вызов такси
          </div>

          <div className="call__item">
            <Select
              className="call__select"
              isClearable
              value={fromAddr}
              onChange={this.setFromAddr}
              options={variants}
              placeholder="Выберите адрес отправления"
            />
          </div>
          <div className="call__item">
            <Select
              className="call__select"
              isClearable
              value={toAddr}
              onChange={this.setToAddr}
              options={variants}
              placeholder="Выберите адрес прибытия"
            />
          </div>
          <div className="call__item">
            <Button
              color="red"
              disabled={!fromAddr || !toAddr}
              onClick={this.createOrder}
            >
              Вызвать такси
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SetAddress;
