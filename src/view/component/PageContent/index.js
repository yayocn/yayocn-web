import React, { Component } from 'react';
import style from './style.scss';

export default class PageContent extends Component {
  render () {
    const { children } = this.props;
    return (
      <div className={style['app-content']}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
