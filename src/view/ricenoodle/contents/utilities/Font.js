import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'font');

const FONT = {
  stable: (function(){
    let arr = [];
    for (let i = 12; i <= 20; i++) {
      arr.push(`font-${i}`);
    }
    return arr;
  }()),
  multiple: (function(){
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(`font-${i}x`);
    }
    return arr;
  }()),
  weight: (function(){
    let arr = [];
    for (let i = 100; i <= 900; i+=100) {
      arr.push(`font-${i}`);
    }
    arr.push('font-bold');
    arr.push('font-bolder');
    arr.push('font-lighter');
    return arr;
  }()),
};

export default class Font extends Component {

  createCode = (target) => {
    const data = FONT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<p class="${item}"> ... </p>
      
`;
      } else {
        code += `<p class="${item}"> ... </p>`;
      }
    })

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="size">尺寸</h2>
        <p>Ricenoodle 提供了3中种类型的尺寸</p>
        <ul className="pl-18">
          <li><code>10px ~ 30px</code> 的固定尺寸。</li>
          <li>基于父元素 <code>1 ~ 10</code> 倍的字体尺寸。</li>
          <li>基于视口宽度或高度的尺寸。</li>
        </ul>

        <h3 id="size_stable" className="mt-20">固定尺寸</h3>
        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  {
                    FONT.stable.map((item, index) => {
                      return (
                        <p className={item} key={index} >
                          This is {item} class font size.
                        </p>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('stable')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="size_multiple" className="mt-20">成倍尺寸</h3>
        <p>使用 em 作为单位，基于父元素放大字体，Ricenoodle 提供了 <code>1x ~ 10x</code>。</p>
        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <h6>以下实例是以 <code>14px</code> 作为基准。</h6>
                  {
                    FONT.multiple.map((item, index) => {
                      return (
                        <p className={classnames(item, 'mv-0')} key={index} >
                          {item}
                        </p>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('multiple')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="size_viewpoint" className="mt-20">视口尺寸</h3>
        <p>以 <code>vw, vh</code> 为单位，提供了 <code>[1-10] * 10(vw|vh)</code> 的尺寸。 如：</p>
        <ul className="pl-18">
          <li><code>font-vw-1</code> 代表了 <code>font-size: 10vw !important;</code>。</li>
          <li><code>font-vh-10</code> 代表了 <code>font-size: 100vh !important;</code>。</li>
        </ul>

        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div>
                    <p className={classnames('font-vw-1 mv-0')}>Hello!</p>
                    <p className={classnames('font-vh-1 mv-0')}>Hello!</p>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    &lt;p class="font-vw-1">Hello!&lt;/p>
                    <br/><br/>
                    &lt;p class="font-vh-1">Hello!&lt;/p>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="weight">权重</h2>
        <p>使用权重类快速设置文字的权重。</p>
        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  {
                    FONT.weight.map((item, index) => {
                      return (
                        <p className={item} key={index} >
                          {item}
                        </p>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('weight')
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
