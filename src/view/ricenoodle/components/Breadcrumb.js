import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

export default class Breadcrumb extends Component {

  createCode = () => {
    let code = `<ul class="breadcrumb">
  <li><a href="/">Home</a></li>
  <li><a href="/">Dashborad</a></li>
  <li class="active">Active</li>
</ul>`;

    return code;
  }

  createDisabledCode = () => {
    let code = `<ul className="breadcrumb">
  <li><a href="/">Home</a></li>
  <li className="disabled">Dashborad</li>
  <li className="active">Active</li>
</ul>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>标签组件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>例子</h3>
        <p>一般为最后一项添加 <code>.active</code> 类，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames(style['util-breadcrumb'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Dashborad</a></li>
                        <li className="active">Active</li>
                      </ul>
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

        <div className="divider divider-bold divider-lg"></div>

        <h3>禁用项</h3>
        <p>添加 <code>.disabled</code> 类设置禁用项，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames(style['util-breadcrumb'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li className="disabled">Dashborad</li>
                        <li className="active">Active</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDisabledCode()
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
