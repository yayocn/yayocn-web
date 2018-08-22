import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

const ALERT = {
  theme: [
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
  ],
  dismissing: [
    { title: 'Dismissing', key: '', subTitle: '', className: 'alert alert-success alert-dismissible fade show', },
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
  大江东去，浪淘尽，<a href="#" class="alert-link">千古风流人物</a>。故垒西边，人道是，三国周郎赤壁。
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  大江东去，浪淘尽，<a href="#" class="alert-link">千古风流人物</a>。故垒西边，人道是，三国周郎赤壁。
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
  羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
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
  羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
  <button type="button" class="close" data-dismiss="alert">
    <span class="mark-close"></span>
  </button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
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
  <h3 class="alert-heading">江城子 . 密州出猎</h3>
  <p>老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。 为报倾城随太守，亲射虎，看孙郎。 酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐？ 会挽雕弓如满月，西北望，射天狼。</p>
  <hr/>
  <p>《江城子·密州出猎》是宋代文学家苏轼于密州知州任上所作的一首词。此词表达了强国抗敌的政治主张，抒写了渴望报效朝廷的壮志豪情。</p>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <h3 class="alert-heading">江城子 . 密州出猎</h3>
  <p>老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。 为报倾城随太守，亲射虎，看孙郎。 酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐？ 会挽雕弓如满月，西北望，射天狼。</p>
  <hr/>
  <p>《江城子·密州出猎》是宋代文学家苏轼于密州知州任上所作的一首词。此词表达了强国抗敌的政治主张，抒写了渴望报效朝廷的壮志豪情。</p>
</div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>警告框 <code>Alert</code></h1>
        <p className="font-2x font-100">使用少量可用且灵活的警报消息为用户操作提供上下文反馈消息。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>主题</h2>
        <p>Ricenoodle 提供 <code>11</code> 种主题。</p>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.theme.map((item, index) => {
                        return (
                          <div className="col-lg-6 col-12" key={index} >
                            <div className={classnames(item.className, style['alert-feature'])}>
                              莫听穿林打叶声，何妨吟啸且徐行。 竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
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
                      this.createCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>锚点</h2>
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
                          <div className="col-lg-6 col-12 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              大江东去，浪淘尽，<a href={ANCHOR} className="alert-link">千古风流人物</a>。故垒西边，人道是，三国周郎赤壁。
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
        <h2>可关闭的警告框</h2>
        <p>要实现 <code>alert</code> 的销毁，需要：</p>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code> & <code>ricenoodle.js</code>。</li>
          <li>额外添加 <code>.alert-dismissible</code> 类。</li>
          <li>如果想要动画效果，再额外添加 <code>.fade .show</code> 类。</li>
          <li>添加一个属性包含了 <code>class="close" data-dismiss="alert"</code> 的销毁按钮。</li>
        </ul>

        <h3 className="mt-20">使用 <code>&amp;time;</code></h3>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.dismissing.map((item, index) => {
                        return (
                          <div className="col-lg-6 col-12 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
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

        <h3 className="mt-20">使用 <code>.mark-close</code></h3>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.dismissing.map((item, index) => {
                        return (
                          <div className="col-lg-6 col-12 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              羽扇纶巾，谈笑间，<strong>樯橹灰飞烟灭</strong>。
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

        <h3 className="mt-20">事件</h3>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/alerts/#javascript-behavior" target="_blank" rel="noopener noreferrer">Bootstrap alert</a>。</p>

        <div className="divider divider-lg"></div>
        <h2>附加内容</h2>
        <p>警告框还可以包含其他HTML元素，如标题，段落和分隔符。</p>
        <div className={classnames(style['util-alert'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      ALERT.additional.map((item, index) => {
                        return (
                          <div className="col-lg-6 col-12 mb-10" key={index}>
                            <div className={classnames(item.className, style['alert-feature'])}>
                              <h3 class="alert-heading">江城子 . 密州出猎</h3>
                              <p>老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。 为报倾城随太守，亲射虎，看孙郎。 酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐？ 会挽雕弓如满月，西北望，射天狼。</p>
                              <hr/>
                              <p>《江城子·密州出猎》是宋代文学家苏轼于密州知州任上所作的一首词。此词表达了强国抗敌的政治主张，抒写了渴望报效朝廷的壮志豪情。</p>
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
