import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';

export default class Improve extends Component {
  render () {
    return (
      <PageWrapper>
        <div>
          <h1>样式增强 <code>Improve</code></h1>
          <p className="font-2x font-100">
            在这一部分，Ricenoodle 重置了一些常用元素的样式，并额外添加了一些针对性很强的 CSS 类。
          </p>
        </div>
      </PageWrapper>
    );
  }
}
