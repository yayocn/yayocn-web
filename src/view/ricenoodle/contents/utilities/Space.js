import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'space');

export default class Space extends Component {

  createExampleCode = (target) => {
   let code = '';
   code = `.m-0 {
  margin: 0 !important;   
}

.mt-0 {
  margin-top: 0 !important;   
}

.mr-1 {
  margin-right: 1px !important;   
}

.mb-minus-1 {
  margin-bottom: -1px !important;   
}

.mh-auto {
  margin-left: auto !important;   
  margin-right: auto !important;   
}

.p-0 {
  padding: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;   
}

.pr-1 {
  padding-right: 1px !important;   
}`;

   return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="format">格式</h2>
        <p><code>[property][side]-[type]-[size]</code></p>

        <h3><code>property</code></h3>
        <div className={classnames('feature-example')}>
          <div className={classnames('example-view')}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>m</code> : <code>margin</code></li>
                <li><code>p</code> : <code>padding</code></li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="mt-10"><code>side</code></h3>
        <div className={classnames('feature-example')}>
          <div className={classnames('example-view')}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>无</code> : <code>[property]</code> 后面直接跟 <code>[size]</code>，同时设置4个方向的值。例如： <code>m-0 p-50</code></li>
                <li><code>t</code> : 指 <code>top</code>，  对应 <code>margin-top</code> 或 <code>padding-top</code></li>
                <li><code>r</code> : 指 <code>right</code>，对应 <code>margin-right</code> 或 <code>padding-right</code></li>
                <li><code>b</code> : 指 <code>bottom</code>，对应 <code>margin-bottom</code> 或 <code>padding-bottom</code></li>
                <li><code>l</code> : 指 <code>left</code>，对应 <code>margin-left</code> 或 <code>padding-left</code></li>
                <li><code>h</code> : 指水平方向，对应 <code>margin-left & margin-right</code> 或 <code>padding-left & padding-right</code></li>
                <li><code>v</code> : 指垂直方向，对应 <code>margin-top & margin-bottom</code> 或 <code>padding-top & padding-bottom</code></li>
              </ul>
            </div>
          </div>
        </div>

        <h3><code>type</code></h3>
        <div className={classnames('feature-example')}>
          <div className={classnames('example-view')}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>无</code> : 将值设为正数，如 <code>mt-1</code> 指 <code>margin-top: 1px !important;</code></li>
                <li><code>minus</code> : 将值设为复数，如 <code>mt-minus-1</code> 指 <code>margin-top: -1px !important;</code></li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="mt-10"><code>size</code></h3>
        <div className={classnames('feature-example')}>
          <div className={classnames('example-view')}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>[auto, 0 ~ 50]</code> : 设置 <code>margin | padding</code> 的值，单位是 <code>px</code>。</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="example" className="mt-10">实例</h2>
        <div className={classnames('feature-example')}>
          <div className={classnames('mt-0', 'example-code')}>
            <Highlight>
              {
                this.createExampleCode()
              }
            </Highlight>
          </div>
        </div>
      </Fragment>
    );
  }
}
