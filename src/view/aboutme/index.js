import React, { Component, Fragment } from 'react';
import PageHeader from '../component/PageHeader';
import PageBody from '../component/PageBody';
import classnames from 'classnames';
import './style.scss';

export default class Aboutme extends Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {

    return (
      <Fragment>
        <PageHeader/>
        <PageBody>
          <div className="aboutme-wrap">
            <div className="feature pv-50">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <span>杨勇</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <span>成都</span>
                  </div>
                </div><div className="row">
                  <div className="col-12 text-right">
                    <span>18202822738</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span>yayocn@qq.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageBody>
      </Fragment>
    );
  }
};
