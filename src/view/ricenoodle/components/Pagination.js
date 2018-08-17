import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

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
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'pagination pagination-border pagination-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'pagination pagination-border pagination-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'pagination pagination-border pagination-success', },
    { title: 'Info', key: '', subTitle: '', className: 'pagination pagination-border pagination-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'pagination pagination-border pagination-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'pagination pagination-border pagination-danger', },
    { title: 'Dark', key: '', subTitle: '', className: 'pagination pagination-border pagination-dark', },
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
    <li class="active"><a href="javascript:;">&laquo;</a></li>
    <li><a href="javascript:;">1</a></li>
    <li class="disabled"><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">&raquo;</a></li>
  </ul>
</nav>
      
`;
      } else {
        code += `<nav>
  <ul class="${item.className}">
    <li class="active"><a href="javascript:;">&laquo;</a></li>
    <li><a href="javascript:;">1</a></li>
    <li class="disabled"><a href="javascript:;">2</a></li>
    <li><a href="javascript:;">3</a></li>
    <li><a href="javascript:;">4</a></li>
    <li><a href="javascript:;">&raquo;</a></li>
  </ul>
</nav>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>在多个页面中存在用于显示分页。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav>
                        <ul className="pagination">
                          <li className="active"><a href="javascript:;">&laquo;</a></li>
                          <li><a href="javascript:;">1</a></li>
                          <li className="disabled"><a href="javascript:;">2</a></li>
                          <li><a href="javascript:;">3</a></li>
                          <li><a href="javascript:;">4</a></li>
                          <li><a href="javascript:;">&raquo;</a></li>
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

        <h3>带边框的分页</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav>
                        <ul class="pagination pagination-border">
                          <li class="active"><a href="javascript:;">&laquo;</a></li>
                          <li><a href="javascript:;">1</a></li>
                          <li className="disabled"><a href="javascript:;">2</a></li>
                          <li><a href="javascript:;">3</a></li>
                          <li><a href="javascript:;">4</a></li>
                          <li><a href="javascript:;">&raquo;</a></li>
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

        <h3>尺寸</h3>
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
                            <nav>
                              <ul className={classnames(item.className)} key={index}>
                                <li className="active"><a href="javascript:;">&laquo;</a></li>
                                <li><a href="javascript:;">1</a></li>
                                <li className="disabled"><a href="javascript:;">2</a></li>
                                <li><a href="javascript:;">3</a></li>
                                <li><a href="javascript:;">4</a></li>
                                <li><a href="javascript:;">&raquo;</a></li>
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

        <h3>主题</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PANINATION.situation.map((item, index) => {
                          return (
                            <nav>
                              <ul className={classnames(item.className)} key={index}>
                                <li className="active"><a href="javascript:;">&laquo;</a></li>
                                <li><a href="javascript:;">1</a></li>
                                <li className="disabled"><a href="javascript:;">2</a></li>
                                <li><a href="javascript:;">3</a></li>
                                <li><a href="javascript:;">4</a></li>
                                <li><a href="javascript:;">&raquo;</a></li>
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