import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';

export default class Index extends Component {
  render () {
    return (
      <PageWrapper>
        <div>
          <h1>工具类 <code>Utilities</code></h1>
          <p className="font-2x font-100">工具类提供了一系列轻量的类，它们往往只提供了一个具体的样式。
            在使用过程中，通过它们不同的组合，可以实现一些复杂的样式。</p>
        </div>
      </PageWrapper>
    );
  }
}
