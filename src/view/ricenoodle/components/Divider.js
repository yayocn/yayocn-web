import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DIVIDER = {
  default: [
    { title: 'Divider', key: '', subTitle: '', className: 'divider', },
  ],
  size: [
    { title: 'Large divider', key: '', subTitle: '', className: 'divider divider-lg', },
    { title: 'Small divider', key: '', subTitle: '', className: 'divider divider-sm', },
  ],
  weight: [
    { title: 'Divider', key: '', subTitle: '', className: 'divider divider-bold', },
  ],
};

export default class Divider extends Component {

  createCode = (target) => {
    const data = DIVIDER[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}"></div>
      
`;
      } else {
        code += `<div class="${item.className}"></div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>分割标签。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <p><code>.divider</code> 分割标签用于分割上下文。</p>
        <div className={classnames(style['util-divider'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.default.map((item, index) => {
                          return (
                            <div className="" key={index} >
                              <div className={classnames(item.className, style['divider-feature'])}></div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('default')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>实例</h3>
        <p><code>.divider-lg .divider-sm</code> 设置分割的间距，也可以用 <a href="/ricenoodle/utilities/space">Space</a> 来控制。</p>
        <div className={classnames(style['util-divider'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.size.map((item, index) => {
                          return (
                            <div className="" key={index} >
                              {item.title}
                              <div className={classnames(item.className, style['divider-feature'])}></div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('size')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>权重</h3>
        <p><code>.divider-bold</code> 设置比较粗的分割线，也可以用 <a href="/ricenoodle/utilities/border">Border</a> 来控制。</p>
        <div className={classnames(style['util-divider'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.weight.map((item, index) => {
                          return (
                            <div className="" key={index} >
                              <div className={classnames(item.className, style['divider-feature'])}></div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('weight')
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
