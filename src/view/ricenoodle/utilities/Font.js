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
        code += `<div class="${item.className}"> ... </div>
      
`;
      } else {
        code += `<div class="${item.className}"> ... </div>`;
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
        <p>预设 <code>12</code> 种情景背景色。</p>
        <div className={classnames(style['util-bg'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      FONT.size.map((item, index) => {
                        return (
                          <div className="col-4 mb-10" key={index} >
                            <div className={classnames(item.className, style['bg-feature'])}></div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      // this.createCode('situation')
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
