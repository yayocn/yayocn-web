import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';

export default class Index extends Component {
  render () {
    return (
      <PageWrapper>
        <div>
          <h1>组件 <code>Component</code></h1>
          <p className="font-2x font-100">无数可复用的组件，包括下拉菜单、导航、警告框、弹出框等更多功能。</p>
        </div>
      </PageWrapper>
    );
  }
}
