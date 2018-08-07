import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DOT = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'dot dot-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'dot dot-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'dot dot-success', },
    { title: 'Info', key: '', subTitle: '', className: 'dot dot-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'dot dot-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'dot dot-danger', },
    { title: 'White', key: '', subTitle: '', className: 'dot dot-white', },
    { title: 'Light', key: '', subTitle: '', className: 'dot dot-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'dot dot-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'dot dot-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'dot dot-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'dot dot-transparent', },
  ],
};

export default class Dot extends Component {

  createCode = (target) => {
    const data = DOT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `This is a <span class="${item.className}"></span> dot.
      
`;
      } else {
        code += `This is a <span class="${item.className}"></span> dot.`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>小圆点组件。一般可用于表示各种状态。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>情景色</h3>
        <p>预设 <code>12</code> 种情景色。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        DOT.situation.map((item, index) => {
                          return (
                            <div className={classnames({ 'bg-dark text-white': item.title === 'White'})} key={index} >
                              This is a <span className={classnames(item.className, style['badge-feature'])}></span> dot.
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
      </PageWrapper>
    );
  }
}
