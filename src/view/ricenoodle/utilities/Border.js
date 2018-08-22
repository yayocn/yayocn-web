import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BORDER = {
  additive: [
    { title: 'All', subTitle: '', className: 'border', },
    { title: 'Top', subTitle: '', className: 'border-top', },
    { title: 'Right', subTitle: '', className: 'border-right', },
    { title: 'Bottom', subTitle: '', className: 'border-bottom', },
    { title: 'Left', subTitle: '', className: 'border-left', },
  ],
  subtractive: [
    { title: 'All', subTitle: '', className: 'border border-0', },
    { title: 'Top', subTitle: '', className: 'border border-top-0', },
    { title: 'Right', subTitle: '', className: 'border border-right-0', },
    { title: 'Bottom', subTitle: '', className: 'border border-bottom-0', },
    { title: 'Left', subTitle: '', className: 'border border-left-0', },
  ],
  theme: [
    { title: 'Primary', subTitle: '', className: 'border border-primary', },
    { title: 'Secondary', subTitle: '', className: 'border border-secondary', },
    { title: 'Success', subTitle: '', className: 'border border-success', },
    { title: 'Info', subTitle: '', className: 'border border-info', },
    { title: 'Warning', subTitle: '', className: 'border border-warning', },
    { title: 'Danger', subTitle: '', className: 'border border-danger', },
    { title: 'White', subTitle: '', className: 'border border-white', },
    { title: 'Light', subTitle: '', className: 'border border-light', },
    { title: 'Muted', subTitle: '', className: 'border border-muted', },
    { title: 'Dark', subTitle: '', className: 'border border-dark', },
    { title: 'Black', subTitle: '', className: 'border border-black', },
    { title: 'Transparent', subTitle: '', className: 'border border-transparent', },
  ],
  round: [
    { title: '', subTitle: '', className: 'border border-round', },
    { title: '', subTitle: '', className: 'border border-round-0', },
    { title: '', subTitle: '', className: 'border border-round-circle', },
    { title: '', subTitle: '', className: 'border border-round-top', },
    { title: '', subTitle: '', className: 'border border-round-right', },
    { title: '', subTitle: '', className: 'border border-round-bottom', },
    { title: '', subTitle: '', className: 'border border-round-left', },
  ],
  style: [
    { title: 'Solid', subTitle: '', className: 'border border-solid', },
    { title: 'Dashed', subTitle: '', className: 'border border-dash', },
    { title: 'Dotted', subTitle: '', className: 'border border-dot', },
  ],
  weight: [
    { title: '1px', subTitle: '', className: 'border border-1', },
    { title: '2px', subTitle: '', className: 'border border-2', },
    { title: '3px', subTitle: '', className: 'border border-3', },
    { title: '4px', subTitle: '', className: 'border border-4', },
    { title: '5px', subTitle: '', className: 'border border-5', },
    { title: '6px', subTitle: '', className: 'border border-6', },
    { title: '7px', subTitle: '', className: 'border border-7', },
    { title: '8px', subTitle: '', className: 'border border-8', },
    { title: '9px', subTitle: '', className: 'border border-9', },
    { title: '10px', subTitle: '', className: 'border border-10', },
  ]
}

export default class Border extends Component {

  createCode = (target) => {
    const data = BORDER[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}"> ... </div>
      
`;
      } else {
        code += `<div class="${item.className}"> ... </div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>边框 <code>Border</code></h2>
        <p>使用边框工具类快速设置元素的边框和边框半径的样式。 非常适合图像，按钮或任何其他元素。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>边框</h3>
        <p>添加或者删除元素的边框，可以针对所有的边或者针对某一边。</p>

        <h4>添加</h4>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.additive.map((item, index) => {
                      return (
                        <div key={index} className={classnames('mb-10 mr-10 block-inline', style['border-feature'], item.className)}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('additive')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">删除</h4>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.subtractive.map((item, index) => {
                      return (
                        <div key={index} className={classnames('border mb-10 mr-10 block-inline', style['border-feature'], item.className )}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('subtractive')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>主题</h3>
        <p>边框工具类设有 <code>12</code> 种主题颜色。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.theme.map((item, index) => {
                      return (
                        <div className="mb-10 mr-10 block-inline" key={index}>
                          <h6>{item.title}</h6>
                          <div className={classnames(style['border-feature'], item.className)}></div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>半径</h3>
        <p>为元素添加半径类，设置元素的角半径。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.round.map((item, index) => {
                      return (
                        <div key={index} className={classnames('mb-10 mr-10 block-inline', style['border-feature'], item.className )}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('round')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>边框风格</h3>
        <p>为元素添加边框风格类，设置边框的风格。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.style.map((item, index) => {
                      return (
                        <div key={index} className="mb-10 mr-10 block-inline">
                          <h6>{item.title}</h6>
                          <div className={classnames(style['border-feature'], item.className)}></div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('style')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>边框宽度</h3>
        <p>为元素添加边框宽度类，设置边框的宽度。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.weight.map((item, index) => {
                      return (
                        <div key={index} className="mb-10 mr-10 block-inline">
                          <h6>{item.title}</h6>
                          <div className={classnames(style['border-feature'], item.className)}></div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
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
