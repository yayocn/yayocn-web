import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BUTTONGROUP = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn-group', },
  ],
  size: [
    { title: 'Small', key: '', subTitle: '', className: 'btn-group btn-group-sm', },
    { title: 'Default', key: '', subTitle: '', className: 'btn-group', },
    { title: 'Large', key: '', subTitle: '', className: 'btn-group btn-group-lg', },
  ],
  block: [
    { title: 'Default', key: '', subTitle: '', className: 'btn-group btn-group-block', },
  ],
  dropdown: [
    { title: 'Default', key: '', subTitle: '', className: 'btn-group', },
  ],
  vt: [
    { title: 'Default', key: '', subTitle: '', className: 'btn-group-vt', },
  ]
};

export default class ButtonGroup extends Component {

  createCode = (target) => {
    const data = BUTTONGROUP[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
</div>`;
      }
    })

    return code;
  }

  createDropdownCode = (target = 'dropdown') => {
    const data = BUTTONGROUP[target];
    let code = ``;
    data.forEach((item, index) => {
      code += `<div class="${item.className}">
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
  <div class="dropdown">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
      Dropdown
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/">Action</a>
      <a class="dropdown-item" href="/">Another action</a>
      <a class="dropdown-item" href="/">Something else here</a>
    </div>
  </div>
</div>`;
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用按钮组将一系列按钮组合起来。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-button-group'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTONGROUP.default.map((item, index) => {
                          return (
                            <div className="mb-10" key={index} >
                              <div className={classnames(item.className, style['button-group-feature'])}>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                              </div>
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
        <h3>Size</h3>
        <div className={classnames(style['util-button-group'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTONGROUP.size.map((item, index) => {
                          return (
                            <div className="mb-10" key={index} >
                              <div className={classnames(item.className, style['button-group-feature'])}>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                              </div>
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
        <h3>Block</h3>
        <div className={classnames(style['util-button-group'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTONGROUP.block.map((item, index) => {
                          return (
                            <div className="w-50 mb-10" key={index} >
                              <div className={classnames(item.className, style['button-group-feature'])}>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                              </div>
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

        <div className="divider divider-lg"></div>
        <h3>Dropdown</h3>
        <div className={classnames(style['util-button-group'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTONGROUP.dropdown.map((item, index) => {
                          return (
                            <div className="mb-10" key={index} >
                              <div className={classnames(item.className, style['button-group-feature'])}>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                                <div class="dropdown">
                                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    Dropdown
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/">Action</a>
                                    <a class="dropdown-item" href="/">Another action</a>
                                    <a class="dropdown-item" href="/">Something else here</a>
                                  </div>
                                </div>
                              </div>
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
                      this.createDropdownCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Vertival</h3>
        <div className={classnames(style['util-button-group'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BUTTONGROUP.vt.map((item, index) => {
                          return (
                            <div className="mb-10" key={index} >
                              <div className={classnames(item.className, style['button-group-feature'])}>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                                <button type="button" class="btn btn-default">Button</button>
                              </div>
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
                      this.createCode('vt')
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
