import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PageHeader from '../component/PageHeader';
import PageBody from '../component/PageBody';
import './style.scss';

import img1 from '../common/image/slide2.jpg';

export default class Aboutme extends Component {
  constructor (props) {
    super(props);

    this.state = {
      growth: [
        { icon: 'fa fa-graduation-cap', begin: '2011.9', text: 'Started learning programming in 2011.' },
        { icon: 'fa fa-train', begin: '2014.11', text: 'Studied in BJ as a internship in 2015.' },
        { icon: 'fa fa-file-code-o', begin: '2015.6', text: 'Worked for Darseek as a web developer from 2015.6 to 2017.6.' },
        { icon: 'fa fa-internet-explorer', begin: '2017.6', text: 'Worked for Darseek as a web developer from 2015.6 to 2017.6.' },
      ],
      abilities: [
        { icon: 'fa fa-html5', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
        { icon: 'fa fa-css3', value: '80%' },
      ]
    };
  }

  componentDidMount () {

  }

  render () {

    return (
      <Fragment>
        <PageHeader/>
        <PageBody>
          <div className="aboutme-wrap">
            <div className="container-fluid resume">
              <div className="row pv-50 feature feature-bg1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 col-12">
                      <img src={img1} className="img-fluid h-max-80 border-round-circle mh-auto" alt=""/>
                    </div>
                    <div className="col-md-7 col-12 text-white">
                      <h1 className="font-5x pl-30 font-bolder"><i>P E R S O N A L</i></h1>
                      <h1 className="font-5x"><i>R E S U M E</i> <i className="fa fa-id-card font-3x ml-50 text-warning"></i></h1>

                      <div className="row font-30">
                        <p className="col-6"><i className="fa fa-map-marker mr-20"></i>ChengDu, SiChuang</p>
                        <p className="col-6"><i className="fa fa-suitcase mr-20"></i>WEB Developer</p>
                      </div>

                      <h1 className="font-3x text-right">Yang Yong</h1>
                      <h1 className="font-16 text-right">you could call me Mr yayo</h1>
                      <p className="font-20 mt-40">I can't live without READING, CYCLING, GAME, PET, MOVIE, COMICS...</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg2">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x"><i className="fa fa-line-chart "></i> GROWTH</p>

                      <div className="time-bar flex">
                        <div className="border-10 border-bottom border-white flex" style={{ flexGrow: 2 }}>
                          {
                            this.state.growth.map((item, index) => {
                              const width = Math.floor(100 / this.state.growth.length);
                              const className = `w-${width}`;
                              return (
                                <div className={classnames(className, 'font-24')} key={index}>
                                  {item.begin}
                                </div>
                              )
                            })
                          }
                        </div>
                        <div className="time-bar-triangle"></div>
                      </div>

                      <div className="flex font-24 flex-wrap">
                        {
                          this.state.growth.map((item, index) => {
                            const width = Math.floor(100 / this.state.growth.length);
                            const className = `w-${width}`;
                            const marginTop = `${16 - 5 * index}%`;
                            return (
                              <div className={classnames(className)} style={{ marginTop }} key={index}>
                                <div className="border-top-0 border-left-0 border-dash p-10">
                                  <i className={classnames(item.icon, 'font-3x')}></i>
                                  <p>{item.text}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>

                      <p className="text-indent font-2x mt-50">
                        Chen cloth clothes, bow in nanyang, survival in the chaotic world, do not seek vassal.
                        The first emperor was not mean, mischievous, three of his ministers in the grass, the minister to the matter of life, by gratitude, xu xian to drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x"><i className="fa fa-file-text"></i> EXPERIENCE</p>

                      <div className="experience-item">
                        <h2>Chengdu Weily Technology Co., Ltd.</h2>
                        <p>
                          <span className="border border-round-circle border-2 ph-10 mr-10">2015.6 ~ 2017.6</span>
                          <span className="border border-round-circle border-2 ph-10 mr-10">Web Developer</span>
                          <span className="border border-round-circle border-2 ph-10 mr-10"><span className="fa fa-user"></span> 15 ~ 50</span>
                        </p>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">AR Editor</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="experience-item">
                        <h2>NAVER China</h2>
                        <p>
                          <span className="border border-round-circle border-2 ph-10 mr-10">2017.6 ~ now</span>
                          <span className="border border-round-circle border-2 ph-10 mr-10">Web Developer</span>
                          <span className="border border-round-circle border-2 ph-10 mr-10"><span className="fa fa-user"></span> 500 ~ 2000</span>
                          <span className="border border-round-circle border-2 ph-10 mr-10">Korean</span>
                        </p>
                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">MC</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">CLA</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">Security Zone</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">MQMS</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">NMS</h5>
                            <ul className="pl-20 font-16">
                              <li>With the rise of VR, AR has gradually entered people's vision. In order to improve the company's products, AR Editor was put on the agenda.</li>
                              <li>I'm in charge of developing the AR editor.</li>
                              <li>According to the requirement document, I need to understand the function of the editor, select technologies, framework, determine the way of the implementation, and the talk about the technical requirements of the realization of the function with PM.</li>
                              <li>The project is involved from start to end and understands the overall process of a project. Project management approach, learning the new framework Angular, threejs, learning the Gulp and other automation tools.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg4">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x"><i className="fa fa-heart "></i> ABILITIES</p>

                      <div className="row">
                        {
                          this.state.abilities.map((item, index) => {
                            return (
                              <div className="col-2 text-center" key={index}>
                                <span className={classnames(item.icon, 'font-vw-1')}></span>
                              </div>
                            )
                          })
                        }
                      </div>

                      <div className="font-30 mt-30">To Be Continue</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg5">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x"><i className="fa fa-desktop"></i> SHOW</p>

                      <div className="card-columns">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">满江红</h5>
                            <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                            <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                          </div>
                        </div>
                        <div className="card p-3">
                          <blockquote className="blockquote mb-0 card-body">
                            <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                            <footer className="blockquote-footer">
                              <small className="text-muted">
                                岳飞
                              </small>
                            </footer>
                          </blockquote>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">满江红</h5>
                            <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                            <p className="card-text">
                              <small className="text-muted">岳飞</small>
                            </p>
                          </div>
                        </div>
                        <div className="card text-center p-3">
                          <blockquote className="blockquote mb-0">
                            <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                            <footer className="blockquote-footer">
                              <small>
                                岳飞
                              </small>
                            </footer>
                          </blockquote>
                        </div>
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">满江红</h5>
                            <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                            <p className="card-text">
                              <small className="text-muted">岳飞</small>
                            </p>
                          </div>
                        </div>
                        <div className="card p-3 text-right">
                          <blockquote className="blockquote mb-0">
                            <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                            <footer className="blockquote-footer">
                              <small className="text-muted">
                                岳飞
                              </small>
                            </footer>
                          </blockquote>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">满江红</h5>
                            <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                            <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                            <p className="card-text">
                              <small className="text-muted">岳飞</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg7">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-secondary">
                      <p className="font-3x"><i className="fa fa-address-book"></i> CONTACT</p>

                      <div className="font-30">
                        <div className="w-50 text-right mr-minus-40">
                          <p><span className="mr-30">18202822738</span><span className="fa fa-phone font-3x"></span></p>
                        </div>
                        <div className="w-50 text-left ml-minus-40 pt-relative left" style={{left: '50%'}}>
                          <p><span className="fa fa-internet-explorer font-3x"></span><span className="ml-25">http://yyui.yayocn.cn</span></p>
                        </div>
                        <div className="w-50 text-right pr-minus-50">
                          <p><span className="mr-12">yayocn@qq.com</span><span className="fa fa-envelope font-3x pt-relative left-4"></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageBody>
      </Fragment>
    );
  }
};


