import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const DATA = [
  { title: 'Primary', subTitle: '', className: 'bg-primary', },
  { title: 'Secondary', subTitle: '', className: 'bg-secondary', },
  { title: 'Success', subTitle: '', className: 'bg-success', },
  { title: 'Info', subTitle: '', className: 'bg-info', },
  { title: 'Warning', subTitle: '', className: 'bg-warning', },
  { title: 'Danger', subTitle: '', className: 'bg-danger', },
  { title: 'White', subTitle: '', className: 'bg-white', },
  { title: 'Light', subTitle: '', className: 'bg-light', },
  { title: 'Muted', subTitle: '', className: 'bg-muted', },
  { title: 'Dark', subTitle: '', className: 'bg-dark', },
  { title: 'Black', subTitle: '', className: 'bg-black', },
  { title: 'Transparent', subTitle: '', className: 'bg-transparent', },
];

export default class Background extends Component {
  render () {
    return (
      <PageWrapper>
        <h3>说明</h3>
        <p>快速设置背景色。预设 <code>12</code> 种背景色。</p>

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
