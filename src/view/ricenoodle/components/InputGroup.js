import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

const INPUTGROUP = {
  default: [
    { title: 'Default', key: 'default', subTitle: '', className: 'input-group', btnClass: 'btn btn-default', },
  ],
  theme: [
    { title: 'Primary', key: 'primary', subTitle: '', className: 'input-group input-group-primary', btnClass: 'btn btn-primary', },
    { title: 'Secondary', key: 'secondary', subTitle: '', className: 'input-group input-group-secondary', btnClass: 'btn btn-secondary', },
    { title: 'Success', key: 'success', subTitle: '', className: 'input-group input-group-success', btnClass: 'btn btn-success', },
    { title: 'Info', key: 'info', subTitle: '', className: 'input-group input-group-info', btnClass: 'btn btn-info', },
    { title: 'Warning', key: 'warning', subTitle: '', className: 'input-group input-group-warning', btnClass: 'btn btn-warning', },
    { title: 'Danger', key: 'danger', subTitle: '', className: 'input-group input-group-danger', btnClass: 'btn btn-danger', },
    { title: 'White', key: 'white', subTitle: '', className: 'input-group input-group-white', btnClass: 'btn btn-white', },
    { title: 'Light', key: 'light', subTitle: '', className: 'input-group input-group-light', btnClass: 'btn btn-light', },
    { title: 'Muted', key: 'muted', subTitle: '', className: 'input-group input-group-muted', btnClass: 'btn btn-muted', },
    { title: 'Dark', key: 'dark', subTitle: '', className: 'input-group input-group-dark', btnClass: 'btn btn-dark', },
    { title: 'Black', key: 'black', subTitle: '', className: 'input-group input-group-black', btnClass: 'btn btn-black', },
  ],
  size: [
    { title: 'Small', key: '', subTitle: '', className: 'input-group input-group-sm', btnClass: 'btn btn-default', },
    { title: 'Default', key: '', subTitle: '', className: 'input-group', btnClass: 'btn btn-default', },
    { title: 'Large', key: '', subTitle: '', className: 'input-group input-group-lg', btnClass: 'btn btn-default', },
    { title: 'Huge', key: '', subTitle: '', className: 'input-group input-group-hg', btnClass: 'btn btn-default', },
  ],
  border: [
    { title: 'Underline', key: '', subTitle: '', className: 'input-group input-group-underline', btnClass: 'btn btn-default', },
    { title: 'Round', key: '', subTitle: '', className: 'input-group input-group-round', btnClass: 'btn btn-default', },
    { title: 'Circle', key: '', subTitle: '', className: 'input-group input-group-circle', btnClass: 'btn btn-default', },
  ],
};

export default class InputGroup extends Component {

  createCode = (target) => {
    const data = INPUTGROUP[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control"/>
  <div class="input-group-btn">
    <button type="button" class="${item.btnClass}">confirm</button>
  </div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control"/>
  <div class="input-group-btn">
    <button type="button" class="${item.btnClass}">confirm</button>
  </div>
</div>`;
      }
    })

    return code;
  }

  createBorderCode = (target) => {
    const data = INPUTGROUP[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <input type="text" class="form-control"/>
  <div class="input-group-btn">
    <button type="button" class="${item.btnClass}">confirm</button>
  </div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <input type="text" class="form-control"/>
  <div class="input-group-btn">
    <button type="button" class="${item.btnClass}">confirm</button>
  </div>
</div>`;
      }
    })

    return code;
  }

  createDropdownCode = () => {
    let code = `<div class="input-group">
  <div class="input-group-btn">
    <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
          Dropdown
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item disabled" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
  </div>
  <input type="text" class="form-control"/>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>输入框组 <code>Input group</code></h1>
        <p>通过在文本输入，自定义选择和自定义文件输入的任一侧添加文本，按钮或按钮组，轻松扩展表单控件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>在输入框的两侧放置一个附加组件或按钮。 请记住将 <code>&lt;label&gt;</code> 元素放在输入框组之外。</p>
        <div className={classnames(style['util-inputgroup'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-3 col-4">
                      {
                        INPUTGROUP.default.map((item, index) => {
                          return (
                            <div className={item.className} key={index}>
                              <span className="input-group-addon">$</span>
                              <input type="text" className="form-control"/>
                              <div className="input-group-btn">
                                <button type="button" className={item.btnClass}>confirm</button>
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
        <h2>主题</h2>
        <p>Ricenoodle 提供了 <code>11</code> 种主题颜色。</p>
        <div className={classnames(style['util-inputgroup'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-3 col-4">
                      {
                        INPUTGROUP.theme.map((item, index) => {
                          return (
                            <div className={classnames('p-10', {'bg-dark': item.key ==='white'})} key={index}>
                              <div className={classnames(item.className)}>
                                <span className="input-group-addon">$</span>
                                <input type="text" className="form-control"/>
                                <div className="input-group-btn">
                                  <button type="button" className={item.btnClass}>confirm</button>
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
                      this.createCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>尺寸</h2>
        <div className={classnames(style['util-inputgroup'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-3 col-4">
                      {
                        INPUTGROUP.size.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-20')} key={index}>
                              <span className="input-group-addon">$</span>
                              <input type="text" className="form-control"/>
                              <div className="input-group-btn">
                                <button type="button" className={item.btnClass}>confirm</button>
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
        <h2>边框</h2>
        <div className={classnames(style['util-inputgroup'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-3 col-4">
                      {
                        INPUTGROUP.border.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-20')} key={index}>
                              <input type="text" className="form-control"/>
                              <div className="input-group-btn">
                                <button type="button" className={item.btnClass}>confirm</button>
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
                      this.createBorderCode('border')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>下拉框</h2>
        <div className={classnames(style['util-inputgroup'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-3 col-4">
                      <div className="input-group">
                        <div className="input-group-btn">
                          <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                              Dropdown
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href={ANCHOR}>Action</a>
                              <a className="dropdown-item disabled" href={ANCHOR}>Another action</a>
                              <a className="dropdown-item" href={ANCHOR}>Something else here</a>
                            </div>
                          </div>
                        </div>
                        <input type="text" className="form-control"/>
                      </div>
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
      </PageWrapper>
    );
  }
}
