import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditProfile from '../../Profile/EditProfile';
import Map from '../../Map';

const AppRouter = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/profile" component={EditProfile} />
        <Redirect to="/map" />
      </Switch>
    </div>
  );
};

export default AppRouter;
