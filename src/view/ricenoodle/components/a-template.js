import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

const PAGINATION = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'pagination pagination-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'pagination pagination-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'pagination pagination-success', },
    { title: 'Info', key: '', subTitle: '', className: 'pagination pagination-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'pagination pagination-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'pagination pagination-danger', },
    { title: 'White', key: '', subTitle: '', className: 'pagination pagination-white', },
    { title: 'Light', key: '', subTitle: '', className: 'pagination pagination-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'pagination pagination-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'pagination pagination-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'pagination pagination-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'pagination pagination-transparent text-muted', },
  ],
};

export default class Pagination extends Component {

  createCode = (target) => {
    const data = PAGINATION[target];
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
        <p>标签组件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>情景色</h3>
        <p>预设 <code>12</code> 种情景色。</p>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PAGINATION.situation.map((item, index) => {
                          return (
                            <div className="block-inline mb-10 mr-5" key={index} >
                              <span className={classnames(item.className, style['pagination-feature'])}>
                                {item.title}
                              </span>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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
