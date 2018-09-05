import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';

export default class PageBody extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render () {
    const { children } = this.props;
    return (
      <div className={classnames('app-body')} ref={node => this.node = node}>
        {children}
      </div>
    );
  }
}
