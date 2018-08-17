import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const BADGE = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'badge badge-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'badge badge-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'badge badge-success', },
    { title: 'Info', key: '', subTitle: '', className: 'badge badge-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'badge badge-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'badge badge-danger', },
    { title: 'White', key: '', subTitle: '', className: 'badge badge-white', },
    { title: 'Light', key: '', subTitle: '', className: 'badge badge-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'badge badge-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'badge badge-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'badge badge-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'badge badge-transparent text-muted', },
  ],
  link: [
    { title: 'Primary', key: '', subTitle: '', className: 'badge badge-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'badge badge-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'badge badge-success', },
    { title: 'Info', key: '', subTitle: '', className: 'badge badge-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'badge badge-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'badge badge-danger', },
    { title: 'White', key: '', subTitle: '', className: 'badge badge-white', },
    { title: 'Light', key: '', subTitle: '', className: 'badge badge-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'badge badge-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'badge badge-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'badge badge-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'badge badge-transparent text-muted', },
  ],
  pill: [
    { title: 'Primary', key: '', subTitle: '', className: 'badge badge-pill badge-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'badge badge-pill badge-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'badge badge-pill badge-success', },
    { title: 'Info', key: '', subTitle: '', className: 'badge badge-pill badge-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'badge badge-pill badge-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'badge badge-pill badge-danger', },
    { title: 'White', key: '', subTitle: '', className: 'badge badge-pill badge-white', },
    { title: 'Light', key: '', subTitle: '', className: 'badge badge-pill badge-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'badge badge-pill badge-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'badge badge-pill badge-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'badge badge-pill badge-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'badge badge-pill badge-transparent text-muted', },
  ],
};

export default class Badge extends Component {

  createCode = (target) => {
    const data = BADGE[target];
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

  createLinkCode = (target = 'link') => {
    const data = BADGE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<a href="/" class="${item.className}">${item.title}</a>
      
`;
      } else {
        code += `<a href="/" class="${item.className}">${item.title}</a>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>标签组件。</p>

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
                        BADGE.situation.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <span className={classnames(item.className, style['badge-feature'])}>
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
        <h3>Link</h3>
        <p>在 <code>&lt;a&gt;</code> 上使用 <code>badge</code>。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        BADGE.link.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index}>
                              <a href="" className={classnames(item.className, style['badge-feature'])}>
                                {item.title}
                              </a>
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
                      this.createLinkCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Pill</h3>
        <p>胶囊样式。使用 <code>.badge-pill</code> 设置。</p>
        <p className="text-info">也可以使用 <code>.border-round-circle</code>。</p>
        
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">

                    </div>
                    {
                      BADGE.pill.map((item, index) => {
                        return (
                          <div className="block-inline mb-10 mr-5" key={index} >
                            <span className={classnames(item.className, style['badge-feature'])}>
                              {item.title}
                            </span>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('pill')
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