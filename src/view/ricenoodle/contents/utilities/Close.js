import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

export default class Close extends Component {

  createCode = () => {
    return `<span class="close">&times;</span>`;
  }

  createBtnCode = () => {
    return `<button type="button" class="close">&times;</button>`;
  }

  render () {
    return (
      <Fragment>
        <h1>关闭图标 <code>Close icon</code></h1>
        <p className="font-2x font-100">使用通用关闭图标来消除模态框和警报框等内容。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>图标</h2>
        <p>关闭图标默认是右浮动。</p>
        <div className={classnames('util-bg')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <span className="close fl">&times;</span>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
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
        <h2>按钮</h2>
        <div className={classnames('util-bg')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="close fl">
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createBtnCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
