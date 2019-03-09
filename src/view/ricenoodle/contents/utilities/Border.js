import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'border');

const BORDER = {
  additive: [
    { title: 'All', subTitle: '', className: 'border', },
    { title: 'Top', subTitle: '', className: 'border-top', },
    { title: 'Right', subTitle: '', className: 'border-right', },
    { title: 'Bottom', subTitle: '', className: 'border-bottom', },
    { title: 'Left', subTitle: '', className: 'border-left', },
  ],
  subtractive: [
    { title: 'All', subTitle: '', className: 'border-0', },
    { title: 'Top', subTitle: '', className: 'border-top-0', },
    { title: 'Right', subTitle: '', className: 'border-right-0', },
    { title: 'Bottom', subTitle: '', className: 'border-bottom-0', },
    { title: 'Left', subTitle: '', className: 'border-left-0', },
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
    { title: '', subTitle: '', className: 'border border-round-0', },
    { title: '', subTitle: '', className: 'border border-round-circle', },
    { title: '', subTitle: '', className: 'border border-round-ellipse', },
    { title: '', subTitle: '', className: 'border border-round', },
    { title: '', subTitle: '', className: 'border border-round-top', },
    { title: '', subTitle: '', className: 'border border-round-right', },
    { title: '', subTitle: '', className: 'border border-round-bottom', },
    { title: '', subTitle: '', className: 'border border-round-left', },
    { title: '', subTitle: '', className: 'border border-round-top-left', },
    { title: '', subTitle: '', className: 'border border-round-top-right', },
    { title: '', subTitle: '', className: 'border border-round-bottom-left', },
    { title: '', subTitle: '', className: 'border border-round-bottom-right', },
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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="border">边框</h2>
        <p>添加或者删除元素的边框，可以针对所有的边或者针对某一边。</p>

        <h3 id="border_additive">添加</h3>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.additive.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames('border-feature', item.className)}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="border_subtractive" className="mt-20">删除</h3>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.subtractive.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames(item.className, 'border-feature border')}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="theme">主题</h2>
        <p>边框工具类设有 <code>12</code> 种主题颜色。</p>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.theme.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames('border border-feature', item.className)}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="radius">半径</h2>
        <p>为元素添加半径类，设置元素的角半径。</p>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.round.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames('border-feature', item.className)}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="style">边框风格</h2>
        <p>为元素添加边框风格类，设置边框的风格。</p>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.style.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames('border-feature', item.className)}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="width">边框宽度</h2>
        <p>为元素添加边框宽度类，设置边框的宽度，<code>1px ~ 10px</code>。</p>
        <div className={classnames('util-border')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BORDER.weight.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index}>
                            <div className={classnames('border-feature', item.className)}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
