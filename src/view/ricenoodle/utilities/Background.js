import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BACKGROUND = {
  situation: [
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
        <h2>说明</h2>
        <p>使用背景类快速设置背景色。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>情景背景色</h3>
        <p>预设 <code>12</code> 种情景背景色。</p>
        <div className={classnames(style['util-bg'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    {
                      BACKGROUND.situation.map((item, index) => {
                        return (
                          <div className="col-4 mb-10" key={index} >
                            <div className={classnames(item.className, style['bg-feature'])}></div>
                          </div>
                        );
                      })
                    }
                  </div>
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
      </PageWrapper>
    );
  }
}
