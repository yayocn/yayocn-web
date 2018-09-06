import React, { Component } from 'react';
import Container from './Container';
import submenu from '../constants/submenu';

import UtilitiesContent from '../contents/utilities';
import BackgroundContent from '../contents/utilities/Background';
import BorderContent from '../contents/utilities/Border';
import CloseContent from '../contents/utilities/Close';
import FlexContent from '../contents/utilities/Flex';
import FloatContent from '../contents/utilities/Float';
import FontContent from '../contents/utilities/Font';
import PositionContent from '../contents/utilities/Position';
import ShadowContent from '../contents/utilities/Shadow';
import SizeContent from '../contents/utilities/Size';
import SpaceContent from '../contents/utilities/Space';
import TextContent from '../contents/utilities/Text';
import ViewContent from '../contents/utilities/View';

export class Utilities extends Component {
  render () {
    return (
      <Container submenu={submenu.utilities}>
        <UtilitiesContent/>
      </Container>
    )
  }
}

export class Background extends Component {
  render () {
    return (
      <Container submenu={submenu.background}>
        <BackgroundContent/>
      </Container>
    )
  }
}

export class Border extends Component {
  render () {
    return (
      <Container submenu={submenu.border}>
        <BorderContent/>
      </Container>
    )
  }
}

export class Close extends Component {
  render () {
    return (
      <Container submenu={submenu.close}>
        <CloseContent/>
      </Container>
    )
  }
}

export class Flex extends Component {
  render () {
    return (
      <Container submenu={submenu.flex}>
        <FlexContent/>
      </Container>
    )
  }
}

export class Float extends Component {
  render () {
    return (
      <Container submenu={submenu.float}>
        <FloatContent/>
      </Container>
    )
  }
}

export class Font extends Component {
  render () {
    return (
      <Container submenu={submenu.font}>
        <FontContent/>
      </Container>
    )
  }
}

export class Position extends Component {
  render () {
    return (
      <Container submenu={submenu.position}>
        <PositionContent/>
      </Container>
    )
  }
}

export class Shadow extends Component {
  render () {
    return (
      <Container submenu={submenu.shadow}>
        <ShadowContent/>
      </Container>
    )
  }
}

export class Size extends Component {
  render () {
    return (
      <Container submenu={submenu.size}>
        <SizeContent/>
      </Container>
    )
  }
}

export class Space extends Component {
  render () {
    return (
      <Container submenu={submenu.space}>
        <SpaceContent/>
      </Container>
    )
  }
}

export class Text extends Component {
  render () {
    return (
      <Container submenu={submenu.text}>
        <TextContent/>
      </Container>
    )
  }
}

export class View extends Component {
  render () {
    return (
      <Container submenu={submenu.view}>
        <ViewContent/>
      </Container>
    )
  }
}
