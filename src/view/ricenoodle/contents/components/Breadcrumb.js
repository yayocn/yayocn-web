import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { NO_LINK } from '../../constants/const';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'breadcrumb');

export default class Breadcrumb extends Component {

  createCode = () => {
    let code = `<ul class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Dashborad</a></li>
  <li class="active">Active</li>
</ul>`;

    return code;
  }

  createDisabledCode = () => {
    let code = `<ul className="breadcrumb">
  <li><a href="#">Home</a></li>
  <li className="disabled">Dashborad</li>
  <li className="active">Active</li>
</ul>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="example">实例</h2>
        <p>一般为最后一项添加 <code>.active</code> 类，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames('util-breadcrumb')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="breadcrumb">
                        <li><a href={NO_LINK}>Home</a></li>
                        <li><a href={NO_LINK}>Dashborad</a></li>
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

        <h2 id="disabled">禁用项</h2>
        <p>添加 <code>.disabled</code> 类设置禁用项，且不需要 <code>&lt;a&gt;</code>。</p>
        <div className={classnames('util-breadcrumb')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="breadcrumb">
                        <li><a href={NO_LINK}>Home</a></li>
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
      </Fragment>
    );
  }
}
