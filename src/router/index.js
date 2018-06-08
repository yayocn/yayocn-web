import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import routers from './router';

export default class Routers extends Component {
  render () {
    return (
      <Router history={null}>
        <Switch>
          <Redirect exact from="/" to={routers[0].path}/>
          <Route exact path="/"/>
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
        </Switch>
      </Router>
    );
  }
}
