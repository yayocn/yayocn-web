import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

const DROPDOWN = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
  ],
  theme: [
    { title: 'Default', key: '', subTitle: '', className: 'btn', },
    { title: 'Primary', key: 'primary', subTitle: '', className: 'btn btn-primary', },
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
  size: [
    { title: 'Small', key: 'primary', subTitle: '', className: 'btn btn-sm btn-secondary', },
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', },
    { title: 'Large', key: '', subTitle: '', className: 'btn btn-lg btn-secondary', },
    { title: 'Huge', key: '', subTitle: '', className: 'btn btn-hg btn-secondary', },
  ],
  position: [
    { title: 'Dropup', key: '', subTitle: '', className: 'dropup btn-group', },
    { title: 'Dropright', key: '', subTitle: '', className: 'dropright btn-group', },
    { title: 'Dropdown', key: '', subTitle: '', className: 'dropdown btn-group', },
    { title: 'Dropleft', key: '', subTitle: '', className: 'dropleft btn-group', },
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
    ${item.title}
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
    ${item.title}
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">Action</a>
    <a class="dropdown-item">Another action</a>
    <a class="dropdown-item">Something else here</a>
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
  <h2 class="dropdown-header">Dropdown header</h2>
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
  <form className="ph-20 pv-15">
    <div class="form-group">
      <label htmlFor="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div class="form-group">
      <label htmlFor="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div class="checkbox checkbox-secondary">
      <input type="checkbox"id="dropdownCheck" />
        <label class="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
    </div>
    <button type="submit" class="btn btn-secondary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href=#"">Forgot password?</a>
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
        <h1>下拉菜单 <code>Dropdown</code></h1>
        <p className="font-2x font-100">使用 Ricenoodle 下拉插件切换上下文叠加以显示链接列表等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>前奏</h2>
        <p>使用下拉菜单组件，你需要：</p>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code>。</li>
          <li>引入 <code>popper.js</code>。</li>
          <li>引入 <code>ricenoodle.js</code>。</li>
        </ul>
        <p><code>dropdown</code> 的外层元素是 <code>block</code>，可以添加 <code>.block-inline</code> 进行更改。</p>

        <div className="divider divider-lg"></div>

        <h2>实例</h2>
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
                                <a className="dropdown-item" href={ANCHOR}>Action</a>
                                <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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
        <p>可以结合 <a href="/ricenoodle/button">Button</a> 对 toggle button 进行设置。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DROPDOWN.theme.map((item, index) => {
                          return(
                            <div className="dropdown block-inline mr-5" key={index}>
                              <button className={classnames(item.className, 'dropdown-toggle')} type="button" data-toggle="dropdown">
                                Dropdown
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href={ANCHOR}>Action</a>
                                <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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
        <h2>组合</h2>
        <p>可以通过 <code>.btn-group</code> 将按钮和下拉菜单组合使用。</p>
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
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
                          <a className="dropdown-item" href={ANCHOR}>Separated link</a>
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
        <h2>尺寸</h2>
        <p>通过设置 <code>.dropdown-toggle</code> 来控制下拉菜单的尺寸。</p>
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
                                  <a className="dropdown-item" href={ANCHOR}>Action</a>
                                  <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                  <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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
        <h2>位置</h2>
        <p>通过添加 <code>.dropup | .dropright | .dropdown | .dropleft</code> 类设置菜单的位置。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12 pt-relative" style={{ height: '200px'}}>
                      <div className="pt-absolute pt-center text-center">
                        {
                          DROPDOWN.position.map((item, index) => {
                            return (
                              <div className={classnames(item.className, 'mr-5')} key={index}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                  {item.title}
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item">Action</a>
                                  <a className="dropdown-item">Another action</a>
                                  <a className="dropdown-item">Something else here</a>
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
        <h2>菜单</h2>
        <h3 className="mt-20">激活状态</h3>
        <p>在<code>.dropdown-item</code> 上添加 <code>.active</code> 激活该项。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item active" href={ANCHOR}>Action</a>
                          <a className="dropdown-item" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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

        <h3 className="mt-20">禁用状态</h3>
        <p>在<code>.dropdown-item</code> 上添加 <code>.disabled</code> 激活该项。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item disabled" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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

        <h3 className="mt-20">对齐</h3>
        <p>下拉菜单默认是左对齐，添加 <code>.dropdown-menu-right</code> 设置为右对齐。</p>
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
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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

        <h3 className="mt-20">子标题</h3>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <h2 className="dropdown-header">Dropdown header</h2>
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item disabled" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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

        <h3 className="mt-20">分割线</h3>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="pt-relative">
                        <div className="dropdown-menu block pt-relative">
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item disabled" href={ANCHOR}>Another action</a>
                          <div className="divider divider-sm"></div>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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

        <h3 className="mt-20">文本内容</h3>
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

        <h3 className="mt-20">表单</h3>
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
                              <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleDropdownFormPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                            </div>
                            <div className="checkbox checkbox-secondary">
                              <input type="checkbox"id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                  Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-secondary">Sign in</button>
                          </form>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href={ANCHOR}>New around here? Sign up</a>
                          <a className="dropdown-item" href={ANCHOR}>Forgot password?</a>
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

        <h3 className="mt-20">偏移</h3>
        <p>通过设置 <code>.data-offset</code> 设置菜单相对于 <code>.dropdown-toggle</code> 的偏移位置。</p>
        <div className={classnames(style['util-dropdown'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="dropdown">
                        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" data-offset="10,20">
                          data-offset
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href={ANCHOR}>Action</a>
                          <a className="dropdown-item" href={ANCHOR}>Another action</a>
                          <a className="dropdown-item" href={ANCHOR}>Something else here</a>
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
        <h2>事件</h2>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/dropdowns/#usage" target="_blank" rel="noopener noreferrer">Bootstrap dropdown</a>。</p>
      </PageWrapper>
    );
  }
}
