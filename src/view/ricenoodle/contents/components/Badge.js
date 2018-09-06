import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';
const BADGE = {
  theme: [
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
  ],
  link: [
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
  ],
  pill: [
    { title: 'Primary', key: '', subTitle: '', className: 'badge badge-pill badge-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'badge badge-pill badge-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'badge badge-pill badge-success', },
    { title: 'Info', key: '', subTitle: '', className: 'badge badge-pill badge-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'badge badge-pill badge-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'badge badge-pill badge-danger', },
    { title: 'White', key: '', subTitle: '', className: 'badge badge-pill badge-white', },
    { title: 'Light', key: '', subTitle: '', className: 'badge badge-pill badge-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'badge badge-pill badge-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'badge badge-pill badge-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'badge badge-pill badge-black', },
  ],
};

export default class Badge extends Component {

  createCode = (target) => {
    const data = BADGE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<span class="${item.className}">${item.title}</span>
      
`;
      } else {
        code += `<span class="${item.className}">${item.title}</span>`;
      }
    })

    return code;
  }

  createLinkCode = (target = 'link') => {
    const data = BADGE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<a href="#" class="${item.className}">${item.title}</a>
      
`;
      } else {
        code += `<a href="/" class="${item.className}">${item.title}</a>`;
      }
    })

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>便签 <code>Badge</code></h1>
        <p className="font-2x font-100">便签组件可以用来计数或者包裹标签。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="theme">主题</h2>
        <p>Ricenoodle 提供 <code>11</code> 种主题。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BADGE.theme.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <span className={classnames(item.className, 'badge-feature')}>
                                {item.title}
                              </span>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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
        <h2 id="link">锚点</h2>
        <p>在 <code>&lt;a&gt;</code> 上使用 <code>badge</code>。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BADGE.link.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index}>
                              <a href={ANCHOR} className={classnames(item.className, 'badge-feature')}>
                                {item.title}
                              </a>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createLinkCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="pill">胶囊</h2>
        <p>使用 <code>.badge-pill</code> 类使便签显示成胶囊样式。也可以使用 <code>.border-round-circle</code>。</p>

        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">

                    </div>
                    {
                      BADGE.pill.map((item, index) => {
                        return (
                          <div className="block-inline mb-10 mr-5" key={index} >
                            <span className={classnames(item.className, 'badge-feature')}>
                              {item.title}
                            </span>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('pill')
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
