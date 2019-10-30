import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router';
import routers from './router';

const hashHistory = createHashHistory();

export default class CustomRouter extends Component {
  render () {
    return (
      <Router history={hashHistory}>
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
