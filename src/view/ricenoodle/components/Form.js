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
  formControlSituation: [
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
  ],
  checkboxInline: [
    { title: 'Default', key: '', subTitle: '', className: 'checkbox inline', },
    { title: 'Primary', key: '', subTitle: '', className: 'checkbox checkbox-primary inline', },
    { title: 'Secondary', key: '', subTitle: '', className: 'checkbox checkbox-secondary inline', },
    { title: 'Success', key: '', subTitle: '', className: 'checkbox checkbox-success inline', },
    { title: 'Info', key: '', subTitle: '', className: 'checkbox checkbox-info inline', },
    { title: 'Warning', key: '', subTitle: '', className: 'checkbox checkbox-warning inline', },
    { title: 'Danger', key: '', subTitle: '', className: 'checkbox checkbox-danger inline', },
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

  createFormControlSituationCode = (target = 'formControlSituation') => {
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
  <label>${item.title}</label>
  <input type="text" class="form-control" placeholder="${item.title}"/>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <label>${item.title}</label>
  <input type="text" class="form-control" placeholder="${item.title}"/>
</div>`;
      }
    })

    return code;
  }

  createCheckboxCode = (target = 'checkbox') => {
    const data = FORM[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <input id="checkbox-${index}" type="checkbox" name="${target}"/>
  <label for="checkbox-${index}">${item.title}</label>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <input id="checkbox-${index}" type="checkbox" name="${target}"/>
  <label for="checkbox-${index}">${item.title}</label>
</div>`;
      }
    })

    return code;
  }

  createCode = (target) => {
    const data = FORM[target];
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
        <p>表单组件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-badge'])}>
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

        <h3>Form control</h3>
        <div className={classnames(style['util-badge'])}>
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

        <h4 className="mt-20">尺寸</h4>
        <div className={classnames(style['util-badge'])}>
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

        <h4 className="mt-20">情景</h4>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      {
                        FORM.formControlSituation.map((item, index) => {
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

        <h4 className="mt-20">禁用</h4>
        <div className={classnames(style['util-badge'])}>
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
        <h3>Form group</h3>
        <p>使用 <code>.form-group-*</code> 时, 会对子节点中的 <code>.form-control</code> 进行预设。</p>
        <div className={classnames(style['util-badge'])}>
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
        <h3>Checkbox</h3>
        <p><code>.checkbox</code> 对结构要求很严，<code>label</code> 需要紧跟着 <code>input</code>。</p>
        <div className={classnames(style['util-badge'])}>
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

        <h4 className="mt-20">Inline checkbox</h4>
        <div className={classnames(style['util-badge'])}>
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
      </PageWrapper>
    );
  }
}
