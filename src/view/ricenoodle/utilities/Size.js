import React, { Component, Fragment } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';
import { find } from 'lodash';

const SIZE = {
  width: [
    { title: '25%', key: '', subTitle: '', className: 'w-25', },
    { title: '50%', key: '', subTitle: '', className: 'w-50', },
    { title: '75%', key: '', subTitle: '', className: 'w-75', },
    { title: '100%', key: '', subTitle: '', className: 'w-100', },
    { title: 'auto', key: '', subTitle: '', className: 'w-auto', },
  ],
  height: [
    { title: '25%', key: '', subTitle: '', className: 'h-25', },
    { title: '50%', key: '', subTitle: '', className: 'h-50', },
    { title: '75%', key: '', subTitle: '', className: 'h-75', },
    { title: '100%', key: '', subTitle: '', className: 'h-100', },
    { title: 'auto', key: '', subTitle: '', className: 'h-auto', },
  ],
  max: [
    { title: 'Width', key: 'width', subTitle: '', className: 'mw-100', },
    { title: 'Height', key: 'height', subTitle: '', className: 'mh-100', },
  ],
  full: [
    { title: '', key: '', subTitle: '', className: 'h-full-window', },
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
      <PageWrapper>
        <h2>说明</h2>
        <p>设置 <code>block</code> 元素的宽度和高度。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>Width</h3>
        <p>设置元素的宽度。</p>
        <div className={classnames(style['util-size'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    SIZE.width.map((item, index) => {
                      return (
                        <div className={classnames('bg-light p-15', item.className)} key={index}>
                          {item.title}
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>Height</h3>
        <p>设置元素的高度。</p>
        <div className={classnames(style['util-size'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
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
                <div className={classnames(common['example-code'])}>
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
        <h3>Max-</h3>
        <p>设置元素的最大宽度和高度。</p>
        <div className={classnames(style['util-size'])}>
          <div className="row">
            <div className="col-12">
              {
                SIZE.max.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className="bg-light">
                            <div className={classnames('bg-muted p-20', item.className, { 'block-inline': item.key === 'height' })}>
                              <p className="font-4x text-white">max-{item.key} = 100%</p>
                            </div>
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
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
        <h3>Full</h3>
        <p>取当前窗口的高度，设置给元素。</p>
        <div className={classnames(style['util-size'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    SIZE.full.map((item, index) => {
                      return (
                        <div className="bg-light" key={index}>
                          <div className={classnames('bg-dark text-white p-15 w-50 pt-relative', item.className)}>
                            <p className="text-center pt-absolute pt-center font-3x">元素高度始终和窗口高度保持一致。</p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
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
      </PageWrapper>
    );
  }
}
