import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { find } from 'lodash';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'size');

const SIZE = {
  width: [
    { title: '25%', key: '25', subTitle: '', className: 'w-25', },
    { title: '50%', key: '50', subTitle: '', className: 'w-50', },
    { title: '75%', key: '75', subTitle: '', className: 'w-75', },
    { title: '100%', key: '100', subTitle: '', className: 'w-100', },
    { title: 'auto', key: 'auto', subTitle: '', className: 'w-auto', },
  ],
  height: [
    { title: '25%', key: '25', subTitle: '', className: 'h-25', },
    { title: '50%', key: '50', subTitle: '', className: 'h-50', },
    { title: '75%', key: '75', subTitle: '', className: 'h-75', },
    { title: '100%', key: '100', subTitle: '', className: 'h-100', },
    { title: 'auto', key: 'auto', subTitle: '', className: 'h-auto', },
  ],
  max: [
    { title: '最大宽度', key: 'width', subTitle: '', className: 'mw-100', },
    { title: '最大高度', key: 'height', subTitle: '', className: 'mh-100', },
  ],
  full: [
    { title: '填充', key: 'full', subTitle: '', className: 'h-full-window', },
  ]
};

export default class Size extends Component {

  createCode = (target) => {
    const data = SIZE[target];
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

  createItemCode = (target, itemKey) => {
    const data = SIZE[target];
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
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="width">宽度</h2>
        <p>设置元素的宽度。</p>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    SIZE.width.map((item, index) => {
                      return (
                        <div className={classnames('bg-dark text-white border p-15', item.className)} key={index}>
                          {item.title}
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('width')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="height">高度</h2>
        <p>设置元素的高度。</p>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      SIZE.height.map((item, index) => {
                        return (
                          <div className="col-2" key={index} style={{ height: '200px' }}>
                            <div className={classnames('bg-dark text-white p-15', item.className)}>
                              {item.title}
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('height')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="max">最大宽高</h2>
        <p>设置元素的最大宽度和高度。</p>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              {
                SIZE.max.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`max_${item.key}`} className="mt-20">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className="bg-light">
                            <div className={classnames('bg-muted p-20', item.className, { 'block-inline': item.key === 'height' })}>
                              <p className="font-4x text-white">max-{item.key} = 100%</p>
                            </div>
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
                          <Highlight>
                            {
                              this.createItemCode('max', item.key)
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
        <h2 id="full">视口高度</h2>
        <p>将当前窗口的高度设置为元素高度。</p>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    SIZE.full.map((item, index) => {
                      return (
                        <div className="bg-light" key={index}>
                          <div className={classnames('bg-dark text-white p-15 w-50 pt-relative', item.className)}>
                            <p className="text-center pt-absolute pt-center font-3x">元素高度始终和视口高度保持一致。</p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('full')
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