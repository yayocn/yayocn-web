import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { NO_LINK } from '../../../../constants/const';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'nav');

export default class Nav extends Component {

  createCode = () => {
    let code = `<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>`;

    return code;
  }

  createNavCode = () => {
    let code = `<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>`;

    return code;
  }

  createCenterCode = () => {
    let code = `<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>`;

    return code;
  }

  createVerticalCode = () => {
    let code = `<nav class="nav flex-column">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>`;

    return code;
  }

  createPillCode = () => {
    let code = `<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>`;

    return code;
  }

  createFillCode = () => {
    let code = `<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>`;

    return code;
  }

  createTabCode = () => {
    let code = `<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade bg-primary p-50 show active" id="home"></div>
  <div class="tab-pane fade bg-secondary p-50" id="profile"></div>
  <div class="tab-pane fade bg-warning p-50" id="contact"></div>
</div>`;

    return code;
  }

  createDropdownCode = () => {
    let code = `<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="example">实例</h2>
        <p>导航共享通用标记和样式，从基本 <code>.nav</code> 类到活动和禁用状态。 交换修饰符类以在每种样式之间切换。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>
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

        <h2 id="nav"><code>nav</code> 标签</h2>
        <p>直接使用 <code>&lt;nav&gt;</code> 标签。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="nav">
                        <a className="nav-link active" href={NO_LINK}>Active</a>
                        <a className="nav-link" href={NO_LINK}>Link</a>
                        <a className="nav-link" href={NO_LINK}>Link</a>
                        <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createNavCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="center">居中</h2>
        <p><code>nav</code> 使用 <code>flex</code> 布局，因此可以使用 <code>.justify-content-center</code> 类使其居中。</p>
        <p>当然，也使用 <code>.justify-content-end</code> 类使其靠右。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>

                      <ul className="nav justify-content-end mt-20">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCenterCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="vt">垂直</h2>
        <p>使用 <code>.flex-column</code> 类使其垂直显示。</p>
        <p>垂直显示的导航，最好使用 <code>&lt;nav&gt;</code>。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="nav flex-column">
                        <a className="nav-link active" href={NO_LINK}>Active</a>
                        <a className="nav-link" href={NO_LINK}>Link</a>
                        <a className="nav-link" href={NO_LINK}>Link</a>
                        <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createVerticalCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="pill">胶囊样式</h2>
        <p>使用 <code>.nav-pills</code> 类使其变成胶囊的样式。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createPillCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divider divider-lg"></div>

        <h2 id="row">填充整行</h2>
        <p>使用 <code>.nav-fill</code> 使导航填充整行。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Longer nav link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createFillCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="tab">选项卡</h2>
        <p>从上面获取基本导航并添加 <code>.nav-tabs</code> 类以生成选项卡式界面。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile">Profile</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact">Contact</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade bg-primary p-50 show active" id="home"></div>
                        <div className="tab-pane fade bg-secondary p-50" id="profile"></div>
                        <div className="tab-pane fade bg-warning p-50" id="contact"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createTabCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="tab_event" className="mt-20">事件</h3>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/navs/#methods">Bootstrap tabs</a>。</p>

        <div className="divider divider-lg"></div>

        <h2 id="dropdown">下拉导航</h2>
        <p>在导航系统中使用 <code>dropdown</code> 组件。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href={NO_LINK}>Active</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={NO_LINK} role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href={NO_LINK}>Action</a>
                            <a className="dropdown-item" href={NO_LINK}>Another action</a>
                            <a className="dropdown-item" href={NO_LINK}>Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href={NO_LINK}>Separated link</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={NO_LINK}>Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href={NO_LINK}>Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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
      </Fragment>
    );
  }
}
