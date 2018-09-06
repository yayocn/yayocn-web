import React, { Component } from 'react';
import Container from './Container';
import submenu from '../constants/submenu';

import ImproveContent from '../contents/improve';
import CodeContent from '../contents/improve/Code';
import ElementContent from '../contents/improve/Element';
import ImageContent from '../contents/improve/Image';

export class Improve extends Component {
  render () {
    return (
      <Container submenu={submenu.improve}>
        <ImproveContent/>
      </Container>
    )
  }
}

export class Code extends Component {
  render () {
    return (
      <Container submenu={submenu.code}>
        <CodeContent/>
      </Container>
    )
  }
}

export class Element extends Component {
  render () {
    return (
      <Container submenu={submenu.element}>
        <ElementContent/>
      </Container>
    )
  }
}

export class Image extends Component {
  render () {
    return (
      <Container submenu={submenu.image}>
        <ImageContent/>
      </Container>
    )
  }
}