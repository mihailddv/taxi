import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.scss";


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class NavBar extends Component {
  logout = () => {
    this.props.logout();
  };

  renderMenu = () => {
    return (
      <React.Fragment>
        <Button.Group className="nav" floated="right" color="red">

          <NavLink
            className="nav__item"
            to="/map"
          >
            Карта
          </NavLink>
          <NavLink
            className="nav__item"
            to="/profile"
          >
            Профиль
          </NavLink>
          <Button className="nav__item" onClick={this.logout}>Выход</Button>
        </Button.Group>
      </React.Fragment>
    );
  };

  render() {
    const { isAuthorized, classes } = this.props;

    return (
      <div className={classes.root}>
        <div color="red" className="topmenu">
          <div className="logo">
            Loft Taxi
          </div>
          {isAuthorized ? this.renderMenu() : ""}
        </div>
      </div>
    );
    
  }
}

export default withStyles(styles)(NavBar);
