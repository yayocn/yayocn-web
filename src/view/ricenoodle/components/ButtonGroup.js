import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// exlint-disable-next-line
const ANCHOR = 'javascript:;';

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
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
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
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
  <div class="dropdown">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
      Dropdown
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</div>`;
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>按钮组 <code>Button group</code></h1>
        <p className="font-2x font-100">使用按钮组将一系列按钮组合在一条线上。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
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
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
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
        <h2>尺寸</h2>
        <p>不要将按钮大小调整类应用于组中的每个按钮，只需将 <code>.btn-group-*</code> 添加到每个组。</p>
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
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
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
        <h2>按钮组块</h2>
        <p>按钮组块将占满父元素的宽度。</p>
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
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
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
        <h2>嵌套下拉框</h2>
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
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
                                <div class="dropdown">
                                  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                    Dropdown
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href={ANCHOR}>Action</a>
                                    <a class="dropdown-item" href={ANCHOR}>Another action</a>
                                    <a class="dropdown-item" href={ANCHOR}>Something else here</a>
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
        <h2>垂直按钮组</h2>
        <p>使一组按钮垂直堆叠而不是水平堆叠。 此处不支持拆分按钮下拉菜单。</p>
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
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
                                <button type="button" class="btn btn-secondary">Button</button>
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
