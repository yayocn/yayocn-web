import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DROPDOWN = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: '', },
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
};

export default class Dropdown extends Component {

  createCode = (target) => {
    const data = DROPDOWN[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="dropdown">
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
        code += `<div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
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
                        <div className="dropdown">
                          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                            Dropdown
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
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
      </PageWrapper>
    );
  }
}
