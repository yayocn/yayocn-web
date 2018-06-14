import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import PageContent from '../PageContent';

export default class PageBody extends Component {
  render () {
    const { children, sidebar } = this.props;
    return (
      <div>
        <Sidebar menu={sidebar} />
        <PageContent>
          {children}
        </PageContent>
      </div>
    );
  }
}
