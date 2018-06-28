import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const FONT = {
  size: (function(){
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
      <PageWrapper>
        <h2>说明</h2>
        <p>使用字体类快速设置文本的大小，权重。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>Size</h3>
        <p>预设 <code>12px ~ 20px</code> 的固定字体大小。</p>
        <div className={classnames(style['util-font'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    FONT.size.map((item, index) => {
                      return (
                        <p className={item} key={index} >
                          This is {item} class font size.
                        </p>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('size')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Mutiple</h3>
        <p>使用 em 作为单位，放大字体的倍数，预设 <code>1x ~ 10x</code>。</p>
        <div className={classnames(style['util-font'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    FONT.multiple.map((item, index) => {
                      return (
                        <p className={item} key={index} >
                          {item}
                        </p>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
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
        <h3>Weight</h3>
        <p>快速设置文字的权重。</p>
        <div className={classnames(style['util-font'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
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
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('weight')
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
