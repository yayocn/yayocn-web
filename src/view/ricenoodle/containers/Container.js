import React, { Component, Fragment } from 'react';
import PageHeader from '../../component/PageHeader/index';
import PageBody from '../../component/PageBody/index';
import Sidebar from '../../component/Sidebar/index';
import PageContent from '../../component/PageContent/index';
import Submenu from '../../component/Submenu/index';
import { ricenoodle } from '../../../constants/menu';

export default class Container extends Component {
  render () {
    const { children, submenu } = this.props;
    return (
      <Fragment>
        <PageHeader/>
        <PageBody>
          <Sidebar menu={ricenoodle}/>
          <PageContent>
            {
              submenu &&
              <Submenu menu={submenu}/>
            }

            {children}
          </PageContent>
        </PageBody>
      </Fragment>
    );
  }
}
