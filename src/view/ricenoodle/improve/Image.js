import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';
import style from '../style.scss';

import img1 from '../../../../public/image/slide1.jpg';
import img2 from '../../../../public/image/slide2.jpg';
import img3 from '../../../../public/image/slide3.jpg';

const IMAGE = {
  fluid: [
    { title: 'Primary', key: '', subTitle: '', className: 'img-fluid' },
  ],
  thumbnail: [
    { title: 'Primary', key: '', subTitle: '', className: 'img-thumbnail' },
  ],
  extro: [
    { title: 'Round', key: '', subTitle: '', className: 'img-fluid border' },
    { title: 'Round', key: '', subTitle: '', className: 'img-fluid border border-round' },
    { title: 'circle', key: '', subTitle: '', className: 'img-fluid border border-round-circle' },
  ]
};

export default class Image extends Component {

  createCode = (target) => {
    const data = IMAGE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<img class="${item.className}" src="" alt=""/>
      
`;
      } else {
        code += `<img class="${item.className}" src="" alt=""/>`;
      }
    });

    return code;
  };

  createFigureCode = () => {
    let code = `<figure class="figure">
  <img class="figure-img img-fluid" src=""/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>`;

    return code;
  };

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>用于选择图像到响应行为的文档和示例（因此它们永远不会变得比它们的父元素更大）并且通过类添加轻量级样式。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>响应式</h3>
        <div className={classnames(style['util-image'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-4">
                      <img src={img1} alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('fluid')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>缩略图</h3>
        <p>在 <code>.img-fluid</code> 的基础上，增加了一些样式，比如边框和内边距。</p>
        <div className={classnames(style['util-image'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-4">
                      <img src={img2} alt="" className="img-thumbnail"/>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('thumbnail')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>图片说明</h3>
        <p><code>figure</code>，对图片和说明信息进行组合。</p>
        <div className={classnames(style['util-image'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-4">
                      <figure className="figure">
                        <img className="figure-img img-fluid" src={img3} alt="some text."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createFigureCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h3>扩展</h3>
        <p>结合其他的类对图片进行增强，例如 <code>.border-round</code>。</p>
        <div className={classnames(style['util-image'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        {
                          IMAGE.extro.map((item, index) => {
                            return (
                              <div className="col-3" style={{ overflow: 'hidden' }} key={index}>
                                <img className={item.className} src={img1} alt="" />
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCode('extro')
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
