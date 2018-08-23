import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DOT = {
  default: [
    { title: 'Default', key: '', subTitle: '执行成功', className: 'dot dot-success', },
    { title: 'Default', key: '', subTitle: '执行失败', className: 'dot dot-danger', },
  ],
  theme: [
    { title: 'Primary', key: '', subTitle: '自定义含义', className: 'dot dot-primary', },
    { title: 'Secondary', key: '', subTitle: '自定义含义', className: 'dot dot-secondary', },
    { title: 'Success', key: '', subTitle: '自定义含义', className: 'dot dot-success', },
    { title: 'Info', key: '', subTitle: '自定义含义', className: 'dot dot-info', },
    { title: 'Warning', key: '', subTitle: '自定义含义', className: 'dot dot-warning', },
    { title: 'Danger', key: '', subTitle: '自定义含义', className: 'dot dot-danger', },
    { title: 'White', key: '', subTitle: '自定义含义', className: 'dot dot-white', },
    { title: 'Light', key: '', subTitle: '自定义含义', className: 'dot dot-light', },
    { title: 'Muted', key: '', subTitle: '自定义含义', className: 'dot dot-muted', },
    { title: 'Dark', key: '', subTitle: '自定义含义', className: 'dot dot-dark', },
    { title: 'Black', key: '', subTitle: '自定义含义', className: 'dot dot-black', },
  ],
};

export default class Dot extends Component {

  createCode = (target) => {
    const data = DOT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<p><span class="${item.className}"></span>：${item.subTitle}</p>
      
`;
      } else {
        code += `<p><span class="${item.className}"></span>：${item.subTitle}</p>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>圆点 <code>Dot</code></h1>
        <p className="font-2x font-100">使用圆点组件，可以表示自定义状态。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>在定义好的情况下，圆点组件可以用来代替文字说明。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DOT.default.map((item, index) => {
                          return (
                            <p className="" key={index} >
                              <span className={classnames(item.className, style['badge-feature'])}></span>：{item.subTitle}
                            </p>
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

        <h2>主题</h2>
        <p>Ricenoodle 提供了<code>11</code> 中主题颜色。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DOT.theme.map((item, index) => {
                          return (
                            <p className={classnames('p-5', { 'bg-dark text-white': item.title === 'White' })} key={index} >
                              <span className={classnames(item.className, style['badge-feature'])}></span>：{item.subTitle}
                            </p>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
      </PageWrapper>
    );
  }
}
