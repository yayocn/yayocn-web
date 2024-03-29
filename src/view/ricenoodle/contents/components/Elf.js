import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'elf');

const ELF = {
  theme: [
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

  createFormCode = () => {
    return `<form class="form-hz">
  <div class="form-group">
    <label class="col-3 form-control-label"><span class="elf elf-primary">User Name</span></label>
    <div class="col-9">
      <input type="text" class="form-control" placeholder="enter user name"/>
    </div>
  </div>

  <div class="form-group">
    <label class="col-3 form-control-label"><span class="elf elf-primary">Password</span></label>
    <div class="col-9">
      <input type="password" class="form-control" placeholder="enter password"/>
    </div>
  </div>
</form>`;
  }
  
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
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="example">实例</h2>
        <div className={classnames('util-elf')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <form className="form-hz">
                        <div className="form-group">
                          <label className="col-3 form-control-label"><span className="elf elf-primary">User Name</span></label>
                          <div className="col-9">
                            <input type="text" className="form-control" placeholder="enter user name"/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-3 form-control-label"><span className="elf elf-primary">Password</span></label>
                          <div className="col-9">
                            <input type="password" className="form-control" placeholder="enter password"/>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createFormCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="theme">主题</h2>
        <p>Ricenoodle 提供了 <code>11</code> 种主题颜色。</p>
        <div className={classnames('util-elf')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                      {
                        ELF.theme.map((item, index) => {
                          return (
                            <div className="col-6 p-5" key={index}>
                              <div className={classnames('ph-10 pv-5', {'bg-dark text-white': item.title === 'White'})}>
                                <span className={classnames(item.className, 'elf-feature')} key={index} >
                                  {item.title}
                                </span>
                              </div>
                              <Highlight>
                                &lt;span class="{item.className}"&gt;{item.title}&lt;/span&gt;
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

        <div className="divider divider-lg"></div>
        <h2 id="position">位置</h2>
        <p>通过后缀 <code>-prev</code> 可以将小图标放在文字前面。</p>
        <div className={classnames('util-elf')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        ELF.position.map((item, index) => {
                          return (
                            <div className={classnames('ph-10 pv-5', {'bg-dark text-white': item.title === 'White'})} key={index} >
                              <span className={classnames(item.className, 'elf-feature')}>
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
                      this.createCode('position')
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
