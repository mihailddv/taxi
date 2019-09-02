import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditProfile from '../../Profile/EditProfile';
import Map from '../../Map';

const AppRouter = ({ match }) => {
  return (
    <div className=''>
      <Switch>
        <Route path={`${match.url}map`} component={Map} />
        <Route path={`${match.url}profile`} component={EditProfile} />
        <Redirect to={`${match.url}map`} />
      </Switch>
    </div>
  );
};

export default AppRouter;
