import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

export default class Close extends Component {

  createCode = () => {
    let code = ``;
    code = `<div class="close">&times;</div>`

    return code;
  }

  createBtnCode = () => {
    let code = ``;
    code = `<button type="button" class="close">&times;</button>`

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>Close Icon。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>图标</h3>
        <p></p>
        <div className={classnames(style['util-bg'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="close fl">&times;</div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>按钮</h3>
        <p></p>
        <div className={classnames(style['util-bg'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" class="close fl">
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createBtnCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}