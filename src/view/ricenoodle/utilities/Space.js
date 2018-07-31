import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'

export default class Space extends Component {

  createExampleCode = (target) => {
   let code = '';
   code = `.m-0 {
  margin: 0 !important;   
}

.mt-0 {
  margin-top: 0 !important;   
}

.mt-1 {
  margin: 1px !important;   
}

.p-0 {
  pading: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;   
}

.pt-1 {
  padding: 1px !important;   
}`;

   return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>Ricenoodle 包含各种速记响应边距和填充实用类，以修改元素的外观。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>生效</h3>
        <p>为元素指定 <code>margin</code> 或 <code>padding</code>。 包括对单个属性，所有属性以及垂直和水平属性的支持。 默认单位是 <code>px</code>。</p>

        <div className="divider divider-lg"></div>
        <h3>格式</h3>
        <p><code>[property][side]-[size]</code></p>

        <h4><code>property</code></h4>
        <div className={classnames(common['feature-example'])}>
          <div className={classnames(common['example-view'])}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>m</code> : 指 <code>margin</code></li>
                <li><code>p</code> : 指 <code>padding</code></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="mt-10"><code>side</code></h4>
        <div className={classnames(common['feature-example'])}>
          <div className={classnames(common['example-view'])}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>null</code> : <code>[property]</code> 后面直接跟 <code>[size]</code>，对 <code>top, right, bottom, left</code> 均设置值。例如： <code>m-0 p-50</code></li>
                <li><code>t</code> : 指 <code>top</code>，  对应 <code>margin-top</code> 或 <code>padding-top</code></li>
                <li><code>r</code> : 指 <code>right</code>，对应 <code>margin-right</code> 或 <code>padding-right</code></li>
                <li><code>b</code> : 指 <code>bottom</code>，对应 <code>margin-bottom</code> 或 <code>padding-bottom</code></li>
                <li><code>l</code> : 指 <code>left</code>，对应 <code>margin-left</code> 或 <code>padding-left</code></li>
                <li><code>h</code> : 指水平方向，对应 <code>margin-left && margin-right</code> 或 <code>padding-left && padding-right</code></li>
                <li><code>v</code> : 指垂直方向，对应 <code>margin-top && margin-bottom</code> 或 <code>padding-top && padding-bottom</code></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="mt-10"><code>size</code></h4>
        <div className={classnames(common['feature-example'])}>
          <div className={classnames(common['example-view'])}>
            <div className="ph-30">
              <ul className="mb-0">
                <li><code>[0 ~ 20, 25, 30, 35, 40, 45, 50, auto]</code> : 设置 <code>margin | padding</code> 的值，单位是 <code>px</code>。</li>
              </ul>
            </div>
          </div>
        </div>

        <h4 className="mt-10">Example</h4>
        <div className={classnames(common['feature-example'])}>
          <div className={classnames('mt-0', common['example-code'])}>
            <Highlight>
              {
                this.createExampleCode()
              }
            </Highlight>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
