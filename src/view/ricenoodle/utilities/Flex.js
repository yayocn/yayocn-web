import React, { Component, Fragment } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';
import { find } from 'lodash';

const FLEX = {
  direction: [
    { title: 'Row', key: 'row', subTitle: '', className: 'flex flex-row', },
    { title: 'Column', key:'column', subTitle: '', className: 'flex flex-column', },
    { title: 'Row reverse', key:'rowReverse', subTitle: '', className: 'flex flex-row-reverse', },
    { title: 'Column reverse', key:'columnReverse', subTitle: '', className: 'flex flex-column-reverse', },
  ],
  wrap: [
    { title: 'Nowrap', key: 'nowrap', subTitle: '', className: 'flex flex-nowrap', },
    { title: 'Wrap', key:'wrap', subTitle: '', className: 'flex flex-wrap', },
    { title: 'Wrap reverse', key:'wrapReverse', subTitle: '', className: 'flex flex-wrap-reverse', },
  ]
};

export default class Flex extends Component {

  createCode = (target, itemKey) => {
    const data = FLEX[target];
    let code = ``;
    const item = find(data, (o) => o.key === itemKey );
    code = `<div class="${item.className}">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>`;

    return code;
  }

  createNumArray (len, from = 1) {
    let arr = [];
    for (from; arr.length < len; from++ ) {
      arr.push(from);
    }
    return arr;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>使用Flex类快速设置 <code>display: flex / inline-flex</code> 的元素。结合 <code>.flex 或 .flex-inline</code> 使用。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>方向</h3>
        <p><code>flex-direction</code> 属性决定主轴的方向（即项目的排列方向）。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.direction.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className={item.className}>
                            {
                              this.createNumArray(4).map((o) => {
                                return (
                                  <div className={classnames(style['flex-item'])} key={o}>
                                    <p className={classnames(style['item-text'])}>{o}th child</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createCode('direction', item.key)
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
        <h3>换行</h3>
        <p>默认情况下，项目都排在一条线（又称”轴线”）上。<code>flex-wrap</code> 属性定义，如果一条轴线排不下，如何换行。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.wrap.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className={item.className}>
                            {
                              this.createNumArray(12).map((o) => {
                                return (
                                  <div className={classnames(style['flex-item'])} key={o}>
                                    <p className={classnames(style['item-text'])}>{o}th child</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createCode('wrap', item.key)
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
