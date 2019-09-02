import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../../modules/Auth';

const PrivateRoute = ({ component: RouteComponent, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthorized ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });

export default connect(mapStateToProps)(PrivateRoute);
