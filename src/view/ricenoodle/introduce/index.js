import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';

export default class Improve extends Component {
  render () {
    return (
      <PageWrapper>
        <h1>简介 <code>Introduce</code></h1>
        <p className="font-2x font-100">YY UI，是 YaYo 出于兴趣和以学习的目的而形成的一个前端响应式框架。</p>

        <div className="divider divider-lg divider-bold"></div>


      </PageWrapper>
    );
  }
}
