import React, { Component, Fragment } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';
import style from '../style.scss';
import { find } from 'lodash';

const POSITION = {
  type: [
    { title: 'Static', key: 'static', subTitle: '', className: 'pt-static', },
    { title: 'Relative', key: 'relative', subTitle: '', className: 'pt-relative', },
    { title: 'Absolute', key: 'absolute', subTitle: '', className: 'pt-absolute', },
    { title: 'Fixed', key: 'fixed', subTitle: '', className: 'pt-fixed', },
    { title: 'Sticky', key: 'sticky', subTitle: '', className: 'pt-sticky', },
  ],
  position: [
    { title: '水平居中', key: 'hc', subTitle: '', className: 'pt-hc', },
    { title: '垂直居中', key: 'vc', subTitle: '', className: 'pt-absolute pt-vc', },
    { title: '水平垂直居中', key: 'center', subTitle: '', className: 'pt-absolute pt-center', },
    { title: '居于顶部', key: 'top', subTitle: '', className: 'pt-absolute pt-top', },
    { title: '居于右侧', key: 'right', subTitle: '', className: 'pt-absolute pt-right', },
    { title: '居于底部', key: 'bottom', subTitle: '', className: 'pt-absolute pt-bottom', },
    { title: '居于左侧', key: 'left', subTitle: '', className: 'pt-absolute pt-left', },
    { title: '填充', key: 'full', subTitle: '', className: 'pt-absolute pt-full', },
  ]
};

export default class Position extends Component {

  createCode = (target) => {
    const data = POSITION[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}"> ... </div>
      
`;
      } else {
        code += `<div class="${item.className}"> ... </div>`;
      }
    });

    return code;
  };

  createSeparatedCode = (target, itemKey) => {
    const data = POSITION[target];
    let code = ``;
    const item = find(data, (o) => o.key === itemKey);
    code = `<div class="pt-relative">
  <div class="${item.className}">
    ...
  </div>
</div>`;

    return code;
  };

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用 <code>position</code> 类快速设置元素定位。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>类型</h3>
        <p>预设 <code>static, relative, absolute, fixed, sticky</code> 几种类型。</p>
        <div className={classnames(style['util-position'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <p className="alert-info p-10"><code>sticky</code>需要注意浏览器以及版本。</p>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('type')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>位置</h3>
        <p>位置快速设置时，需要元素的 <code>position</code> 值为 <code>absolute | fixed </code>（水平居中除外）。</p>
        <div className={classnames(style['util-position'])}>
          <div className="row">
            <div className="col-12">
              {
                POSITION.position.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className={classnames('bg-light pt-relative', style['position-view-wrap'])}>
                            {
                              item.key === 'full'
                                ? <div className={classnames('bg-dark', item.className)}></div>
                                : <div className={classnames('bg-dark', style['position-item'], item.className)}></div>
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createSeparatedCode('position', item.key)
                            }
                          </Highlight>
                        </div>
                      </div>
                    </Fragment>
                  );
                })
              }
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
