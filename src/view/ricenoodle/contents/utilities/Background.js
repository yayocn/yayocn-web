import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'background');

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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>主题</h2>
        <p>背景工具类设有 <code>12</code> 种主题颜色。</p>
        <div className={classnames('util-bg')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      BACKGROUND.theme.map((item, index) => {
                        return (
                          <div className="col-3 p-5" key={index} >
                            <div className={classnames(item.className, 'bg-feature')}></div>
                            <code className="block text-center pt-relative top-3">&#9998;</code>
                            <code className="block text-center">{item.className}</code>
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
