import React, { Component, Fragment } from 'react';
import PageHeader from '../PageHeader';

export default class PageWapper extends Component {
  render () {
    const { children } = this.props;
    return (
      <Fragment>
        <PageHeader />
        {children}
      </Fragment>
    );
  }
}
