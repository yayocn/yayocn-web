import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

export default class Navbar extends Component {

  createCode = () => {
    let code = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline mv-5">
      <input class="form-control" type="search" placeholder="Search"/>
      <button class="btn btn-default" type="submit">Search</button>
    </form>
  </div>
</nav>`;

    return code;
  }

  createExtendCode = () => {
    let code = `<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-20">
    <h5 class="text-white h3">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>导航条 <code>Navbar</code></h1>
        <p className="font-2x font-100">Ricenoodle 的响应式导航，包括对品牌，导航等的支持，包括对折叠插件的支持。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="prepare">前奏</h2>
        <ul className="ph-30">
          <li>导航栏需要使用 <code>.navbar-expand [-sm | -md | -lg | -xl]</code> 包装 <code>.navbar</code> 以进行响应式折叠和颜色方案类。</li>
          <li>导航栏默认使流布局，将其放在 <code>.container .container-fluid</code> 中限制其宽度。</li>
          <li>使用我们的 <a href="/ricenoodle/utilities/space">Space</a> 和 <a href="/ricenoodle/utilities/flex">Flex</a> 来控制导航栏中的间距和对齐。</li>
        </ul>

        <div className="divider divider-lg"></div>

        <h2 id="example">实例</h2>
        <p>Navbars内置了对少数子组件的支持。 根据需要选择以下内容：</p>
        <ul className="ph-30">
          <li><code>.navbar-brand</code> 用于公司，产品，项目等的名字或者logo。</li>
          <li><code>.navbar-nav</code> 控制全高且轻量的导航（包括支持下拉菜单）。 </li>
          <li><code>.navbar-toggler</code> 控制导航栏的展开状态。</li>
          <li><code>.navbar-text</code> 用于垂直居中的文本字符串。</li>
          <li><code>.collapse.navbar-collapse</code> 通过父断点对导航栏内容进行分组和隐藏。</li>
        </ul>
        <div className={classnames('util-navbar')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href={ANCHOR}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href={ANCHOR}>Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href={ANCHOR}>Link</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href={ANCHOR} id="navbarDropdown" data-toggle="dropdown">
                                Dropdown
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href={ANCHOR}>Action</a>
                                <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href={ANCHOR}>Something else here</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href={ANCHOR}>Disabled</a>
                            </li>
                          </ul>
                          <form className="form-inline mv-5">
                            <input className="form-control" type="search" placeholder="Search"/>
                            <button className="btn btn-default" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="theme">主题</h2>
        <p>主题分 <code>.nav-light</code> 和 <code>.nav-dark</code>, 在此基础上添加 <code>.bg- [ primary | secondary | ...]</code>。</p>
        <div className={classnames('util-navbar')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href={ANCHOR}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href={ANCHOR}>Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href={ANCHOR}>Link</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href={ANCHOR} id="navbarDropdown" data-toggle="dropdown">
                                Dropdown
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href={ANCHOR}>Action</a>
                                <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href={ANCHOR}>Something else here</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href={ANCHOR}>Disabled</a>
                            </li>
                          </ul>
                          <form className="form-inline mv-5">
                            <input className="form-control" type="search" placeholder="Search"/>
                            <button className="btn btn-default" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>

                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-20">
                        <a className="navbar-brand" href={ANCHOR}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href={ANCHOR}>Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href={ANCHOR}>Link</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href={ANCHOR} id="navbarDropdown" data-toggle="dropdown">
                                Dropdown
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href={ANCHOR}>Action</a>
                                <a className="dropdown-item" href={ANCHOR}>Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href={ANCHOR}>Something else here</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href={ANCHOR}>Disabled</a>
                            </li>
                          </ul>
                          <form className="form-inline mv-5">
                            <input className="form-control" type="search" placeholder="Search"/>
                            <button className="btn btn-default" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="expand">展开</h2>
        <p>有时您希望使用折叠插件触发页面上其他位置的隐藏内容。 因为我们的插件适用于 <code>id</code> 和数据目标匹配，所以很容易完成！</p>
        <div className={classnames('util-navbar')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-20">
                          <h5 className="text-white h3">Collapsed content</h5>
                          <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                      </div>
                      <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createExtendCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
