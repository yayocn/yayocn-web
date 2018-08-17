import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BORDER = {
  additive: [
    { title: 'All', subTitle: '', className: 'border', },
    { title: 'Top', subTitle: '', className: 'border-top', },
    { title: 'Right', subTitle: '', className: 'border-right', },
    { title: 'Bottom', subTitle: '', className: 'border-bottom', },
    { title: 'Left', subTitle: '', className: 'border-left', },
  ],
  subtractive: [
    { title: 'All', subTitle: '', className: 'border-0', },
    { title: 'Top', subTitle: '', className: 'border-top-0', },
    { title: 'Right', subTitle: '', className: 'border-right-0', },
    { title: 'Bottom', subTitle: '', className: 'border-bottom-0', },
    { title: 'Left', subTitle: '', className: 'border-left-0', },
  ],
  situation: [
    { title: 'Primary', subTitle: '', className: 'border border-primary', },
    { title: 'Secondary', subTitle: '', className: 'border border-secondary', },
    { title: 'Success', subTitle: '', className: 'border border-success', },
    { title: 'Info', subTitle: '', className: 'border border-info', },
    { title: 'Warning', subTitle: '', className: 'border border-warning', },
    { title: 'Danger', subTitle: '', className: 'border border-danger', },
    { title: 'White', subTitle: '', className: 'border border-white', },
    { title: 'Light', subTitle: '', className: 'border border-light', },
    { title: 'Muted', subTitle: '', className: 'border border-muted', },
    { title: 'Dark', subTitle: '', className: 'border border-dark', },
    { title: 'Black', subTitle: '', className: 'border border-black', },
    { title: 'Transparent', subTitle: '', className: 'border border-transparent', },
  ],
  round: [
    { title: '', subTitle: '', className: 'border border-round', },
    { title: '', subTitle: '', className: 'border border-round-0', },
    { title: '', subTitle: '', className: 'border border-round-circle', },
    { title: '', subTitle: '', className: 'border border-round-top', },
    { title: '', subTitle: '', className: 'border border-round-right', },
    { title: '', subTitle: '', className: 'border border-round-bottom', },
    { title: '', subTitle: '', className: 'border border-round-left', },
  ],
  style: [
    { title: 'Solid', subTitle: '', className: 'border-solid', },
    { title: 'Dashed', subTitle: '', className: 'border-dash', },
    { title: 'Dotted', subTitle: '', className: 'border-dot', },
  ]
}

export default class Border extends Component {

  createCode = (target) => {
    const data = BORDER[target];
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
        <p>使用边框类快速设置元素的边框。包括各种边框的样式，情景色，圆角等，它们之间可以相互组合使用。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>添加和移除</h3>
        <p>增加或者移除元素的边框，可以针对所有的边或者针对某一边。默认颜色是 <code>#dee2e6</code>.</p>

        <h4>添加</h4>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.additive.map((item, index) => {
                      return (
                        <div key={index} className={classnames('mb-10 mr-10 block-inline', style['border-feature'], item.className)}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('additive')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">移除</h4>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.subtractive.map((item, index) => {
                      return (
                        <div key={index} className={classnames('border border-muted mb-10 mr-10 block-inline', style['border-feature'], item.className )}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('subtractive')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>情景色</h3>
        <p>预设 <code>12</code> 种情景色。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.situation.map((item, index) => {
                      return (
                        <div key={index} className={classnames('border mb-10 mr-10 block-inline', style['border-feature'], item.className)}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
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

        <h3>圆角</h3>
        <p>默认 <code>0.25rem</code>。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.round.map((item, index) => {
                      return (
                        <div key={index} className={classnames('border border-muted mb-10 mr-10 block-inline', style['border-feature'], item.className )}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('round')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>样式</h3>
        <p>预设了 <code>3</code> 种样式。</p>
        <div className={classnames(style['util-border'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  {
                    BORDER.style.map((item, index) => {
                      return (
                        <div key={index} className={classnames('border-muted mb-10 mr-10 block-inline', style['border-feature'], item.className)}></div>
                      );
                    })
                  }
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('style')
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