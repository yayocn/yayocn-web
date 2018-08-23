import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const FORM = {
  formControlSize: [
    { title: 'Small', key: '', subTitle: '', className: 'form-control form-control-sm', },
    { title: 'Default', key: '', subTitle: '', className: 'form-control', },
    { title: 'Large', key: '', subTitle: '', className: 'form-control form-control-lg', },
    { title: 'Huge', key: '', subTitle: '', className: 'form-control form-control-hg', },
  ],
  formControlTheme: [
    { title: 'Success', key: '', subTitle: '', className: 'form-control form-control-success', },
    { title: 'Warning', key: '', subTitle: '', className: 'form-control form-control-warning', },
    { title: 'Error', key: '', subTitle: '', className: 'form-control form-control-error', },
  ],
  formGroup: [
    { title: 'Small group', key: '', subTitle: '', className: 'form-group form-group-sm', },
    { title: 'Default group', key: '', subTitle: '', className: 'form-group', },
    { title: 'Large group', key: '', subTitle: '', className: 'form-group form-group-lg', },
    { title: 'Huge group', key: '', subTitle: '', className: 'form-group form-group-hg', },
  ],
  checkbox: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox', },
    { title: 'Primary', key: '', subTitle: '', className: 'checkbox checkbox-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'checkbox checkbox-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'checkbox checkbox-success', },
    { title: 'Info', key: '', subTitle: '', className: 'checkbox checkbox-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'checkbox checkbox-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'checkbox checkbox-danger', },
    { title: 'Light', key: '', subTitle: '', className: 'checkbox checkbox-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'checkbox checkbox-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'checkbox checkbox-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'checkbox checkbox-black', },
  ],
  checkboxInline: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox inline', },
    { title: 'Primary', key: '', subTitle: '', className: 'checkbox checkbox-primary inline', },
    { title: 'Secondary', key: '', subTitle: '', className: 'checkbox checkbox-secondary inline', },
    { title: 'Success', key: '', subTitle: '', className: 'checkbox checkbox-success inline', },
    { title: 'Info', key: '', subTitle: '', className: 'checkbox checkbox-info inline', },
    { title: 'Warning', key: '', subTitle: '', className: 'checkbox checkbox-warning inline', },
    { title: 'Danger', key: '', subTitle: '', className: 'checkbox checkbox-danger inline', },
    { title: 'Light', key: '', subTitle: '', className: 'checkbox checkbox-light inline', },
    { title: 'Muted', key: '', subTitle: '', className: 'checkbox checkbox-muted inline', },
    { title: 'Dark', key: '', subTitle: '', className: 'checkbox checkbox-dark inline', },
    { title: 'Black', key: '', subTitle: '', className: 'checkbox checkbox-black inline', },
  ],
  checkboxDisabled: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox disabled', },
  ],
  checkboxSwitch: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox-switch', },
    { title: 'Secondary', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-success', },
    { title: 'Info', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-danger', },
    { title: 'Light', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-dark', },
    { title: 'black', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-black', },
  ],
  checkboxSwitchSize: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-sm', },
    { title: 'Secondary', key: '', subTitle: '', className: 'checkbox-switch', },
    { title: 'Success', key: '', subTitle: '', className: 'checkbox-switch checkbox-switch-lg', },
  ],
  checkboxSwitchDisabled: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox-switch disabled', },
  ],
  radio: [
    { title: 'Default', key: '', subTitle: '', className: 'radio', },
    { title: 'Primary', key: '', subTitle: '', className: 'radio radio-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'radio radio-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'radio radio-success', },
    { title: 'Info', key: '', subTitle: '', className: 'radio radio-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'radio radio-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'radio radio-danger', },
    { title: 'Light', key: '', subTitle: '', className: 'radio radio-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'radio radio-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'radio radio-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'radio radio-black', },
  ],
  radioInline: [
    { title: 'Default', key: '', subTitle: '', className: 'radio inline', },
    { title: 'Primary', key: '', subTitle: '', className: 'radio radio-primary inline', },
    { title: 'Secondary', key: '', subTitle: '', className: 'radio radio-secondary inline', },
    { title: 'Success', key: '', subTitle: '', className: 'radio radio-success inline', },
    { title: 'Info', key: '', subTitle: '', className: 'radio radio-info inline', },
    { title: 'Warning', key: '', subTitle: '', className: 'radio radio-warning inline', },
    { title: 'Danger', key: '', subTitle: '', className: 'radio radio-danger inline', },
    { title: 'Light', key: '', subTitle: '', className: 'radio radio-light inline', },
    { title: 'Muted', key: '', subTitle: '', className: 'radio radio-muted inline', },
    { title: 'Dark', key: '', subTitle: '', className: 'radio radio-dark inline', },
    { title: 'Black', key: '', subTitle: '', className: 'radio radio-black inline', },
  ],
  radioDisabled: [
    { title: 'Default', key: '', subTitle: '', className: 'radio disabled', },
  ],
  file: [
    { title: 'Default', key: '', subTitle: '', className: 'form-file', },
  ],
  horizontal: [
    { title: 'Default', key: '', subTitle: '', className: 'form-hz', },
  ],
  inline: [
    { title: 'Default', key: '', subTitle: '', className: 'form-inline', },
  ],
};

export default class Form extends Component {

  createFormCode = () => {
    let code = `<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input id="exampleInputEmail1" type="email" class="form-control" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group checkbox">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

    return code;
  }
  
  createFormControlCode = () => {
    let code = `<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input id="exampleInputEmail1" type="email" class="form-control" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <div class="select">
      <select class="form-control" name="exampleFormControlSelect1">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <div class="triangle-down"></div>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label>Example textarea</label>
    <textarea class="form-control"></textarea>
  </div>
</form>`;

    return code;
  }

  createFormControlSizeCode = (target = 'formControlSize') => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<input type="text" class="${item.className}" placeholder="${item.title}" />
      
`;
      } else {
        code += `<input type="text" class="${item.className}" placeholder="${item.title}" />`;
      }
    })

    return code;
  }

  createFormControlSituationCode = (target = 'formControlTheme') => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<input type="text" class="${item.className}" placeholder="${item.title}" />
      
`;
      } else {
        code += `<input type="text" class="${item.className}" placeholder="${item.title}" />`;
      }
    })

    return code;
  }

  createFormGroupCode = (target = 'formGroup') => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <label class="col-3 form-control-label">${item.title}</label>
  <div class="col-9">
    <input type="text" class="form-control" placeholder="${item.title}"/>
  </div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <label class="col-3 form-control-label">${item.title}</label>
  <div class="col-9">
    <input type="text" class="form-control" placeholder="${item.title}"/>
  </div>
</div>`;
      }
    })

    return code;
  }

  createCheckboxCode = (target = 'checkbox', disabled = false) => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <input id="checkbox-${index}" type="checkbox" name="${target}" disabled="${disabled}"/>
  <label for="checkbox-${index}">${item.title}</label>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <input id="checkbox-${index}" type="checkbox" name="${target}" disabled="${disabled}"/>
  <label for="checkbox-${index}">${item.title}</label>
</div>`;
      }
    })

    return code;
  }

  createRadioCode = (target = 'radio', disabled = false) => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <input id="radio-${index}" type="radio" name="${target}" disabled="${disabled}"/>
  <label for="radio-${index}">${item.title}</label>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <input id="radio-${index}" type="radio" name="${target}" disabled="${disabled}"/>
  <label for="radio-${index}">${item.title}</label>
</div>`;
      }
    })

    return code;
  }

  createFileCode = (target = 'file', disabled = false) => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <input type="file" class="form-control" name="upload" />
  <label class="file-surface">点击上传</label>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <input type="file" class="form-control" name="upload" />
  <label class="file-surface">点击上传</label>
</div>`;
      }
    })

    return code;
  }

  createHorizontalCode = (target = 'horizontal') => {
    let code = ``;
    code = `<form class="form-hz">
  <div class="form-group">
    <label class="col-3 form-control-label">User Name</label>
    <div class="col-9">
      <input type="text" class="form-control" placeholder="enter user name"/>
    </div>
  </div>

  <div class="form-group">
    <label class="col-3 form-control-label">password</label>
    <div class="col-9">
      <input type="password" class="form-control" placeholder="enter password"/>
    </div>
  </div>
</form>`;

    return code;
  }

  createInlineCode = (target = 'inline') => {
    let code = ``;
    code = `<form class="form-inline">
  <div class="form-group">
    <label className="form-control-label mr-5">User Name</label>
    <input type="text" class="form-control" placeholder="user name"/>
  </div>

  <div class="form-group">
    <label className="form-control-label mr-5">Password</label>
    <input type="password" class="form-control" placeholder="password"/>
  </div>
  <button class="btn btn-default" type="button">submit</button>
</form>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>表单 <code>Form</code></h1>
        <p className="font-2x font-100">用于创建各种表单的表单控件样式。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input id="exampleInputEmail1" type="email" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group checkbox">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h2>用户输入</h2>
        <p>重置 <code>&lt;input&gt; &lt;select&gt; &lt;textarea&gt;</code> 等元素的样式。</p>

        <h3><code>.form-control</code></h3>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail2">Email address</label>
                          <input id="exampleInputEmail2" type="email" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                          <label>Example select</label>
                          <div className="select">
                            <select className="form-control" name="">
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                            </select>
                            <div className="triangle-down"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                          <select multiple className="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Example textarea</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createFormControlCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">尺寸</h3>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.formControlSize.map((item, index) => {
                          return (
                            <input type="text" className={classnames(item.className, 'mb-10')} placeholder={item.title} key={index}/>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createFormControlSizeCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">输入状态</h3>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.formControlTheme.map((item, index) => {
                          return (
                            <input type="text" className={classnames(item.className, 'mb-10')} placeholder={item.title} key={index}/>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createFormControlSituationCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">禁用</h3>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <input type="text" className="form-control" disabled={true} placeholder="Ricenoodle"/>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;input type="text" className="form-control" disabled  placeholder="Ricenoodle"/>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>表单组</h2>
        <p>使用 <code>.form-group-*</code> 时, 会对子节点中的 <code>.form-control</code> 进行预设。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.formGroup.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mb-10')} key={index}>
                              <label>{item.title}</label>
                              <input type="text" className="form-control" placeholder={item.title}/>
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
                      this.createFormGroupCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>复选框</h2>
        <p>复选框对结构要求很严，<code>label</code> 需要紧跟着 <code>input</code>。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.checkbox.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'checkbox'+index} type="checkbox" name="checkbox"/>
                              <label htmlFor={'checkbox'+index}>{item.title}</label>
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
                      this.createCheckboxCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">行内复选框</h3>
        <p>额外添加 <code>.inline</code> 类。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.checkboxInline.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'checkbox-inline'+index} type="checkbox" name="checkbox"/>
                              <label htmlFor={'checkbox-inline'+index}>{item.title}</label>
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
                      this.createCheckboxCode('checkboxInline')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">禁用状态</h3>
        <p>额外添加 <code>.disabled</code> 类。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.checkboxDisabled.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'checkbox-disabled-'+index} type="checkbox" name="checkbox" disabled={true}/>
                              <label htmlFor={'checkbox-disabled-'+index}>{item.title}</label>
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
                      this.createCheckboxCode('checkboxDisabled', true)
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">开关</h3>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.checkboxSwitch.map((item, index) => {
                          return (
                            <div className={classnames(item.className, 'mr-10')} key={index}>
                              <input id={'checkbox-switch-'+index} type="checkbox" defaultChecked />
                              <label htmlFor={'checkbox-switch-'+index}>Check</label>
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
                      this.createCheckboxCode('checkboxSwitch')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">尺寸</h3>
        <p>开关尺寸。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="flex align-items-end">
                        {
                          FORM.checkboxSwitchSize.map((item, index) => {
                            return (
                              <div className={classnames(item.className, 'mr-10')} key={index}>
                                <input id={'checkbox-switch-size-'+index} type="checkbox" defaultChecked />
                                <label htmlFor={'checkbox-switch-size-'+index}>Check</label>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCheckboxCode('checkboxSwitchSize')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">开关禁用</h3>
        <p>额外添加 <code>.disabled</code> 类。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="flex align-items-end">
                        {
                          FORM.checkboxSwitchDisabled.map((item, index) => {
                            return (
                              <div className={classnames(item.className, 'mr-10')} key={index}>
                                <input id={'checkbox-switch-disbaled-'+index} type="checkbox" />
                                <label htmlFor={'checkbox-switch-disbaled-'+index}>Check</label>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCheckboxCode('checkboxSwitchDisabled', true)
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>单选框</h2>
        <p>单选框对结构要求很严，<code>label</code> 需要紧跟着 <code>input</code>。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.radio.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'radio'+index} type="radio" name="radio"/>
                              <label htmlFor={'radio'+index}>{item.title}</label>
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
                      this.createRadioCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">行内单选框</h3>
        <p>额外添加 <code>.inline</code> 类。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.radioInline.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'radio-inline'+index} type="radio" name="radio"/>
                              <label htmlFor={'radio-inline'+index}>{item.title}</label>
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
                      this.createRadioCode('radioInline')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">单选框禁用</h3>
        <p>添加 <code>.disabled</code> 类。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.radioDisabled.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input id={'radio-disabled-'+index} type="radio" name="radio" disabled={true}/>
                              <label htmlFor={'radio-disabled-'+index}>{item.title}</label>
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
                      this.createRadioCode('radioDisabled', true)
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>文件上传</h2>
        <p>文件上传对结构要求很严，<code>label</code> 需要紧跟着 <code>input</code>。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.file.map((item, index) => {
                          return (
                            <div className={classnames(item.className)} key={index}>
                              <input type="file" className="form-control" name="upload"/>
                              <label className="file-surface">点击上传</label>
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
                      this.createFileCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>水平表单</h2>
        <p>结合 <code>.form-hz</code> 和 <code>.form-group</code> 使用，创建水平排列的表单。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.horizontal.map((item, index) => {
                          return (
                            <form className={classnames(item.className)} key={index}>
                              <div className="form-group">
                                <label className="col-3 form-control-label">User Name</label>
                                <div className="col-9">
                                  <input type="text" className="form-control" placeholder="enter user name"/>
                                </div>
                              </div>

                              <div className="form-group">
                                <label className="col-3 form-control-label">password</label>
                                <div className="col-9">
                                  <input type="password" className="form-control" placeholder="enter password"/>
                                </div>
                              </div>
                            </form>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createHorizontalCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>行表单</h2>
        <p>使用<code>.form-inline</code>，创建行表单。</p>
        <div className={classnames(style['util-form'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        FORM.inline.map((item, index) => {
                          return (
                            <form className={classnames(item.className)} key={index}>
                              <div className="form-group">
                                <label className="form-control-label mr-5">User Name</label>
                                <input type="text" className="form-control" placeholder="user name"/>
                              </div>

                              <div className="form-group">
                                <label className="form-control-label mr-5">Password</label>
                                <input type="password" className="form-control" placeholder="password"/>
                              </div>
                              <button className="btn btn-default" type="button">submit</button>
                            </form>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createInlineCode()
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
