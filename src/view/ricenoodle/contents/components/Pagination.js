import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { NO_LINK } from '../../../../constants/const';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'pagination');

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
        code += `<ul class="${item.className}">
  <li class="active"><a href=#>&laquo;</a></li>
  <li><a href=#>1</a></li>
  <li class="disabled"><a href=#>2</a></li>
  <li><a href=#>3</a></li>
  <li><a href=#>4</a></li>
  <li><a href=#>&raquo;</a></li>
</ul>
      
`;
      } else {
        code += `<ul class="${item.className}">
  <li class="active"><a href=#>&laquo;</a></li>
  <li><a href=#>1</a></li>
  <li class="disabled"><a href=#>2</a></li>
  <li><a href=#>3</a></li>
  <li><a href=#>4</a></li>
  <li><a href=#>&raquo;</a></li>
</ul>`;
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

        <h2 id="example">实例</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="pagination">
                        <li className="active"><a href={NO_LINK}>&laquo;</a></li>
                        <li><a href={NO_LINK}>1</a></li>
                        <li className="disabled"><a href={NO_LINK}>2</a></li>
                        <li><a href={NO_LINK}>3</a></li>
                        <li><a href={NO_LINK}>4</a></li>
                        <li><a href={NO_LINK}>&raquo;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="border">带边框的分页</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="pagination pagination-border">
                        <li className="active"><a href={NO_LINK}>&laquo;</a></li>
                        <li><a href={NO_LINK}>1</a></li>
                        <li className="disabled"><a href={NO_LINK}>2</a></li>
                        <li><a href={NO_LINK}>3</a></li>
                        <li><a href={NO_LINK}>4</a></li>
                        <li><a href={NO_LINK}>&raquo;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="size">尺寸</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        PANINATION.size.map((item, index) => {
                          return (
                            <ul className={classnames(item.className)} key={index}>
                              <li className="active"><a href={NO_LINK}>&laquo;</a></li>
                              <li><a href={NO_LINK}>1</a></li>
                              <li className="disabled"><a href={NO_LINK}>2</a></li>
                              <li><a href={NO_LINK}>3</a></li>
                              <li><a href={NO_LINK}>4</a></li>
                              <li><a href={NO_LINK}>&raquo;</a></li>
                            </ul>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="theme">主题</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                      {
                        PANINATION.theme.map((item, index) => {
                          const highlightCode = `<ul class="${item.className}">
  <li class="active"><a href=#>&laquo;</a></li>
  <li><a href=#>1</a></li>
  <li class="disabled"><a href=#>2</a></li>
  <li><a href=#>3</a></li>
  <li><a href=#>4</a></li>
  <li><a href=#>&raquo;</a></li>
</ul>`;
                          return (
                            <div className="col-6 p-5" key={index}>
                              <div className={classnames('ph-20', {'bg-dark': item.key === 'white'})}>
                                  <ul className={classnames(item.className)}>
                                    <li className="active"><a href={NO_LINK}>&laquo;</a></li>
                                    <li><a href={NO_LINK}>1</a></li>
                                    <li className="disabled"><a href={NO_LINK}>2</a></li>
                                    <li><a href={NO_LINK}>3</a></li>
                                    <li><a href={NO_LINK}>4</a></li>
                                    <li><a href={NO_LINK}>&raquo;</a></li>
                                  </ul>
                              </div>

                              <Highlight>
                                {highlightCode}
                              </Highlight>
                            </div>
                          )
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
