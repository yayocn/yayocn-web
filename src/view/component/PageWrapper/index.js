import React, { Component, Fragment } from 'react';
import PageHeader from '../PageHeader';
import PageBody from '../PageBody';
import { ricenoodle } from '../../../config/menu';

export default class PageWapper extends Component {
  render () {
    const { children } = this.props;
    return (
      <Fragment>
        <PageHeader />
        <PageBody
          sidebar={ricenoodle}
        >
          {children}
        </PageBody>
      </Fragment>
    );
  }
}
