import React, { Component, Fragment } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';
import { find } from 'lodash';

const SHADOW = {
  visibility: [
    { title: 'Display', key: 'shadow', subTitle: '', className: 'shadow', },
    { title: 'Hidden', key: 'noneShadow', subTitle: '', className: 'shadow-none', },
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
      <PageWrapper>
        <h2>说明</h2>
        <p>使用阴影类快速设置元素阴影。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>显示</h3>
        <p>设置和取消阴影。</p>
        <div className={classnames(style['util-shadow'])}>
          <div className="row">
            <div className="col-12">
              {
                SHADOW.visibility.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className="row">
                            <div className="col-4 mb-10">
                              <div className={classnames('border bg-light', item.className, style['shadow-feature'])}></div>
                            </div>
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
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
        <h3>尺寸</h3>
        <p>设置阴影尺寸。</p>
        <div className={classnames(style['util-shadow'])}>
          <div className="row">
            <div className="col-12">
              {
                SHADOW.size.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className="row">
                            <div className="col-4 mb-10">
                              <div className={classnames('border bg-light', item.className, style['shadow-feature'])}></div>
                            </div>
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
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
      </PageWrapper>
    );
  }
}
