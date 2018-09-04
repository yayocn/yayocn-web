import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

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
        <h1>面包屑导航 <code>Breadcrumb</code></h1>
        <p className="font-2x font-100">指示当前页面在导航层次结构中的位置，该位置通过 CSS 自动添加分隔符。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>一般为最后一项添加 <code>.active</code> 类，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames('util-breadcrumb')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
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

        <div className="divider divider-bold divider-lg"></div>

        <h2>禁用项</h2>
        <p>添加 <code>.disabled</code> 类设置禁用项，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames('util-breadcrumb')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
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
                <div className={classnames('example-code')}>
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
