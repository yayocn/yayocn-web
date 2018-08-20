import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const POPOVER = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'right'},
  ],
  direction: [
    { title: 'Popover on top', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'top'},
    { title: 'Popover on right', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'right'},
    { title: 'Popover on bottom', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'bottom'},
    { title: 'Popover on left', key: '', subTitle: '', className: 'btn btn-secondary', placement: 'left'},
  ],
};

export default class Pagination extends Component {

  createCode = (target) => {
    const data = POPOVER[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<button type="button" 
        class="${item.className}" 
        data-container="body" 
        data-placement="${item.placement}" 
        data-toggle="popover" 
        title="Popover title" 
        data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
      
`;
      } else {
        code += `<button type="button" 
        class="${item.className}" 
        data-container="body" 
        data-placement="${item.placement}" 
        data-toggle="popover" 
        title="Popover title" 
        data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`;
      }
    })

    return code;
  }

  createDismissCode = () => {
    let code = `<button type="button"
        class="btn btn-secondary"
        data-trigger="focus"
        data-toggle="popover"
        title="Dismissible popover"
        data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</button>`;

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
          <li>Popover 依靠第三方库 <a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">Popper.js</a> 进行定位。
            你必须在 <code>ricenoodle.js</code> 之前包含 <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" target="_blank" rel="noopener noreferrer">popper.min.js</a>，以便弹出窗口工作！</li>
          <li>Popover 需要依赖 <a href="/ricenoodle/components/tooltip">tooltip</a> 组件。</li>
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
  $('[data-toggle="popover"]').popover()
})
`
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">使用 <code>container</code> 参数</h4>
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
  $('.example-popover').popover({
    container: 'body'
  })
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
                        POPOVER.default.map((item, index) => {
                          return (
                            <button type="button"
                                    className={item.className}
                                    data-container="body"
                                    data-placement={item.placement}
                                    data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?" key={index}>Click to toggle popover</button>
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
                    <div className="col-12 pt-relative" style={{ height: '200px'}}>
                      <div className="pt-absolute pt-center text-center">
                        {
                          POPOVER.direction.map((item, index) => {
                            return (
                              <button type="button"
                                      className={classnames(item.className, 'mr-10')}
                                      data-container="body"
                                      data-placement={item.placement}
                                      data-toggle="popover"
                                      title="Popover title"
                                      data-content="And here's some amazing content. It's very engaging. Right?" key={index}>{item.title}</button>
                            )
                          })
                        }
                      </div>
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

        <h3>失去焦点消失</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button"
                              className="btn btn-secondary"
                              data-trigger="focus"
                              data-toggle="popover"
                              title="Dismissible popover"
                              data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</button>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDismissCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>事件</h3>
        <p>参考<a className="btn btn-link" href="https://getbootstrap.com/docs/4.1/components/popovers/#usage" target="_blank" rel="noopener noreferrer">Bootstrap popover</a> 。</p>
      </PageWrapper>
    );
  }
}
