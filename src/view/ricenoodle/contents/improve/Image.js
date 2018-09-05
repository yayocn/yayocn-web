import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

import img1 from '../../../common/image/slide1.jpg';
import img2 from '../../../common/image/slide2.jpg';
import img3 from '../../../common/image/slide3.jpg';

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
        code += `<img class="${item.className}" src="#" alt="..." />
      
`;
      } else {
        code += `<img class="${item.className}" src="#" alt="..." />`;
      }
    });

    return code;
  };

  createFigureCode = () => {
    let code = `<figure class="figure">
  <img class="figure-img img-fluid" src="#" />
  <figcaption class="figure-caption">两只猫咪，两只猫咪，跑得快，跑得快。</figcaption>
</figure>`;

    return code;
  };

  render () {
    return (
      <Fragment>
        <h1>图片 <code>Image</code></h1>
        <p className="font-2x font-100">为图片添加轻量类，统一图片的样式，增加响应式图片，使其不会超过父元素。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="fluid">响应式</h2>
        <p>图像通过 <code>.img-fluid</code> 进行响应，最大宽度：<code>100%</code>。</p>
        <div className={classnames('util-image')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <img src={img1} alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="thumbnail">缩略图</h2>
        <p>在 <code>.img-fluid</code> 的基础上，增加了一些样式，比如边框和内边距。</p>
        <div className={classnames('util-image')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <img src={img2} alt="" className="img-thumbnail"/>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="figure">&lt;figure&gt; 元素</h2>
        <p><code>&lt;figure&gt;</code>元素结合了图片和图片说明。</p>
        <div className={classnames('util-image')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <figure className="figure">
                        <img className="figure-img img-fluid" src={img3} alt="some text."/>
                        <figcaption className="figure-caption">两只猫咪，两只猫咪，跑得快，跑得快。</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
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

        <h2 id="extro">扩展</h2>
        <p>结合其他的类对图片进行增强，例如 <code>.border-round</code>。</p>
        <div className={classnames('util-image')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
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
                <div className={classnames('example-code')}>
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
      </Fragment>
    );
  }
}
