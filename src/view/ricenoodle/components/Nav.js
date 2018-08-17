import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const NAV = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'badge badge-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'badge badge-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'badge badge-success', },
    { title: 'Info', key: '', subTitle: '', className: 'badge badge-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'badge badge-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'badge badge-danger', },
    { title: 'White', key: '', subTitle: '', className: 'badge badge-white', },
    { title: 'Light', key: '', subTitle: '', className: 'badge badge-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'badge badge-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'badge badge-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'badge badge-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'badge badge-transparent text-muted', },
  ],
};

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
      <PageWrapper>
        <h2>说明</h2>
        <p>导航组件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <p>导航共享通用标记和样式，从基本 <code>.nav</code> 类到活动和禁用状态。 交换修饰符类以在每种样式之间切换。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3><code>nav</code> 标签</h3>
        <p>直接使用 <code>&lt;nav&gt;</code> 标签。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="nav">
                        <a className="nav-link active" href="#">Active</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3>居中</h3>
        <p><code>nav</code> 使用 <code>flex</code> 布局，因此可以使用 <code>.justify-content-center</code> 类使其居中。</p>
        <p>当然，也使用 <code>.justify-content-end</code> 类使其靠右。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>

                      <ul className="nav justify-content-end mt-20">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3>垂直</h3>
        <p>使用 <code>.flex-column</code> 类使其垂直显示。</p>
        <p>垂直显示的导航，最好使用 <code>&lt;nav&gt;</code>。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav className="nav flex-column">
                        <a className="nav-link active" href="#">Active</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3>胶囊样式</h3>
        <p>使用 <code>.nav-pills</code> 类使其变成胶囊的样式。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3>填充整行</h3>
        <p>使用 <code>.nav-fill</code> 使导航填充整行。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Longer nav link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h3>选项卡</h3>
        <p>从上面获取基本导航并添加 <code>.nav-tabs</code> 类以生成选项卡式界面。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
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
                <div className={classnames(common['example-code'])}>
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

        <h4 className="mt-20">事件</h4>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/navs/#methods">Bootstrap Tabs</a></p>

        <div className="divider divider-lg"></div>

        <h3>下拉导航</h3>
        <p>在导航系统中使用 <cdoe>dropdown</cdoe> 组件。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
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
