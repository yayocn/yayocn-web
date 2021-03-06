import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'float');

const FLOAT = {
  additive: [
    { title: 'Left', key: 'left', subTitle: '', className: 'fl', },
    { title: 'Right', key: 'right', subTitle: '', className: 'fr', },
  ],
  subtractive: [
    { title: 'Clearfix', key: 'clearfix', subTitle: '', className: 'clearfix', },
  ]
};

export default class Float extends Component {

  createCode = (target) => {
    const data = FLOAT[target];
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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="float">设置浮动</h2>
        <p>通过浮动类切换浮动。</p>
        <div className={classnames('util-float')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('clearfix', 'example-view')}>
                  {
                    FLOAT.additive.map((item, index) => {
                      return (
                        <div className={classnames('bg-light', item.className, 'float-item')} key={index}>设置 {item.key} 浮动</div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('additive')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="clearfix">清除浮动</h2>
        <p><code>.clearfix</code> 可以单独使用，使浮动元素不影响到其他排版正常的元素；也可以作用于浮动元素的父元素，使父元素的高度不会塌陷。</p>
        <div className={classnames('util-float')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="clearfix bg-light">
                    <div className={classnames('fl bg-dark text-white', 'float-item')}>浮动元素</div>
                    <div className="clearfix"></div>
                    <div className={classnames('fl bg-muted text-white', 'float-item')}>被 .clearfix 隔开的紧邻上一个浮动元素的浮动元素</div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('subtractive')
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
