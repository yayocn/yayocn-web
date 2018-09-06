import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

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
        <h1>字体 <code>Font</code></h1>
        <p className="font-2x font-100">使用字体类快速设置文本的尺寸，权重等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="size">尺寸</h2>
        <p>Ricenoodle 提供了 <code>12px ~ 20px</code> 的固定字体尺寸，和基于父元素 <code>1 ~ 10</code> 倍的字体尺寸。</p>

        <h3 id="size_stable" className="mt-20">固定尺寸</h3>
        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
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
              <div className={classnames('feature-example')}>
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

        <div className="divider divider-lg"></div>
        <h2 id="weight">权重</h2>
        <p>使用权重类快速设置文字的权重。</p>
        <div className={classnames('util-font')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
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
