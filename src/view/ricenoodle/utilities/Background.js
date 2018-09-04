import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

const BACKGROUND = {
  theme: [
    { title: 'Primary', key: '', subTitle: '', className: 'bg-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'bg-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'bg-success', },
    { title: 'Info', key: '', subTitle: '', className: 'bg-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'bg-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'bg-danger', },
    { title: 'White', key: '', subTitle: '', className: 'bg-white', },
    { title: 'Light', key: '', subTitle: '', className: 'bg-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'bg-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'bg-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'bg-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'bg-transparent', },
  ]
};

export default class Background extends Component {

  createCode = (target) => {
    const data = BACKGROUND[target];
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
        <h1>背景 <code>Background</code></h1>
        <p className="font-2x font-100">使用背景工具类快速设置元素的背景颜色。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>主题</h2>
        <p>背景工具类设有 <code>12</code> 种主题颜色。</p>
        <div className={classnames('util-bg')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BACKGROUND.theme.map((item, index) => {
                        return (
                          <div className="col-4 mb-10" key={index} >
                            <h6>{item.title}</h6>
                            <div className={classnames(item.className, 'bg-feature')}></div>
                          </div>
                        );
                      })
                    }
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
      </PageWrapper>
    );
  }
}
