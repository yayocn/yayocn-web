import React, { Component } from 'react';
import Container from './Container';
import submenu from '../constants/submenu';
import StartContent from '../contents/start';

export class Start extends Component {
  render () {
    return (
      <Container submenu={submenu.start}>
        <StartContent/>
      </Container>
    )
  }
}