import React, { Component, Fragment } from 'react';
import PageHeader from '../component/PageHeader';
import PageBody from '../component/PageBody';
import './style.scss';
import { context, lineStrList } from './text';

export default class Aboutme extends Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {

  }

  render () {

    return (
      <Fragment>
        <PageHeader/>
        <PageBody>
          <div className="aboutme-wrap">
            <div className="feature pv-50">
              <div className="container">
                {context}
                <br/>
                {
                  lineStrList.map((line, index) => {
                    return (
                      <p className="mv-0" key={index} style={{ whiteSpace: 'pre' }}>{line}</p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </PageBody>
      </Fragment>
    );
  }
};
