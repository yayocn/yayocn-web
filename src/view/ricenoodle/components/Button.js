import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BUTTON = {
  theme: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
    { title: 'Primary', key: '', subTitle: '', className: 'btn btn-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'btn btn-success', },
    { title: 'Info', key: '', subTitle: '', className: 'btn btn-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'btn btn-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'btn btn-danger', },
    { title: 'White', key: '', subTitle: '', className: 'btn btn-white', },
    { title: 'Light', key: '', subTitle: '', className: 'btn btn-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'btn btn-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'btn btn-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'btn btn-black', },
  ],
  outline: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-outline', },
    { title: 'Primary', key: '', subTitle: '', className: 'btn btn-primary-outline', },
    { title: 'Secondary', key: '', subTitle: '', className: 'btn btn-secondary-outline', },
    { title: 'Success', key: '', subTitle: '', className: 'btn btn-success-outline', },
    { title: 'Info', key: '', subTitle: '', className: 'btn btn-info-outline', },
    { title: 'Warning', key: '', subTitle: '', className: 'btn btn-warning-outline', },
    { title: 'Danger', key: '', subTitle: '', className: 'btn btn-danger-outline', },
    { title: 'White', key: '', subTitle: '', className: 'btn btn-white-outline', },
    { title: 'Light', key: '', subTitle: '', className: 'btn btn-light-outline', },
    { title: 'Muted', key: '', subTitle: '', className: 'btn btn-muted-outline', },
    { title: 'Dark', key: '', subTitle: '', className: 'btn btn-dark-outline', },
    { title: 'Black', key: '', subTitle: '', className: 'btn btn-black-outline', },
  ],
  link: [
    { title: 'Link', key: '', subTitle: '', className: 'btn btn-link', },
  ],
  size: [
    { title: 'Small', key: '', subTitle: '', className: 'btn btn-secondary btn-sm', },
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Large', key: '', subTitle: '', className: 'btn btn-secondary btn-lg', },
    { title: 'Huge', key: '', subTitle: '', className: 'btn btn-secondary btn-hg', },
  ],
  round: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Round', key: '', subTitle: '', className: 'btn btn-secondary btn-round', },
    { title: 'Circle', key: '', subTitle: '', className: 'btn btn-secondary btn-circle', },
  ],
  block: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Block', key: '', subTitle: '', className: 'btn btn-secondary btn-block', },
  ],
};

export default class Button extends Component {

  createCode = (target) => {
    const data = BUTTON[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<button type="button" class="${item.className}">${item.title}</button>

`;
      } else {
        code += `<button type="button" class="${item.className}">${item.title}</button>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>按钮 <code>Button</code></h1>
        <p className="font-2x font-100">将 Ricenoodle 的自定义按钮用于表单，对话框等中的操作，并支持多种大小，状态等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>Ricenoodle 提供了几种预设的按钮样式，每种样式都有其特定的意义。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTON.theme.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <button type="button" className={classnames(item.className, style['button-feature'])}>
                                {item.title}
                              </button>
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
                      this.createCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>轮廓按钮</h2>
        <p>需要一个按钮，但不需要沉重的背景颜色？ 使用 <code>.btn-outline-*</code> 替换默认修改器类，以删除任何按钮上的所有背景图像和颜色。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTON.outline.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <button type="button" className={classnames(item.className, style['button-feature'])}>
                                {item.title}
                              </button>
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
                      this.createCode('outline')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>锚点</h2>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTON.link.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <button type="button" className={classnames(item.className, style['button-feature'])}>
                                {item.title}
                              </button>
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
                      this.createCode('link')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>尺寸</h2>
        <p>需要更大或更小的按钮？ 添加 <code>.btn-lg | .btn-sm | .btn-hg</code> 以获得更多尺寸。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="flex align-items-end">
                        {
                          BUTTON.size.map((item, index) => {
                            return (
                              <div className="block-inline mb-10 mr-5" key={index} >
                                <button type="button" className={classnames(item.className, style['button-feature'])}>
                                  {item.title}
                                </button>
                              </div>
                            );
                          })
                        }
                      </div>
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
        <h2>半径</h2>
        <p>除了使用针对 <code>button</code> 的特殊类意外，也可以使用 <a href="/ricenoodle/utilities/border">Border</a> 工具类。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTON.round.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <button type="button" className={classnames(item.className, style['button-feature'])}>
                                {item.title}
                              </button>
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
                      this.createCode('round')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>块级按钮</h2>
        <p>块级按钮的宽度占真个父元素的宽度。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-6">
                      {
                        BUTTON.block.map((item, index) => {
                          return (
                            <div className="mb-10 mr-5" key={index} >
                              <button type="button" className={classnames(item.className, style['button-feature'])}>
                                {item.title}
                              </button>
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
                      this.createCode('block')
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
