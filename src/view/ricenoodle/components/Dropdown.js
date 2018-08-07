import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DROPDOWN = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
  ],
  situation: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
    { title: 'Primary', key: 'primary', subTitle: '', className: 'btn btn-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'btn btn-success', },
    { title: 'Info', key: '', subTitle: '', className: 'btn btn-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'btn btn-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'btn btn-danger', },
    { title: 'Dark', key: '', subTitle: '', className: 'btn btn-dark', },
  ],
  size: [
    { title: 'Small', key: 'primary', subTitle: '', className: 'btn btn-sm btn-secondary', },
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Large', key: '', subTitle: '', className: 'btn btn-lg btn-secondary', },
    { title: 'Huge', key: '', subTitle: '', className: 'btn btn-hg btn-secondary', },
  ],
  position: [
    { title: 'Top', key: '', subTitle: '', className: 'dropdown dropup', },
    { title: 'Right', key: '', subTitle: '', className: 'dropdown dropright', },
    { title: 'Down', key: '', subTitle: '', className: 'dropdown', },
    { title: 'Left', key: '', subTitle: '', className: 'dropdown dropleft', },
  ],
};

export default class Dropdown extends Component {

  createCode = (target) => {
    const data = DROPDOWN[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="dropdown">
  <button class="${item.className} dropdown-toggle" type="button" data-toggle="dropdown">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">Action</a>
    <a class="dropdown-item">Another action</a>
    <a class="dropdown-item">Something else here</a>
  </div>
</div>
      
`;
      } else {
        code += `<div class="dropdown">
  <button class="${item.className} dropdown-toggle" type="button" data-toggle="dropdown">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`;
      }
    })

    return code;
  }

  createSituationCode = () => {
    let code = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">Action</a>
    <a class="dropdown-item">Another action</a>
    <a class="dropdown-item">Something else here</a>
  </div>
</div>`;

    return code;
  }

  createGroupCode = () => {
    let code = `<div class="btn-group">
  <button type="button" class="btn btn-secondary">Action</button>
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
    <span class="sr-only">Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>`;

    return code;
  }

  createPositionCode = (target = 'position') => {
    const data = DROPDOWN[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">Action</a>
    <a class="dropdown-item">Another action</a>
    <a class="dropdown-item">Something else here</a>
  </div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`;
      }
    })

    return code;
  }
  
  createActiveCode = () => {
    let code = `<div class="dropdown-menu">
  <a class="dropdown-item active" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;
    
    return code;
  }

  createDisabledCode = () => {
    let code = `<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item disabled" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;

    return code;
  }

  createAliginCode = () => {
    let code = `<div class="dropdown-menu dropdown-menu-right">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;

    return code;
  }

  createHeaderCode = () => {
    let code = `<div class="dropdown-menu">
  <h3 class="dropdown-header">Dropdown header</h3>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;

    return code;
  }

  createDividerCode = () => {
    let code = `<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <div class="divider divider-sm"></div>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;

    return code;
  }

  createTextCode = () => {
    let code = `<div class="dropdown-menu p-20 text-muted">
  <p>Some example text that's free-flowing within the dropdown menu.</p>
  <p>And this is more example text.</p>
</div>`;

    return code;
  }

  createFormCode = () => {
    let code = `<div class="dropdown-menu">
  <form class="ph-20 pv-15">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck">
      <label class="form-check-label" for="dropdownCheck">
        Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>`;

    return code;
  }

  createOffsetCode = () => {
    let code = `<div class="dropdown mr-1">
  <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" data-offset="10,20">
    data-offset
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用下拉插件切换上下文叠加以显示链接列表等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>依赖</h3>
        <p>使用 <code>dropdown</code> 组件，你需要：</p>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code>。</li>
          <li>引入 <code>popper.js</code>。</li>
          <li>引入 <code>ricenoodle.js</code>。</li>
        </ul>
        <p><code>dropdown</code> 的外层元素是 <code>block</code>，可以添加 <code>.block-inline</code> 进行更改。</p>

        <div className="divider divider-lg"></div>

        <h3>实例</h3>
        <p>下拉菜单由控制按钮和菜单列表两部分组成。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DROPDOWN.default.map((item, index) => {
                          return (
                            <div className="dropdown" key={index}>
                              <button className={classnames(item.className, 'dropdown-toggle')} type="button" data-toggle="dropdown">
                                Dropdown
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
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
        <h3>Button</h3>
        <p>可以结合 <a href="/ricenoodle/button">Button</a> 对 toggle button 进行设置。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DROPDOWN.situation.map((item, index) => {
                          return(
                            <div className="dropdown block-inline mr-5" key={index}>
                              <button className={classnames(item.className, 'dropdown-toggle')} type="button" data-toggle="dropdown">
                                Dropdown
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
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
                      this.createSituationCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Group</h3>
        <p>可以通过 <code>.btn-group</code> 将 <code>button</code> 和 <code>dropdown</code> 组合使用。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="btn-group">
                        <button type="button" className="btn btn-secondary">Action</button>
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                          <span className="sr-only">Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                          <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createGroupCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>尺寸</h3>
        <p>通过设置 <code>button</code> 的css类控制dropdown的尺寸。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="flex align-items-end">
                        {
                          DROPDOWN.size.map((item, index) => {
                            return (
                              <div className="dropdown mb-10 mr-5" key={index}>
                                <button className={classnames(item.className, 'dropdown-toggle')} type="button" data-toggle="dropdown">
                                  Dropdown
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                </div>
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
        <h3>位置</h3>
        <p>通过添加 <code>.dropup .dropright .dropleft</code> 类设置 <code>.dropdown-menu</code> 的位置。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="flex align-items-end">
                        {
                          DROPDOWN.position.map((item, index) => {
                            return (
                              <div className={classnames(item.className, 'mr-5')} key={index}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                  {item.title}
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                </div>
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
                      this.createPositionCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Menu</h3>
        <p></p>

        <h4 className="mt-20">Active</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item active" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createActiveCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Disabled</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item disabled" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDisabledCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Alignment</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                          Right-aligned menu
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createAliginCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Header</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <h3 class="dropdown-header">Dropdown header</h3>
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item disabled" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createHeaderCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Divider</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item disabled" href="#">Another action</a>
                          <div className="divider divider-sm"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDividerCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Text</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative p-20 text-muted">
                          <p>Some example text that's free-flowing within the dropdown menu.</p>
                          <p>And this is more example text.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createTextCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Form</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <form className="ph-20 pv-15">
                            <div className="form-group">
                              <label for="exampleDropdownFormEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                            </div>
                            <div className="form-group">
                              <label for="exampleDropdownFormPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                            </div>
                            <div className="checkbox checkbox-primary">
                              <input type="checkbox"id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                  Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                          </form>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">New around here? Sign up</a>
                          <a className="dropdown-item" href="#">Forgot password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createFormCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">Offset</h4>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="dropdown">
                        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                          data-offset
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createOffsetCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divider divider-lg"></div>
        <h3>事件</h3>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/dropdowns/#usage" target="_blank" rel="noopener noreferrer">Bootstrap dropdown</a></p>
      </PageWrapper>
    );
  }
}
