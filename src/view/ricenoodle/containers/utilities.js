import React, { Component } from 'react';
import Container from './Container';

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
      <Container>
        <UtilitiesContent/>
      </Container>
    )
  }
}

export class Background extends Component {
  render () {
    return (
      <Container>
        <BackgroundContent/>
      </Container>
    )
  }
}

export class Border extends Component {
  render () {
    return (
      <Container>
        <BorderContent/>
      </Container>
    )
  }
}

export class Close extends Component {
  render () {
    return (
      <Container>
        <CloseContent/>
      </Container>
    )
  }
}

export class Flex extends Component {
  render () {
    return (
      <Container>
        <FlexContent/>
      </Container>
    )
  }
}

export class Float extends Component {
  render () {
    return (
      <Container>
        <FloatContent/>
      </Container>
    )
  }
}

export class Font extends Component {
  render () {
    return (
      <Container>
        <FontContent/>
      </Container>
    )
  }
}

export class Position extends Component {
  render () {
    return (
      <Container>
        <PositionContent/>
      </Container>
    )
  }
}

export class Shadow extends Component {
  render () {
    return (
      <Container>
        <ShadowContent/>
      </Container>
    )
  }
}

export class Size extends Component {
  render () {
    return (
      <Container>
        <SizeContent/>
      </Container>
    )
  }
}

export class Space extends Component {
  render () {
    return (
      <Container>
        <SpaceContent/>
      </Container>
    )
  }
}

export class Text extends Component {
  render () {
    return (
      <Container>
        <TextContent/>
      </Container>
    )
  }
}

export class View extends Component {
  render () {
    return (
      <Container>
        <ViewContent/>
      </Container>
    )
  }
}
