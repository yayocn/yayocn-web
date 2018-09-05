import React, { Component } from 'react';
import Container from './Container';

import ImproveContent from '../contents/improve';
import CodeContent from '../contents/improve/Code';
import ElementContent from '../contents/improve/Element';
import ImageContent from '../contents/improve/Image';

const codeSubmenu = [
  { key: 'code', title: '内联编码' },
  { key: 'pre', title: '编码块' },
  { key: 'input', title: '用户输入' },
  { key: 'samp', title: '<samp> 元素' },
];

const elementSubmenu = [
  { key: 'heading', title: '标题' },
  { key: 'hr', title: '水平分割线' },
  { key: 'small', title: '<small> 元素' },
  { key: 'mark', title: '<mark> 元素' },
  { key: 'address', title: '<address> 元素' },
  { key: 'blockquote', title: '<blockquote> 元素' },
  { key: 'dl', title: '<dl> 元素' },
  { key: 'size_dead', title: '禁止缩放' },
  { key: 'list', title: '列表' },
];

const ImageSubmenu = [
  { key: 'fluid', title: '响应式' },
  { key: 'thumbnail', title: '缩略图' },
  { key: 'figure', title: '<figure> 元素' },
  { key: 'extro', title: '扩展' },
]

export class Improve extends Component {
  render () {
    return (
      <Container>
        <ImproveContent/>
      </Container>
    )
  }
}

export class Code extends Component {
  render () {
    return (
      <Container submenu={codeSubmenu}>
        <CodeContent/>
      </Container>
    )
  }
}

export class Element extends Component {
  render () {
    return (
      <Container submenu={elementSubmenu}>
        <ElementContent/>
      </Container>
    )
  }
}

export class Image extends Component {
  render () {
    return (
      <Container submenu={ImageSubmenu}>
        <ImageContent/>
      </Container>
    )
  }
}