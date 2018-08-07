import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const ALERT = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'alert alert-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'alert alert-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'alert alert-success', },
    { title: 'Info', key: '', subTitle: '', className: 'alert alert-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'alert alert-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'alert alert-danger', },
    { title: 'White', key: '', subTitle: '', className: 'alert alert-white', },
    { title: 'Light', key: '', subTitle: '', className: 'alert alert-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'alert alert-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'alert alert-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'alert alert-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'alert alert-transparent', },
  ],
  linkColor: [
    { title: 'Primary', key: '', subTitle: '', className: 'alert alert-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'alert alert-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'alert alert-success', },
    { title: 'Info', key: '', subTitle: '', className: 'alert alert-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'alert alert-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'alert alert-danger', },
    { title: 'White', key: '', subTitle: '', className: 'alert alert-white', },
    { title: 'Light', key: '', subTitle: '', className: 'alert alert-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'alert alert-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'alert alert-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'alert alert-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'alert alert-transparent', },
  ],
  dismissing: [
    { title: 'Dismissing', key: '', subTitle: '', className: 'alert alert-primary alert-dismissible fade show', },
  ],
  additional: [
    { title: 'Additional', key: '', subTitle: '', className: 'alert alert-success', },
  ],
};

export default class Alert extends Component {

  createCode = (target) => {
    const data = ALERT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}"> ... </div>
      
`;
      } else {
        code += `<div class="${item.className}"> ... </div>`;
      }
    })

    return code;
  }

  createLinkColorCode = (target = 'linkColor') => {
    const data = ALERT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  'A simple ${item.title} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.'
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  'A simple ${item.title} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.'
</div>`;
      }
    })

    return code;
  }

  createDismissingCode = (target = 'dismissing') => {
    const data = ALERT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
 </div>`;
      }
    })

    return code;
  }

  createDismissingCodeWithMark = (target = 'dismissing') => {
    const data = ALERT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert">
    <span class="mark-close"></span>
  </button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert">
    <span class="mark-close"></span>
  </button>
 </div>`;
      }
    })

    return code;
  }

  createAdditionalCode = (target = 'additional') => {
    const data = ALERT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用背景类快速设置背景色。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>情景背景色</h3>
        <p>预设 <code>12</code> 种情景背景色。</p>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.situation.map((item, index) => {
                        return (
                          <div className="col-4 mb-10" key={index} >
                            <div className={classnames(item.className, style['alert-feature'])}>
                              A simple {item.title} alert. Give it a click if you like.
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('situation')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Link Color</h3>
        <p>使用 <code>.alert-link</code> 类快速设置 <code>alert</code> 中的锚点样式。</p>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.linkColor.map((item, index) => {
                        return (
                          <div className="col-4 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              A simple {item.title} alert with <a href="" class="alert-link">an example link</a>. Give it a click if you like.
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createLinkColorCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Dismissing</h3>
        <p>实现 <code>alert</code> 的销毁。你需要：</p>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code> & <code>ricenoodle.js</code>。</li>
          <li>额外添加 <code>.alert-dismissible</code> 类。</li>
          <li>如果想要动画效果，再额外添加 <code>.fade .show</code> 类。</li>
          <li>添加一个属性包含了 <code>class="close" data-dismiss="alert"</code> 的销毁按钮。</li>
        </ul>

        <h4>使用 <code>&amp;time;</code></h4>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.dismissing.map((item, index) => {
                        return (
                          <div className="col-6 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                              <button type="button" class="close" data-dismiss="alert">
                                <span>&times;</span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDismissingCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">使用 <code>.mark-close</code></h4>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.dismissing.map((item, index) => {
                        return (
                          <div className="col-6 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                              <button type="button" class="close" data-dismiss="alert">
                                <span className="mark-close"></span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDismissingCodeWithMark()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">事件</h4>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/alerts/#javascript-behavior" target="_blank" rel="noopener noreferrer">Bootstrap</a></p>

        <div className="divider divider-lg"></div>
        <h3>Additional</h3>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.additional.map((item, index) => {
                        return (
                          <div className="col-6 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              <h4 class="alert-heading">Well done!</h4>
                              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                              <hr/>
                              <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createAdditionalCode()
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
