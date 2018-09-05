import React, { Component } from 'react';
import Container from './Container';
import StartContent from '../contents/start';

const startSubmenu = [
  { key: 'download', title: '下载' },
  { key: 'use', title: '使用' },
]

export class Start extends Component {
  render () {
    return (
      <Container submenu={startSubmenu}>
        <StartContent/>
      </Container>
    )
  }
}