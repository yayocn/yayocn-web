import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

const TABLE = {
  default: [
    { title: 'Primary', key: '', subTitle: '', className: 'table', },
  ],
  small: [
    { title: 'Primary', key: '', subTitle: '', className: 'table table-sm', },
  ],
  striped: [
    { title: 'Primary', key: '', subTitle: '', className: 'table table-striped', },
  ],
  border: [
    { title: 'Primary', key: '', subTitle: '', className: 'table table-border', },
  ],
  hover: [
    { title: 'Primary', key: '', subTitle: '', className: 'table table-hover', },
  ],
  dark: [
    { title: 'Primary', key: '', subTitle: '', className: 'table table-dark table-hover', },
  ],
  theme: [
    { title: 'Active', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-active' },
    { title: 'Primary', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-primary' },
    { title: 'Secondary', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-secondary' },
    { title: 'Success', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-success' },
    { title: 'Info', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-info' },
    { title: 'Warning', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-warning' },
    { title: 'Danger', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-danger' },
    { title: 'White', key: 'white', subTitle: '', className: 'table table-hover', rowClass: 'row-white' },
    { title: 'Light', key: 'light', subTitle: '', className: 'table table-hover', rowClass: 'row-light' },
    { title: 'Muted', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-muted' },
    { title: 'Dark', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-dark' },
    { title: 'Black', key: '', subTitle: '', className: 'table table-hover', rowClass: 'row-black' },
  ],
};

export default class Table extends Component {

  createCode = (target) => {
    const data = TABLE[target];
    let item = data[0];
    let code = `<table class="${item.className}">
  <caption>This is default tables</caption>
  <thead>
  <tr>
    <th>#</th>
    <th>First</th>
    <th>Second</th>
    <th>Third</th>
    <th>Fourth</th>
    <th>Fifth</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">First</th>
    <td>first</td>
    <td>second</td>
    <td>third</td>
    <td>fourth</td>
    <td>fifth</td>
  </tr>
  <tr>
    <th scope="row">First</th>
    <td>first</td>
    <td>second</td>
    <td>third</td>
    <td>fourth</td>
    <td>fifth</td>
  </tr>
  <tr>
    <th scope="row">First</th>
    <td>first</td>
    <td>second</td>
    <td>third</td>
    <td>fourth</td>
    <td>fifth</td>
  </tr>
  </tbody>
</table>`;

    return code;
  }

  createSituationCode = (target = 'theme') => {
    const data = TABLE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<tr class="${item.rowClass}"></tr>
      
`;
      } else {
        code += `<tr class="${item.rowClass}"></tr>`;
      }
    })

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>表格 <code>Table</code></h1>
        <p className="font-2x font-100">表格适用于数据的展示。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>为表格添加 <code>.table</code> 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。</p>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.default.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
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

        <h2>紧凑型表格</h2>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.small.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('small')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>条纹表格</h2>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.striped.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('striped')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>带边框的表格</h2>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.border.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
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

        <h2>Hover</h2>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.hover.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('hover')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>暗色表格</h2>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        TABLE.dark.map((item, index) => {
                          return (
                            <table className={item.className} key={index}>
                              <caption>This is default tables</caption>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Second</th>
                                <th>Third</th>
                                <th>Fourth</th>
                                <th>Fifth</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              <tr>
                                <th scope="row">First</th>
                                <td>first</td>
                                <td>second</td>
                                <td>third</td>
                                <td>fourth</td>
                                <td>fifth</td>
                              </tr>
                              </tbody>
                            </table>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('dark')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>行状态</h2>
        <p>在 <code>&lt;tr&gt;</code> 上添加 <code>.row- [active | primary | ...]</code> 等类设置行状态。</p>
        <div className={classnames('util-table')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <table className="table table-hover">
                        <caption>This is default tables</caption>
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Second</th>
                          <th>Third</th>
                          <th>Fourth</th>
                          <th>Fifth</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                          TABLE.theme.map((item, index) => {
                            return (
                              <tr className={item.rowClass} key={index}>
                                <th scope="row" className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>First</th>
                                <td className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>first</td>
                                <td className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>second</td>
                                <td className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>third</td>
                                <td className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>fourth</td>
                                <td className={classnames({'text-dark': item.key === 'light' || item.key === 'white'})}>fifth</td>
                              </tr>
                            );
                          })
                        }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createSituationCode()
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
