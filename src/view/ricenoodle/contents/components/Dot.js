import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'dot');

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
        code += `<p><span class="${item.className}"></span> ${item.subTitle}</p>
      
`;
      } else {
        code += `<p><span class="${item.className}"></span> ${item.subTitle}</p>`;
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
        <p>在定义好的情况下，圆点组件可以用来代替文字说明。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DOT.default.map((item, index) => {
                          return (
                            <p className="" key={index} >
                              <span className={classnames(item.className, 'badge-feature')}></span> {item.subTitle}
                            </p>
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

        <h2 id="theme">主题</h2>
        <p>Ricenoodle 提供了<code>11</code> 中主题颜色。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      DOT.theme.map((item, index) => {
                        return (
                          <div className="col-6 p-5" key={index}>
                            <p className={classnames('p-5', { 'bg-dark text-white': item.title === 'White' })} key={index} >
                              <span className={classnames(item.className, 'badge-feature')}></span> {item.subTitle}
                            </p>

                            <Highlight>
                              &lt;span class="{item.className}"&gt;&lt;/span&gt;
                            </Highlight>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
