import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router';
import routers from './router';

const browserHistory = createBrowserHistory();

export default class CustomRouter extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Switch>
          {
            routers.map((route, index) => {
              return <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />;
            })
          }
          <Redirect exact from="/" to={routers[0].path}/>
        </Switch>
      </Router>
    );
  }
}
