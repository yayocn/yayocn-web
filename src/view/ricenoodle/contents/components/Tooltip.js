import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

const TOOLTIP = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'right'},
  ],
  direction: [
    { title: 'Top', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'top'},
    { title: 'Right', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'right'},
    { title: 'Bottom', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'bottom'},
    { title: 'Left', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'left'},
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
      <Fragment>
        <h1>提示框 <code>Tooltip</code></h1>
        <p className="font-2x font-100">采用 CSS3 制作动画，用 <code>data-</code> 存储相关数据。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>前奏</h2>
        <ul className="ph-30">
          <li>Tooltip 依靠第三方库 <a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">Popper.js</a> 进行定位。
            你必须在 <code>ricenoodle.js</code> 之前包含 <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" target="_blank" rel="noopener noreferrer">popper.min.js</a>，以便弹出窗口工作！</li>
          <li>出于性能原因，工具提示是可配置的，因此必须自己初始化它们。</li>
        </ul>

        <h3 className="mt-20">初始化</h3>
        <div className={classnames('util-tooltip')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>

                </div>
                <div className={classnames('example-code')}>
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

        <h2>实例</h2>
        <div className={classnames('util-tooltip')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
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
                <div className={classnames('example-code')}>
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

        <h2>位置</h2>
        <div className={classnames('util-tooltip')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12 pt-relative" style={{ height: '100px'}}>
                      <div className="pt-absolute pt-center text-center">
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
                </div>
                <div className={classnames('example-code')}>
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
        <h2>事件</h2>
        <p>参考<a href="https://getbootstrap.com/docs/4.1/components/tooltips/#usage" target="_blank" rel="noopener noreferrer">Bootstrap tooltip</a>。</p>
      </Fragment>
    );
  }
}
