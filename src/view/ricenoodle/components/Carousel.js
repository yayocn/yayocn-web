import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';
import style from '../style.scss';

import imgSlide1 from '../../../../public/image/slide1.jpg';
import imgSlide2 from '../../../../public/image/slide2.jpg';
import imgSlide3 from '../../../../public/image/slide3.jpg';

export default class Carousel extends Component {

  createCode = () => {
    let code = ``;
    code = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>First slide label</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Second slide label</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Third slide label</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>`;

    return code;
  };

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>轮播组件。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>实例</h3>
        <p></p>
        <div className={classnames(style['util-badge'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-lg-8 col-12">
                      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src={imgSlide1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                              <h5>First slide label</h5>
                              <p>First slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src={imgSlide2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Second slide label</h5>
                              <p>Second slide label</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src={imgSlide3} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Third slide label</h5>
                              <p>Third slide label</p>
                            </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h4>事件</h4>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/carousel/#usage" target="_blank" rel="noopener noreferrer">Bootstrap</a></p>
      </PageWrapper>
    );
  }
}
