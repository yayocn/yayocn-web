import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const MARK = {
  close: [
    { title: 'Close', key: '', subTitle: '', className: 'mark-close', },
  ],
  ok: [
    { title: 'OK', key: '', subTitle: '', className: 'mark-ok', },
  ],
  arrowLeft2: [
    { title: 'Arrow Left 2', key: '', subTitle: '', className: 'mark-arrow-left2', },
  ],
  arrowRight2: [
    { title: 'Arrow Right 2', key: '', subTitle: '', className: 'mark-arrow-right2', },
  ],
};

export default class Mark extends Component {

  createCode = (target) => {
    const data = MARK[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<span class="${item.className}"></span>
      
`;
      } else {
        code += `<span class="${item.className}"></span>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用的是 <code>html</code> 的转义字符。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>Close</h3>
        <div className={classnames(style['util-mark'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        MARK.close.map((item, index) => {
                          return (
                            <span className={item.className} key={index}></span>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('close')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>OK</h3>
        <div className={classnames(style['util-mark'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        MARK.ok.map((item, index) => {
                          return (
                            <span className={item.className} key={index}></span>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('ok')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>Arrow Left 2</h3>
        <div className={classnames(style['util-mark'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        MARK.arrowLeft2.map((item, index) => {
                          return (
                            <span className={item.className} key={index}></span>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('arrowLeft2')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>Arrow Right 2</h3>
        <div className={classnames(style['util-mark'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        MARK.arrowRight2.map((item, index) => {
                          return (
                            <span className={item.className} key={index}></span>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('arrowRight2')
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
