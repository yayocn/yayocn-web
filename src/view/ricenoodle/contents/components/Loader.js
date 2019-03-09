import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'loader');

const LOADER = {
  bar: [
    { title: 'Primary', key: '', subTitle: '', className: 'loader loader-win-bar', wrapClass: 'bg-dark'},
  ],
  barTheme: [
    { title: 'Primary', key: '', subTitle: '', className: 'loader loader-win-bar loader-primary', wrapClass: ''},
    { title: 'Secondary', key: '', subTitle: '', className: 'loader loader-win-bar loader-secondary', wrapClass: ''},
    { title: 'Success', key: '', subTitle: '', className: 'loader loader-win-bar loader-success', wrapClass: ''},
    { title: 'Info', key: '', subTitle: '', className: 'loader loader-win-bar loader-info', wrapClass: ''},
    { title: 'Warning', key: '', subTitle: '', className: 'loader loader-win-bar loader-warning', wrapClass: ''},
    { title: 'Danger', key: '', subTitle: '', className: 'loader loader-win-bar loader-danger', wrapClass: ''},
    { title: 'White', key: '', subTitle: '', className: 'loader loader-win-bar loader-white', wrapClass: 'bg-dark'},
    { title: 'Light', key: '', subTitle: '', className: 'loader loader-win-bar loader-light', wrapClass: 'bg-dark'},
    { title: 'Muted', key: '', subTitle: '', className: 'loader loader-win-bar loader-muted', wrapClass: ''},
    { title: 'Dark', key: '', subTitle: '', className: 'loader loader-win-bar loader-dark', wrapClass: ''},
    { title: 'Black', key: '', subTitle: '', className: 'loader loader-win-bar loader-black', wrapClass: ''},
  ],
  barSize: [
    { title: 'Small', key: '', subTitle: '', className: 'loader loader-win-bar loader-sm', wrapClass: 'bg-dark'},
    { title: 'Default', key: '', subTitle: '', className: 'loader loader-win-bar', wrapClass: 'bg-dark'},
    { title: 'Large', key: '', subTitle: '', className: 'loader loader-win-bar loader-lg', wrapClass: 'bg-dark'},
  ],
  roll: [
    { title: 'Primary', key: '', subTitle: '', className: 'loader loader-win-roll', wrapClass: 'bg-dark'},
  ],
  rollSituation: [
    { title: 'Primary', key: '', subTitle: '', className: 'loader loader-win-roll loader-primary', wrapClass: ''},
    { title: 'Secondary', key: '', subTitle: '', className: 'loader loader-win-roll loader-secondary', wrapClass: ''},
    { title: 'Success', key: '', subTitle: '', className: 'loader loader-win-roll loader-success', wrapClass: ''},
    { title: 'Info', key: '', subTitle: '', className: 'loader loader-win-roll loader-info', wrapClass: ''},
    { title: 'Warning', key: '', subTitle: '', className: 'loader loader-win-roll loader-warning', wrapClass: ''},
    { title: 'Danger', key: '', subTitle: '', className: 'loader loader-win-roll loader-danger', wrapClass: ''},
    { title: 'White', key: '', subTitle: '', className: 'loader loader-win-roll loader-white', wrapClass: 'bg-dark'},
    { title: 'Light', key: '', subTitle: '', className: 'loader loader-win-roll loader-light', wrapClass: 'bg-dark'},
    { title: 'Muted', key: '', subTitle: '', className: 'loader loader-win-roll loader-muted', wrapClass: ''},
    { title: 'Dark', key: '', subTitle: '', className: 'loader loader-win-roll loader-dark', wrapClass: ''},
    { title: 'Black', key: '', subTitle: '', className: 'loader loader-win-roll loader-black', wrapClass: ''},
  ],
  rollSize: [
    { title: 'Small', key: '', subTitle: '', className: 'loader loader-win-roll loader-sm', wrapClass: 'bg-dark'},
    { title: 'Default', key: '', subTitle: '', className: 'loader loader-win-roll', wrapClass: 'bg-dark'},
    { title: 'Large', key: '', subTitle: '', className: 'loader loader-win-roll loader-lg', wrapClass: 'bg-dark'},
  ],
};

export default class Loader extends Component {

  createCode = (target) => {
    const data = LOADER[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <span class="l-1"></span>
  <span class="l-2"></span>
  <span class="l-3"></span>
  <span class="l-4"></span>
  <span class="l-5"></span>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <span class="l-1"></span>
  <span class="l-2"></span>
  <span class="l-3"></span>
  <span class="l-4"></span>
  <span class="l-5"></span>
</div>`;
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

        <h2 id="bar">Bar</h2>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        LOADER.bar.map((item, index) => {
                          return (
                            <div className={classnames(item.wrapClass, "loader-wrap p-20")} key={index}>
                              <div className={item.className}>
                                <span className="l-1"></span>
                                <span className="l-2"></span>
                                <span className="l-3"></span>
                                <span className="l-4"></span>
                                <span className="l-5"></span>
                              </div>
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
                      this.createCode('bar')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="bar_theme" className="mt-20">主题</h3>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      LOADER.barTheme.map((item, index) => {
                        const highlihgtCode = `<div class="${item.className}">
  <span class="l-1"></span>
  <span class="l-2"></span>
  <span class="l-3"></span>
  <span class="l-4"></span>
  <span class="l-5"></span>
</div>`;
                        return (
                          <div className={classnames(item.wrapClass, "loader-wrap p-20 col-lg-6 col-12")} key={index}>
                            <div className={classnames(item.className, 'mb-10')}>
                              <span className="l-1"></span>
                              <span className="l-2"></span>
                              <span className="l-3"></span>
                              <span className="l-4"></span>
                              <span className="l-5"></span>
                            </div>

                            <Highlight>
                              {highlihgtCode}
                            </Highlight>
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

        <h3 id="bar_size" className="mt-20">尺寸</h3>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      LOADER.barSize.map((item, index) => {
                        return (
                          <div className={classnames(item.wrapClass, "loader-wrap p-20 col-lg-4 col-md-6 col-12")} key={index}>
                            <div className={item.className}>
                              <span className="l-1"></span>
                              <span className="l-2"></span>
                              <span className="l-3"></span>
                              <span className="l-4"></span>
                              <span className="l-5"></span>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('barSize')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="roll">Roll</h2>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        LOADER.roll.map((item, index) => {
                          return (
                            <div className={classnames(item.wrapClass, "loader-wrap p-20")} key={index}>
                              <div className={item.className}>
                                <span className="l-1"></span>
                                <span className="l-2"></span>
                                <span className="l-3"></span>
                                <span className="l-4"></span>
                                <span className="l-5"></span>
                              </div>
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
                      this.createCode('roll')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="roll_theme" className="mt-20">主题</h3>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      LOADER.rollSituation.map((item, index) => {
                        const highlihgtCode = `<div class="${item.className}">
  <span class="l-1"></span>
  <span class="l-2"></span>
  <span class="l-3"></span>
  <span class="l-4"></span>
  <span class="l-5"></span>
</div>`;
                        return (
                          <div className="col-lg-6 col-12" key={index}>
                            <div className={classnames(item.wrapClass, "loader-wrap p-20")}>
                              <div className={item.className}>
                                <span className="l-1"></span>
                                <span className="l-2"></span>
                                <span className="l-3"></span>
                                <span className="l-4"></span>
                                <span className="l-5"></span>
                              </div>
                            </div>

                            <Highlight>
                              {highlihgtCode}
                            </Highlight>
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

        <h3 id="roll_size" className="mt-20">尺寸</h3>
        <div className={classnames('util-loader')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      LOADER.rollSize.map((item, index) => {
                        return (
                          <div className={classnames(item.wrapClass, "loader-wrap p-20 col-lg-4 col-md-6 col-12")} key={index}>
                            <div className={item.className}>
                              <span className="l-1"></span>
                              <span className="l-2"></span>
                              <span className="l-3"></span>
                              <span className="l-4"></span>
                              <span className="l-5"></span>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('rollSize')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
