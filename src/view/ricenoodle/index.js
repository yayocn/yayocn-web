import React, { Component, Fragment } from 'react';
import PageWrapper from '../component/PageWrapper';
import Sidebar from '../component/Sidebar';
import './index.scss';
import { menu } from './sidebarMenu';

export default class Ricenoodle extends Component {
  render () {
    return (
      <PageWrapper>
        <Sidebar menu={menu} />

      </PageWrapper>
    );
  }
}
