import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { find } from 'lodash';

const SHADOW = {
  visibility: [
    { title: '添加', key: 'shadow', subTitle: '', className: 'shadow', },
    { title: '刪除', key: 'noneShadow', subTitle: '', className: 'shadow-none', },
  ],
  size: [
    { title: 'Small', key: 'smallShadow', subTitle: '', className: 'shadow shadow-sm', },
    { title: 'Large', key: 'largeShadow', subTitle: '', className: 'shadow shadow-lg', },
  ]
};

export default class Shadow extends Component {

  createItemCode = (target, itemKey) => {
    const data = SHADOW[target];
    let code = ``;
    const item = find(data, (o) => o.key === itemKey );
    code = `<div class="${item.className}">
  ...
</div>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>阴影 <code>Shadow</code></h1>
        <p className="font-2x font-100">使用阴影类添加或者刪除元素阴影。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>阴影</h2>
        <div className={classnames('util-shadow')}>
          <div className="row">
            <div className="col-12">
              {
                SHADOW.visibility.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 className="mt-20">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className="row">
                            <div className="col-4 mb-10">
                              <div className={classnames('border bg-light', item.className, 'shadow-feature')}></div>
                            </div>
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
                          <Highlight>
                            {
                              this.createItemCode('visibility', item.key)
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

        <div className="divider divider-lg"></div>
        <h2>尺寸</h2>
        <p>设置阴影尺寸。</p>
        <div className={classnames('util-shadow')}>
          <div className="row">
            <div className="col-12">
              {
                SHADOW.size.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 className="mt-20">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className="row">
                            <div className="col-4 mb-10">
                              <div className={classnames('border bg-light', item.className, 'shadow-feature')}></div>
                            </div>
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
                          <Highlight>
                            {
                              this.createItemCode('size', item.key)
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
