import React from 'react';
import { connect } from 'react-redux';
import { logout, getIsAuthorized } from '../../../../modules/Auth';
import NavBar from './NavBar';

const Header = ({ isAuthorized, logout }) => {
  return (
    <React.Fragment>
      <NavBar
        isAuthorized={isAuthorized}
        logout={logout}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });
const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
