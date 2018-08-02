import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BUTTON = {
  situation: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
    { title: 'Primary', key: '', subTitle: '', className: 'btn btn-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'btn btn-success', },
    { title: 'Info', key: '', subTitle: '', className: 'btn btn-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'btn btn-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'btn btn-danger', },
    { title: 'Dark', key: '', subTitle: '', className: 'btn btn-dark', },
  ],
  outline: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-outline', },
    { title: 'Primary', key: '', subTitle: '', className: 'btn btn-primary-outline', },
    { title: 'Secondary', key: '', subTitle: '', className: 'btn btn-secondary-outline', },
    { title: 'Success', key: '', subTitle: '', className: 'btn btn-success-outline', },
    { title: 'Info', key: '', subTitle: '', className: 'btn btn-info-outline', },
    { title: 'Warning', key: '', subTitle: '', className: 'btn btn-warning-outline', },
    { title: 'Danger', key: '', subTitle: '', className: 'btn btn-danger-outline', },
    { title: 'Dark', key: '', subTitle: '', className: 'btn btn-dark-outline', },
  ],
  link: [
    { title: 'Link', key: '', subTitle: '', className: 'btn btn-link', },
  ],
  size: [
    { title: 'Small', key: '', subTitle: '', className: 'btn btn-primary btn-sm', },
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-primary', },
    { title: 'Large', key: '', subTitle: '', className: 'btn btn-primary btn-lg', },
    { title: 'Huge', key: '', subTitle: '', className: 'btn btn-primary btn-hg', },
  ],
  round: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-primary', },
    { title: 'Round', key: '', subTitle: '', className: 'btn btn-primary btn-round', },
    { title: 'Circle', key: '', subTitle: '', className: 'btn btn-primary btn-circle', },
  ],
  block: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-primary', },
    { title: 'Block', key: '', subTitle: '', className: 'btn btn-primary btn-block', },
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
        <h2>说明</h2>
        <p>将Ricenoodle的自定义按钮样式用于表单，对话框等中的操作，并支持多种大小，状态等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <p>Ricenoodle包含了几种预设的按钮样式，每种样式都有其特定的意义。</p>
        <div className={classnames(style['util-button'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTON.situation.map((item, index) => {
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
                      this.createCode('situation')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Outline</h3>
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
        <h3>Link</h3>
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
        <h3>Size</h3>
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
        <h3>Round</h3>
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
        <h3>Block</h3>
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
