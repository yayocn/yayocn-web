import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'popover');

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
        title="浪淘沙令·伊吕两衰翁" 
        data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。">点击弹出/隐藏弹出框</button>
      
`;
      } else {
        code += `<button type="button" 
        class="${item.className}" 
        data-container="body" 
        data-placement="${item.placement}" 
        data-toggle="popover" 
        title="浪淘沙令·伊吕两衰翁" 
        data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。">点击弹出/隐藏弹出框</button>`;
      }
    })

    return code;
  }

  createDismissCode = () => {
    let code = `<button type="button"
        class="btn btn-secondary"
        data-trigger="focus"
        data-toggle="popover"
        title="失去焦点消失"
        data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。">失去焦点消失</button>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="prepare">前奏</h2>
        <ul className="ph-30">
          <li>Popover 依靠第三方库 <a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">Popper.js</a> 进行定位。
            你必须在 <code>ricenoodle.js</code> 之前包含 <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" target="_blank" rel="noopener noreferrer">popper.min.js</a>，以便弹出窗口工作！</li>
          <li>出于性能原因，工具提示是可配置的，因此必须自己初始化它们。</li>
        </ul>

        <h3 id="prepare_init" className="mt-20">初始化</h3>
        <div className={classnames('util-popover')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>

                </div>
                <div className={classnames('example-code')}>
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

        <h3 id="prepare_container" className="mt-20">使用 <code>container</code> 参数</h3>
        <div className={classnames('util-popover')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>

                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="example">实例</h2>
        <div className={classnames('util-popover')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
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
                                    title="浪淘沙令·伊吕两衰翁"
                                    data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。" key={index}>点击弹出/隐藏弹出框</button>
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

        <h2 id="direction">方向</h2>
        <div className={classnames('util-popover')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12 pt-relative" style={{ height: '300px'}}>
                      <div className="pt-absolute pt-center text-center">
                        {
                          POPOVER.direction.map((item, index) => {
                            return (
                              <button type="button"
                                      className={classnames(item.className, 'mr-10')}
                                      data-container="body"
                                      data-placement={item.placement}
                                      data-toggle="popover"
                                      title="浪淘沙令·伊吕两衰翁"
                                      data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。" key={index}>{item.title}</button>
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

        <h2 id="focus">失去焦点消失</h2>
        <div className={classnames('util-popover')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button"
                              className="btn btn-secondary"
                              data-trigger="focus"
                              data-toggle="popover"
                              title="失去焦点消失"
                              data-content="伊吕两衰翁，历遍穷通。一为钓叟一耕佣。 若使当时身不遇，老了英雄。 汤武偶相逢，风虎云龙。兴王只在笑谈中。 直至如今千载后，谁与争功。">失去焦点消失</button>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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
        <h2 id="event">事件</h2>
        <p>参考<a className="btn btn-link" href="https://getbootstrap.com/docs/4.1/components/popovers/#usage" target="_blank" rel="noopener noreferrer">Bootstrap popover</a>。</p>
      </Fragment>
    );
  }
}
