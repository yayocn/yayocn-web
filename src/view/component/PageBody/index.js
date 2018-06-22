import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import PageContent from '../PageContent';
import classnames from 'classnames';
import style from './style.scss';

export default class PageBody extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render () {
    const { children, sidebar } = this.props;
    return (
      <div className={classnames(style['app-body'])} ref={node => this.node = node}>
        <Sidebar menu={sidebar} />
        <PageContent>
          {children}
        </PageContent>
      </div>
    );
  }
}
