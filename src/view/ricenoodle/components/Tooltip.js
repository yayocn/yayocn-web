import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const TOOLTIP = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-primary', placement: 'right'},
  ],
  direction: [
    { title: 'Top', key: '', subTitle: '', className: 'btn btn-primary', placement: 'top'},
    { title: 'Right', key: '', subTitle: '', className: 'btn btn-primary', placement: 'right'},
    { title: 'Bottom', key: '', subTitle: '', className: 'btn btn-primary', placement: 'bottom'},
    { title: 'Left', key: '', subTitle: '', className: 'btn btn-primary', placement: 'left'},
  ],
};

export default class Tooltip extends Component {

  createCode = (target) => {
    const data = TOOLTIP[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<button type="button"
        class="${item.className}"
        data-toggle="tooltip"
        data-placement="${item.placement}"
        title="Tooltip">Tooltip</button>
      
`;
      } else {
        code += `<button type="button"
        class="${item.className}"
        data-toggle="tooltip"
        data-placement="${item.placement}"
        title="Tooltip">Tooltip</button>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>当你点击一个元素时，显示一个提示框。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>准备工作</h3>
        <ul className="p-30">
          <li>Tooltip 依靠第三方库 <a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">Popper.js</a> 进行定位。
            你必须在 <code>ricenoodle.js</code> 之前包含 <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" target="_blank" rel="noopener noreferrer">popper.min.js</a>，以便弹出窗口工作！</li>
        </ul>

        <h4 className="mt-20">全局设置</h4>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>

                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      `$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
`
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TOOLTIP.default.map((item, index) => {
                          return (
                            <button type="button"
                                    className={item.className}
                                    data-toggle="tooltip"
                                    data-placement={item.placement}
                                    title="Tooltip" key={index}>Tooltip</button>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('default')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>方向</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TOOLTIP.direction.map((item, index) => {
                          return (
                            <button type="button"
                                    className={classnames(item.className, 'mr-10')}
                                    data-toggle="tooltip"
                                    data-placement={item.placement}
                                    title="Tooltip" key={index}>Tooltip</button>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('direction')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>事件</h3>
        <p>参考<a href="https://getbootstrap.com/docs/4.1/components/tooltips/#usage" target="_blank" rel="noopener noreferrer">Bootstrap tooltip</a> 。</p>
      </PageWrapper>
    );
  }
}
