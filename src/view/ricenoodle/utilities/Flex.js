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
    { title: 'Row reverse', key:'rowReverse', subTitle: '', className: 'flex flex-row-reverse', },
    { title: 'Column', key:'column', subTitle: '', className: 'flex flex-column', },
    { title: 'Column reverse', key:'columnReverse', subTitle: '', className: 'flex flex-column-reverse', },
  ],
  wrap: [
    { title: 'Nowrap', key: 'nowrap', subTitle: '', className: 'flex flex-nowrap', },
    { title: 'Wrap', key:'wrap', subTitle: '', className: 'flex flex-wrap', },
    { title: 'Wrap reverse', key:'wrapReverse', subTitle: '', className: 'flex flex-wrap-reverse', },
  ],
  justifyContent: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex justify-content-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex justify-content-end', },
    { title: 'center', key: 'center', subTitle: '', className: 'flex justify-content-center', },
    { title: 'Between', key: 'between', subTitle: '', className: 'flex justify-content-between', },
    { title: 'Around', key: 'around', subTitle: '', className: 'flex justify-content-around', },
  ],
  alignItems: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex align-items-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex align-items-end', },
    { title: 'center', key: 'center', subTitle: '', className: 'flex align-items-center', },
    { title: 'Baseline', key: 'baseline', subTitle: '项目的第一行文字的基线对齐，注意与 end 的区别。', className: 'flex align-items-baseline', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'flex align-items-stretch', },
  ],
  alignContent: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex flex-wrap align-content-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex flex-wrap align-content-end', },
    { title: 'center', key: 'center', subTitle: '', className: 'flex flex-wrap align-content-center', },
    { title: 'Between', key: 'between', subTitle: '', className: 'flex flex-wrap align-content-between', },
    { title: 'Around', key: 'around', subTitle: '', className: 'flex flex-wrap align-content-around', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'flex flex-wrap align-content-stretch', },
  ],
  alignSelf: [
    { title: 'Auto', key: 'auto', subTitle: '', className: 'align-self-auto', },
    { title: 'Start', key: 'start', subTitle: '', className: 'align-self-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex align-self-end', },
    { title: 'Center', key: 'center', subTitle: '', className: 'align-self-center', },
    { title: 'Baseline', key: 'baseline', subTitle: '', className: 'align-self-baseline', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'align-self-stretch', },
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

  createItemCode = (target, itemKey) => {
    const data = FLEX[target];
    let code = ``;
    const item = find(data, (o) => o.key === itemKey );
    code = `<div class="flex">
  <div class="${item.className}"> ... </div>
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
        <div className="alert alert-info">
          <p>主轴：<code>flex-direction: row | row-reverse</code>，主轴为 <code>X</code> 轴；<code>flex-direction: column | column-reverse</code>，主轴为 <code>Y</code> 轴。</p>
          <p className="mb-0">交叉轴：<code>flex-direction: row | row-reverse</code>，交叉轴为 <code>Y</code> 轴；<code>flex-direction: column | column-reverse</code>，交叉轴为 <code>X</code> 轴。</p>
        </div>

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
                                    <p className={classnames(style['item-text'])}>{o}th</p>
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
                                    <p className={classnames(style['item-text'])}>{o}th</p>
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

        <div className="divider divider-lg"></div>
        <h3>主轴对齐</h3>
        <p><code>justify-content</code> 属性定义了项目在主轴上的对齐方式。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.justifyContent.map((item, index) => {
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
                                    <p className={classnames(style['item-text'])}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createCode('justifyContent', item.key)
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
        <h3>交叉轴对齐</h3>
        <p><code>align-items</code> 属性定义项目在交叉轴上如何对齐。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignItems.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className={classnames(style['aligin-item'], item.className)}>
                            {
                              this.createNumArray(4).map((o) => {
                                return (
                                  <div className={classnames(style['flex-item'])} key={o}>
                                    <p className={classnames(style['item-text'])}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createCode('alignItems', item.key)
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
        <h3>多轴对齐</h3>
        <p><code>align-content</code> 属性定义了多根轴线的对齐方式，需要和 <code>.flex-wrap</code> 配合使用。如果项目只有一根轴线，该属性不起作用。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignContent.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames('bg-light', common['example-view'])}>
                          <div className={classnames(style['aligin-content'], item.className)}>
                            {
                              this.createNumArray(9).map((o) => {
                                return (
                                  <div className={classnames(style['flex-item'])} key={o}>
                                    <p className={classnames(style['item-text'])}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createCode('alignContent', item.key)
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
        <h3>特殊对齐</h3>
        <p><code>align-self</code> 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 <code>align-items</code> 属性。默认值为 <code>auto</code>，表示继承父元素的 <code>align-items</code> 属性，如果没有父元素，则等同于 <code>stretch</code>。</p>
        <div className={classnames(style['util-flex'])}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignSelf.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h4 className="mt-10">{item.title}</h4>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames(common['feature-example'])}>
                        <div className={classnames(common['example-view'])}>
                          <div className={classnames('flex')}>
                            {
                              this.createNumArray(4).map((o, childIndex) => {
                                return (
                                  <div className={classnames(style['flex-item'], { [item.className]: childIndex === 0 })} key={o}>
                                    <p className={classnames(style['item-text'])}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames(common['example-code'])}>
                          <Highlight>
                            {
                              this.createItemCode('alignSelf', item.key)
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
