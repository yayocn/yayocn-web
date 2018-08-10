import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const ELF = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'elf elf-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'elf elf-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'elf elf-success', },
    { title: 'Info', key: '', subTitle: '', className: 'elf elf-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'elf elf-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'elf elf-danger', },
    { title: 'White', key: '', subTitle: '', className: 'elf elf-white', },
    { title: 'Light', key: '', subTitle: '', className: 'elf elf-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'elf elf-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'elf elf-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'elf elf-black', },
  ],
  position: [
    { title: 'Left', key: '', subTitle: '', className: 'elf elf-primary-prev', },
    { title: 'Right', key: '', subTitle: '', className: 'elf elf-primary', },
  ],
};

export default class Breadcrumb extends Component {

  createCode = (target) => {
    const data = ELF[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<span class="${item.className}">${item.title}</span>
      
`;
      } else {
        code += `<span class="${item.className}">${item.title}</span>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>小精灵组件。用于对 <code>form</code> 表单的必填项，重点项等进行样式增强。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <p></p>
        <div className={classnames(style['util-elf'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        ELF.situation.map((item, index) => {
                          return (
                            <div className={classnames('ph-10 pv-5', {'bg-dark text-white': item.title === 'White'})}>
                              <span className={classnames(item.className, style['elf-feature'])} key={index} >
                                {item.title}
                              </span>
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
        <h3>位置</h3>
        <p>通过后缀 <code>-prev</code> 可以将小图标放在文字前面。</p>
        <div className={classnames(style['util-elf'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        ELF.position.map((item, index) => {
                          return (
                            <div className={classnames('ph-10 pv-5', {'bg-dark text-white': item.title === 'White'})}>
                              <span className={classnames(item.className, style['elf-feature'])} key={index} >
                                {item.title}
                              </span>
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
                      this.createCode('position')
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
