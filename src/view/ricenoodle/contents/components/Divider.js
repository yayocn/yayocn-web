import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

const DIVIDER = {
  default: [
    { title: 'Divider', key: '', subTitle: '', className: 'divider', },
  ],
  size: [
    { title: '大间距', key: '', subTitle: '', className: 'divider divider-lg', },
    { title: '小间距', key: '', subTitle: '', className: 'divider divider-sm', },
  ],
  weight: [
    { title: 'Divider', key: '', subTitle: '', className: 'divider divider-bold', },
  ],
  theme: [
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-primary', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-secondary', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-success', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-info', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-warning', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-danger', },
    { title: '', key: 'white', subTitle: '', className: 'divider divider-bold border-white bg-dark', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-light', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-muted', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-dark', },
    { title: '', key: '', subTitle: '', className: 'divider divider-bold border-black', },
  ]
};

export default class Divider extends Component {

  createCode = (target) => {
    const data = DIVIDER[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div>
  <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
  <div class="${item.className}"></div>
  <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
</div>
      
`;
      } else {
        code += `<div>
  <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
  <div class="${item.className}"></div>
  <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
</div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>分割线 <code>Divider</code></h1>
        <p className="font-2x font-100">使用分割组件分割上下文。相当于 <code>&lt;hr/&gt;</code> 的升级版本。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p><code>.divider</code> 分割组件用于分割上下文。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.default.map((item, index) => {
                          return (
                            <div className="ph-20 border mb-10" key={index} >
                              <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
                              <div className={classnames(item.className, 'divider-feature')}></div>
                              <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
                            </div>
                          );
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
        <h2>尺寸</h2>
        <p><code>.divider-lg .divider-sm</code> 设置分割的间距，也可以用 <a href="/ricenoodle/utilities/space">Space</a> 来控制。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.size.map((item, index) => {
                          return (
                            <div className="ph-20 border mb-10" key={index} >
                              <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
                              <div className={classnames(item.className, 'divider-feature')}></div>
                              <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
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
        <h2>权重</h2>
        <p><code>.divider-bold</code> 设置比较粗的分割线，也可以用 <a href="/ricenoodle/utilities/border">Border</a> 来控制。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.weight.map((item, index) => {
                          return (
                            <div className="ph-20 border mb-10" key={index} >
                              <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
                              <div className={classnames(item.className, 'divider-feature')}></div>
                              <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
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

        <div className="divider divider-lg"></div>
        <h2>主题</h2>
        <p>结合 <a href="/ricenoodle/utilities/border">Border theme</a> ，可以生成多重主题颜色。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DIVIDER.theme.map((item, index) => {
                          return (
                            <div className={classnames("ph-20 border mb-10", {'text-white bg-dark': item.key === 'white'})} key={index} >
                              <p>醉里挑灯看剑，梦回吹角连营。 八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。</p>
                              <div className={classnames(item.className, 'divider-feature')}></div>
                              <p>马作的卢飞快，弓如霹雳弦惊。 了却君王天下事，赢得生前身后名。可怜白发生。</p>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('theme')
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
