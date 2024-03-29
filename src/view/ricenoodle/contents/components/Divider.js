import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';
import { Link } from 'react-router-dom';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'divider');

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
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="example">实例</h2>
        <p><code>.divider</code> 分割组件用于分割上下文。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
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
        <h2 id="size">尺寸</h2>
        <p><code>.divider-lg .divider-sm</code> 设置分割的间距，也可以用<Link to={'/ricenoodle/utilities/space'}>间距</Link>来控制。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
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
        <h2 id="weight">权重</h2>
        <p><code>.divider-bold</code> 设置比较粗的分割线，也可以用<Link to={'/ricenoodle/utilities/border#width'}>边框宽度</Link>来控制。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
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
        <h2 id="theme">主题</h2>
        <p>结合<Link to={'/ricenoodle/utilities/border#theme'}>边框主题</Link>，可以生成多重主题颜色。</p>
        <div className={classnames('util-divider')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
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
