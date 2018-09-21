import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { find } from 'lodash';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'flex');

const FLEX = {
  direction: [
    { title: '水平向右', key: 'row', subTitle: '', className: 'flex flex-row', },
    { title: '水平向左', key:'row_reverse', subTitle: '', className: 'flex flex-row-reverse', },
    { title: '垂直向下', key:'column', subTitle: '', className: 'flex flex-column', },
    { title: '垂直向上', key:'column_reverse', subTitle: '', className: 'flex flex-column-reverse', },
  ],
  wrap: [
    { title: '不换行', key: 'nowrap', subTitle: '', className: 'flex flex-nowrap', },
    { title: '换行', key:'wrap', subTitle: '', className: 'flex flex-wrap', },
    { title: '换行反转', key:'reverse', subTitle: '', className: 'flex flex-wrap-reverse', },
  ],
  justifyContent: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex justify-content-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex justify-content-end', },
    { title: 'Center', key: 'center', subTitle: '', className: 'flex justify-content-center', },
    { title: 'Between', key: 'between', subTitle: '', className: 'flex justify-content-between', },
    { title: 'Around', key: 'around', subTitle: '', className: 'flex justify-content-around', },
  ],
  alignItems: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex align-items-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex align-items-end', },
    { title: 'Center', key: 'center', subTitle: '', className: 'flex align-items-center', },
    { title: 'Baseline', key: 'baseline', subTitle: '项目的第一行文字的基线对齐，注意与 end 的区别。', className: 'flex align-items-baseline', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'flex align-items-stretch', },
  ],
  alignContent: [
    { title: 'Start', key: 'start', subTitle: '', className: 'flex flex-wrap align-content-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex flex-wrap align-content-end', },
    { title: 'Center', key: 'center', subTitle: '', className: 'flex flex-wrap align-content-center', },
    { title: 'Between', key: 'between', subTitle: '', className: 'flex flex-wrap align-content-between', },
    { title: 'Around', key: 'around', subTitle: '', className: 'flex flex-wrap align-content-around', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'flex flex-wrap align-content-stretch', },
  ],
  alignSelf: [
    { title: 'Auto', key: 'auto', subTitle: '', className: 'align-aboutme-auto', },
    { title: 'Start', key: 'start', subTitle: '', className: 'align-aboutme-start', },
    { title: 'End', key: 'end', subTitle: '', className: 'flex align-aboutme-end', },
    { title: 'Center', key: 'center', subTitle: '', className: 'align-aboutme-center', },
    { title: 'Baseline', key: 'baseline', subTitle: '', className: 'align-aboutme-baseline', },
    { title: 'Stretch', key: 'stretch', subTitle: '', className: 'align-aboutme-stretch', },
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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="alert alert-warning">
          <dl className="row mb-0">
            <dt className="col-lg-2 col-md-3 col-4">主轴，交叉轴</dt>
            <dd className="col-lg-10 col-md-9 col-8">
              <p className="mt-0">当 <code>flex-direction: row | row-reverse</code> 时，主轴为 <code>X</code> 轴，交叉轴为 <code>Y</code> 轴。</p>
              <p className="mb-0">当 <code>flex-direction: column | column-reverse</code>，主轴为 <code>Y</code> 轴，交叉轴为 <code>X</code> 轴。</p>
            </dd>
          </dl>
        </div>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="direction">方向</h2>
        <p>使用方向类在Flex容器中设置主轴的方向。在大多数情况下，可以省略水平类（<code>.flex-row</code>），因为浏览器默认为行。 但是，也可能会遇到需要显式设置此值的情况（如响应式布局）。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.direction.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`direction_${item.key}`} className="mt-10">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={item.className}>
                            {
                              this.createNumArray(4).map((o) => {
                                return (
                                  <div className={classnames('flex-item')} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
        <h2 id="wrap">换行</h2>
        <p>更改Flex项目在Flex容器中的换行方式。选择不换行（浏览器默认设置）<code>.flex-nowrap</code>，换行 <code>.flex-wrap</code>，
          或换行反转 <code>.flex-wrap-reverse</code>。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-lg-8 col-12">
              {
                FLEX.wrap.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`wrap_${item.key}`} className="mt-10">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={item.className}>
                            {
                              this.createNumArray(12).map((o) => {
                                return (
                                  <div className={classnames('flex-item')} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
        <h2 id="justify">主轴对齐</h2>
        <p>在弹性布局容器上使用主轴对齐类来更改主轴上的flex项目的对齐方式。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.justifyContent.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`justify_${item.key}`} className="mt-20">{item.title}</h3>
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={item.className}>
                            {
                              this.createNumArray(4).map((o) => {
                                return (
                                  <div className={classnames('flex-item')} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
        <h2 id="align_items">交叉轴对齐</h2>
        <p>在弹性布局容器上使用交叉轴对齐类来更改交叉轴上的flex项的对齐方式。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignItems.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`align_items_${item.key}`} className="mt-20">{item.title}</h3>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={classnames('aligin-item', item.className)}>
                            {
                              this.createNumArray(4).map((o) => {
                                return (
                                  <div className={classnames('flex-item')} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
        <h2 id="align_content">多轴对齐</h2>
        <p>使用弹性布局容器上的多轴对齐类将flex项目在十字轴上对齐。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignContent.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`align_content_${item.key}`} className="mt-20">{item.title}</h3>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames('feature-example')}>
                        <div className={classnames('bg-light', 'example-view')}>
                          <div className={classnames('aligin-content', item.className)}>
                            {
                              this.createNumArray(9).map((o) => {
                                return (
                                  <div className={classnames('flex-item')} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
        <h2 id="align_self">特殊对齐</h2>
        <p>在弹性布局项目上使用特殊对齐类可以单独更改它们在十字轴上的对齐方式。</p>
        <div className={classnames('util-flex')}>
          <div className="row">
            <div className="col-12">
              {
                FLEX.alignSelf.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <h3 id={`align_self_${item.key}`} className="mt-20">{item.title}</h3>
                      {
                        item.subTitle &&
                        item.subTitle
                      }
                      <div className={classnames('feature-example')}>
                        <div className={classnames('example-view')}>
                          <div className={classnames('flex')}>
                            {
                              this.createNumArray(4).map((o, childIndex) => {
                                return (
                                  <div className={classnames('flex-item', { [item.className]: childIndex === 0 })} key={o}>
                                    <p className={classnames('item-text')}>{o}th</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div className={classnames('example-code')}>
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
      </Fragment>
    );
  }
}
