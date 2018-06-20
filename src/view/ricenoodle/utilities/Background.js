import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DATA = [
  {
    title: 'Primary',
    subTitle: '',
    className: 'bg-primary',
  },
  // {
  //   title: 'Secondary',
  //   subTitle: '',
  //   className: 'bg-secondary',
  // }
];

export default class Background extends Component {
  render () {
    return (
      <PageWrapper>
        <h3>说明</h3>
        <p>快速设置背景色。预设 <code>12</code> 种颜色。</p>

        <div className={classnames(style['util-bg'])}>
          <div className="row">
            {
              DATA.map((item, index) => {
                return <div className="col-6 mb-10" key={index}>
                  <h5>{item.title}</h5>
                  <div className={classnames(common['feature-example'])}>
                    <div className={classnames(common['example-view'])}>
                      <div className={classnames(item.className, style['bg-feature'])}></div>
                    </div>
                    <div className={classnames(common['example-code'])}>
                      <Highlight>
                        {
                          `<div class="${item.className}">
  ...
</div>`
                        }
                      </Highlight>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </PageWrapper>
    );
  }
}
