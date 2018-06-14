import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import classnames from 'classnames';
import style from '../style.scss';

export default class Background extends Component {
  render () {
    return (
      <PageWrapper>
        <h3>说明</h3>
        <p>快速设置背景色。预设 <code>12</code> 种颜色。</p>

        <div className={classnames(style['util-bg'])}>
          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-primary', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-secondary', style['bg-feature'])}></div></div>
          </div>

          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-success', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-info', style['bg-feature'])}></div></div>
          </div>

          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-warning', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-danger', style['bg-feature'])}></div></div>
          </div>

          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-white border', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-light', style['bg-feature'])}></div></div>
          </div>

          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-muted', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-dark', style['bg-feature'])}></div></div>
          </div>

          <div className="row mb-10">
            <div className="col-6"><div className={classnames('bg-black', style['bg-feature'])}></div></div>
            <div className="col-6"><div className={classnames('bg-transparent border', style['bg-feature'])}></div></div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
