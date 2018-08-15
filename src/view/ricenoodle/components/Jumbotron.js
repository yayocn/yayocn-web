import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const JUMBOTRON = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'jumbotron', },
  ],
  responsive: [
    { title: 'Default', key: '', subTitle: '', className: 'jumbotron jumbotron-fluid', },
  ],
};

export default class Jumbotron extends Component {

  createCode = (target) => {
    const data = JUMBOTRON[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <h1>Hello World!</h1>
  <p>
    周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。
  </p>
  <hr/>

  <p>2012，伦敦见！</p>
  <button type="button" class="btn btn-primary btn-hg">了解更多</button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <h1>Hello World!</h1>
  <p>
    周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。
  </p>
  <hr/>

  <p>2012，伦敦见！</p>
  <button type="button" class="btn btn-primary btn-hg">了解更多</button>
</div>`;
      }
    })

    return code;
  }
  
  createResponsiveCode = (target) => {
    let code = `<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>Hello World!</h1>
    <p>
      周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。
    </p>
    <hr/>

    <p>2012，伦敦见！</p>
    <button type="button" class="btn btn-primary btn-hg">了解更多</button>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>轻巧，灵活的组件，用于展示醒目的内容。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        JUMBOTRON.default.map((item, index) => {
                          return (
                            <div className={item.className} key={index}>
                              <h1>Hello World!</h1>
                              <p>
                                周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。
                              </p>
                              <hr/>

                              <p>2012，伦敦见！</p>
                              <button type="button" className="btn btn-primary btn-hg">了解更多</button>
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
                      this.createCode('default')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-bold divider-lg"></div>

        <h3>响应式</h3>
        <p>添加了 <code>.jumbotron-fluid</code> 后，就可以在组件内部使用栅格系统了。</p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        JUMBOTRON.responsive.map((item, index) => {
                          return (
                            <div className={item.className} key={index}>
                              <div className="container">
                                <h1>Hello World!</h1>
                                <p>
                                  周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。
                                </p>
                                <hr/>

                                <p>2012，伦敦见！</p>
                                <button type="button" className="btn btn-primary btn-hg">了解更多</button>
                              </div>
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
                      this.createResponsiveCode()
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
