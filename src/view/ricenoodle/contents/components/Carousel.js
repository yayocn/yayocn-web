import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

import imgSlide1 from '../../../common/image/slide1.jpg';
import imgSlide2 from '../../../common/image/slide2.jpg';
import imgSlide3 from '../../../common/image/slide3.jpg';

export default class Carousel extends Component {

  createCode = (className = '') => {
    let code = ``;
    code = `<div id="carouselExample" className="carousel slide ${className}" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExample" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExample" data-slide-to="1"></li>
    <li data-target="#carouselExample" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-fluid" src="" alt="First slide"/>
      <div className="carousel-caption">
        <h5>First slide label</h5>
        <p>First slide label</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="" alt="Second slide"/>
      <div className="carousel-caption">
        <h5>Second slide label</h5>
        <p>Second slide label</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="" alt="Third slide"/>
      <div className="carousel-caption">
        <h5>Third slide label</h5>
        <p>Third slide label</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExample" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExample" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>`;

    return code;
  };

  render () {
    return (
      <Fragment>
        <h1>轮播图 <code>Carousel</code></h1>
        <p className="font-2x font-100">轮播图组件，用于循环播放元素图像或文本幻灯片。</p>

        <div className="divider divider-bold divider-lg"></div>
        <h2 id="prepare">前奏</h2>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code> & <code>ricenoodle.js</code>。</li>
        </ul>

        <div className="divider divider-lg"></div>
        <h2 id="example">实例</h2>
        <p>轮播图不会自动标准化幻灯片尺寸。 因此，可能需要使用其他类或自定义样式来适当调整内容大小。</p>
        <p>轮播图中除了主体 <code>.carousel-inner</code> 外，其他部分都可以自定义。虽然轮播支持 <code>prev | next </code> 控件和指示器，但它们并未明确要求。 根据需要添加和自定义。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-8 col-12">
                      <div id="carouselExample1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExample1" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExample1" data-slide-to="1"></li>
                          <li data-target="#carouselExample1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="img-fluid" src={imgSlide1} alt="First slide"/>
                            <div className="carousel-caption">
                              <h5>First slide label</h5>
                              <p>First slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="img-fluid" src={imgSlide2} alt="Second slide"/>
                            <div className="carousel-caption">
                              <h5>Second slide label</h5>
                              <p>Second slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="img-fluid" src={imgSlide3} alt="Third slide"/>
                            <div className="carousel-caption">
                              <h5>Third slide label</h5>
                              <p>Third slide label</p>
                            </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExample1"
                           data-slide="prev">
                          <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample1"
                           data-slide="next">
                          <span className="carousel-control-next-icon"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="fade">淡入淡出</h2>
        <p>将 <code>.carousel-fade</code> 添加到轮播图中，以使用淡入淡出过渡方式。</p>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-8 col-12">
                      <div id="carouselExample2" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExample2" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExample2" data-slide-to="1"></li>
                          <li data-target="#carouselExample2" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="img-fluid" src={imgSlide1} alt="First slide"/>
                            <div className="carousel-caption">
                              <h5>First slide label</h5>
                              <p>First slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="img-fluid" src={imgSlide2} alt="Second slide"/>
                            <div className="carousel-caption">
                              <h5>Second slide label</h5>
                              <p>Second slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="img-fluid" src={imgSlide3} alt="Third slide"/>
                            <div className="carousel-caption">
                              <h5>Third slide label</h5>
                              <p>Third slide label</p>
                            </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExample2"
                           data-slide="prev">
                          <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample2"
                           data-slide="next">
                          <span className="carousel-control-next-icon"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('carousel-fade')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="event">事件</h2>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/carousel/#usage" target="_blank" rel="noopener noreferrer">Bootstrap carousel</a>。</p>
      </Fragment>
    );
  }
}
