import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

const PANINATION = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'pagination', },
  ],
  border: [
    { title: 'Border', key: '', subTitle: '', className: 'pagination pagination-border', },
  ],
  size: [
    { title: 'Small', key: '', subTitle: '', className: 'pagination pagination-border pagination-sm', },
    { title: 'Default', key: '', subTitle: '', className: 'pagination pagination-border', },
    { title: 'Large', key: '', subTitle: '', className: 'pagination pagination-border pagination-lg', },
  ],
  theme: [
    { title: 'Primary', key: '', subTitle: '', className: 'pagination pagination-border pagination-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'pagination pagination-border pagination-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'pagination pagination-border pagination-success', },
    { title: 'Info', key: '', subTitle: '', className: 'pagination pagination-border pagination-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'pagination pagination-border pagination-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'pagination pagination-border pagination-danger', },
    { title: 'White', key: 'white', subTitle: '', className: 'pagination pagination-border pagination-white', },
    { title: 'Light', key: '', subTitle: '', className: 'pagination pagination-border pagination-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'pagination pagination-border pagination-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'pagination pagination-border pagination-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'pagination pagination-border pagination-black', },
  ],
};

export default class Pagination extends Component {

  createCode = (target) => {
    const data = PANINATION[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<nav>
  <ul class="${item.className}">
    <li class="active"><a href=#>&laquo;</a></li>
    <li><a href=#>1</a></li>
    <li class="disabled"><a href=#>2</a></li>
    <li><a href=#>3</a></li>
    <li><a href=#>4</a></li>
    <li><a href=#>&raquo;</a></li>
  </ul>
</nav>
      
`;
      } else {
        code += `<nav>
  <ul class="${item.className}">
    <li class="active"><a href=#>&laquo;</a></li>
    <li><a href=#>1</a></li>
    <li class="disabled"><a href=#>2</a></li>
    <li><a href=#>3</a></li>
    <li><a href=#>4</a></li>
    <li><a href=#>&raquo;</a></li>
  </ul>
</nav>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>分页 <code>Pagination</code></h1>
        <p className="font-2x font-100">对多条数据进行分页。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav>
                        <ul className="pagination">
                          <li className="active"><a href={ANCHOR}>&laquo;</a></li>
                          <li><a href={ANCHOR}>1</a></li>
                          <li className="disabled"><a href={ANCHOR}>2</a></li>
                          <li><a href={ANCHOR}>3</a></li>
                          <li><a href={ANCHOR}>4</a></li>
                          <li><a href={ANCHOR}>&raquo;</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h2>带边框的分页</h2>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav>
                        <ul className="pagination pagination-border">
                          <li className="active"><a href={ANCHOR}>&laquo;</a></li>
                          <li><a href={ANCHOR}>1</a></li>
                          <li className="disabled"><a href={ANCHOR}>2</a></li>
                          <li><a href={ANCHOR}>3</a></li>
                          <li><a href={ANCHOR}>4</a></li>
                          <li><a href={ANCHOR}>&raquo;</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('border')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>尺寸</h2>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PANINATION.size.map((item, index) => {
                          return (
                            <nav key={index}>
                              <ul className={classnames(item.className)} key={index}>
                                <li className="active"><a href={ANCHOR}>&laquo;</a></li>
                                <li><a href={ANCHOR}>1</a></li>
                                <li className="disabled"><a href={ANCHOR}>2</a></li>
                                <li><a href={ANCHOR}>3</a></li>
                                <li><a href={ANCHOR}>4</a></li>
                                <li><a href={ANCHOR}>&raquo;</a></li>
                              </ul>
                            </nav> 
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('size')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>主题</h2>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PANINATION.theme.map((item, index) => {
                          return (
                            <div key={index} className={classnames('ph-20', {'bg-dark': item.key === 'white'})}>
                              <nav>
                                <ul className={classnames(item.className)}>
                                  <li className="active"><a href={ANCHOR}>&laquo;</a></li>
                                  <li><a href={ANCHOR}>1</a></li>
                                  <li className="disabled"><a href={ANCHOR}>2</a></li>
                                  <li><a href={ANCHOR}>3</a></li>
                                  <li><a href={ANCHOR}>4</a></li>
                                  <li><a href={ANCHOR}>&raquo;</a></li>
                                </ul>
                              </nav>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
