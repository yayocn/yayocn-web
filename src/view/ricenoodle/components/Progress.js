import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const PROGRESS = {
  default: [
    { title: 'Primary', key: '', subTitle: '', className: 'progress', width: '10%' },
  ],
  element: [
    { title: 'Primary', key: '', subTitle: '', className: 'progress', width: '10%' },
  ],
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'progress progress-primary', width: '10%' },
    { title: 'Secondary', key: '', subTitle: '', className: 'progress progress-secondary', width: '20%' },
    { title: 'Success', key: '', subTitle: '', className: 'progress progress-success', width: '30%' },
    { title: 'Info', key: '', subTitle: '', className: 'progress progress-info', width: '40%' },
    { title: 'Warning', key: '', subTitle: '', className: 'progress progress-warning', width: '50%' },
    { title: 'Danger', key: '', subTitle: '', className: 'progress progress-danger', width: '60%' },
    { title: 'Dark', key: '', subTitle: '', className: 'progress progress-dark', width: '70%' },
  ],
  striped: [
    { title: 'Striped', key: '', subTitle: '', className: 'progress progress-striped', width: '50%' },
  ],
  animated: [
    { title: 'Striped', key: '', subTitle: '', className: 'progress progress-striped progress-animated', width: '50%' },
    { title: 'Striped', key: '', subTitle: '', className: 'progress progress-emission', width: '50%' },
  ],
  chunk: [
    { title: 'Striped', key: '', subTitle: '', className: 'progress progress-striped progress-animated'},
  ],
};

export default class Progress extends Component {

  createCode = (target) => {
    const data = PROGRESS[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <div class="progress-value" style="width: ${item.width}">${item.width}</div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <div class="progress-value" style="width: ${item.width}">${item.width}</div>
</div>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>自定义进度条，支持堆叠条，动画背景和文本标签。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PROGRESS.default.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index} >
                              <div class="progress-value" style={{ width: item.width }}>{item.width}</div>
                            </div>
                          );
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

        <h3>标签</h3>
        <p>使用 <code>&lt;progress&gt;</code> 不同显示进度百分比，没有动画效果，在不同浏览器的效果也不一致，不推荐使用。</p>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PROGRESS.element.map((item, index) => {
                          return (
                            <progress value="10" max="100" key={index}></progress>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;progress value="10" max="100">&lt;/progress>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>主题</h3>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PROGRESS.situation.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-10')} key={index} >
                              <div class="progress-value" style={{ width: item.width }}>{item.width}</div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('situation')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>条纹</h3>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PROGRESS.striped.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-10')} key={index} >
                              <div class="progress-value" style={{ width: item.width }}>{item.width}</div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('striped')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>动画</h3>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PROGRESS.animated.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-10')} key={index} >
                              <div class="progress-value" style={{ width: item.width }}>{item.width}</div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('animated')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>分段</h3>
        <div className={classnames(style['util-progress'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="progress progress-striped progress-animated border-light">
                        <div className="progress-value bg-primary" style={{ width: '20%'}}></div>
                        <div className="progress-value bg-warning" style={{ width: '20%'}}></div>
                        <div className="progress-value bg-success" style={{ width: '20%'}}>60%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;div class="progress progress-striped progress-animated border-light"&gt; <br/>
                    &nbsp;&nbsp;&lt;div class="progress-value bg-primary" style="width: 20%"&gt;&lt;/div&gt; <br/>
                    &nbsp;&nbsp;&lt;div class="progress-value bg-warning" style="width: 20%"&gt;&lt;/div&gt; <br/>
                    &nbsp;&nbsp;&lt;div class="progress-value bg-success" style="width: 20%"&gt;60%&lt;/div&gt; <br/>
                    &lt;/div&gt;
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
