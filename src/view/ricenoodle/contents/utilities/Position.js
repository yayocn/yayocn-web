import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { find } from 'lodash';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'position');

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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="type">种类</h2>
        <p>Ricenoodle 提供了 <code>static, relative, absolute, fixed, sticky</code> 几种类型。</p>
        <p className="alert alert-warning"><code>sticky</code>需要注意浏览器以及版本。</p>
        <div className={classnames('util-position')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>

                </div>
                <div className={classnames('example-code')}>
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
        <h2 id="position">位置</h2>
        <p>快速设置位置时，需要元素的 <code>position</code> 值为 <code>absolute | fixed </code>（水平居中除外）。</p>
        <div className={classnames('util-position')}>
          <div className="row">
            <div className="col-12">
              {
                POSITION.position.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`position_${item.key}`} className="mt-20">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={classnames('bg-light pt-relative', 'position-view-wrap')}>
                            {
                              item.key === 'full'
                                ? <div className={classnames('bg-dark', item.className)}></div>
                                : <div className={classnames('bg-dark', 'position-item', item.className)}></div>
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
      </Fragment>
    );
  }
}
