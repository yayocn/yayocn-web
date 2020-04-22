import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PageBody from '../component/PageBody';
import './style.scss';

import avatar from '../common/image/avatar.png';
import show1 from '../common/image/show1.png';

export default class Aboutme extends Component {
  constructor (props) {
    super(props);

    this.state = {
      growth: [
        { icon: 'fa fa-graduation-cap', begin: '2015', text: '毕业于西华大学计算机专业' },
        { icon: 'fa fa-train', begin: '2015', text: '成都微力互动有限公司' },
        { icon: 'fa fa-file-code-o', begin: '2017', text: '北京世联互动网络有限公司（成都分公司）' },
      ],
    };
  }

  componentDidMount () {

  }

  render () {

    return (
      <Fragment>
        <PageBody>
          <div className="aboutme-wrap" style={{marginTop: '-52px'}}>
            <div className="container-fluid resume">
              <div className="row pv-50 feature feature-bg1">
                <div className="container">
                  <div className="row text-white">
                    <div className="col-md-5 col-12 text-center">
                      <img src={avatar} className="img-fluid w-55 mh-auto border-round" alt=""/>
                      <h3 className="font-3x mt-10">杨勇</h3>
                    </div>
                    <div className="col-md-7 col-12">
                      <h1 className="font-4x font-bolder"><i>个人简介</i><i className="fa fa-id-card font-3x ml-50 text-warning"></i></h1>

                      <div className="row mt-20 font-24">
                        <div className="col-12">
                          <div className="mt-10"><i className="fa fa-map-marker ml-5 mr-20"></i>四川，成都，西华大学</div>
                          <div className="mt-10"><i className="fa fa-suitcase mr-20"></i>WEB开发</div>
                          <div className="mt-10"><i className="fa fa-phone mr-20"></i>18202822738</div>
                          <div className="mt-10"><i className="fa fa-internet-explorer mr-20"></i>
                            <a href="yyui.yayocn.cn" className="text-white">yyui.yayocn.cn <sup><i className="fa fa-link mr-10 font-12"></i></sup></a>
                          </div>
                          <div className="mt-10"><i className="fa fa-envelope mr-20"></i>yayocn@qq.com</div>
                          <div className="mt-10"><i className="fa fa-star mr-20"></i>爱好：阅读，骑行，游戏，动漫</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg2">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x mt-0"><i className="fa fa-line-chart"></i> 成长</p>

                      <div className="time-bar flex">
                        <div className="border-10 border-bottom border-white flex grow-2"></div>
                        <div className="time-bar-triangle"></div>
                      </div>

                      <div className="flex font-20 flex-wrap">
                        {
                          this.state.growth.map((item, index) => {
                            const width = `${100 / this.state.growth.length}%`;
                            const marginTop = `${6 - 4 * index}%`;
                            return (
                              <div style={{ marginTop, width }} key={index}>
                                <div className="border-top-0 border-right-0 border-bottom-0 border-dash p-10">
                                  <i className={classnames(item.icon, 'font-3x')}></i>
                                  <p>{item.begin}</p>
                                  <p>{item.text}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>

                      <p className="text-indent font-20 mt-20">
                        90后四把手，爱好看书，骑行，露营，尤其是骑行，曾经骑行绵阳--青海湖路线。从爱好可以看出，我是一个比较有耐心，坚韧，意志力较强的人。胜任各种web方面的工作，
                        至今为止没有出现延期的情况。工作中能和同事们友好相处，万事以解决问题，保证进度为先。不排斥加班，积极维护公司利益。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x mt-0"><i className="fa fa-file-text"></i> 经历</p>

                      <div className="experience-item">
                        <h3><a href="http://tianyanar.com/" className="text-white">成都微力互动有限公司</a> <sup><i className="fa fa-link"></i></sup></h3>
                        <p>
                          <span className="badge badge-pill badge-secondary mr-10">2015.6 ~ 2017.6</span>
                          <span className="badge badge-pill badge-secondary mr-10">Web 开发</span>
                          <span className="badge badge-pill badge-secondary mr-10"><span className="fa fa-user"></span> 15 ~ 50</span>
                        </p>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">增强现实天眼AR浏览器</h5>

                            <ul className="pl-20 font-16">
                              <li>
                                增强现实天眼AR浏览器是一款连接现实与虚拟场景的增强现实浏览器，应用于移动设备，包括两个部分：移动端AR浏览器（APP）和云后台管理中心。
                                用户通过云后台管理中心，可以制作和管理AR，在移动端的APP上，AR会呈现出制作效果。
                              </li>
                              <li>云后台管理中心编辑器。编辑器旨在所见及所得，用户实时操作，实时预览，简单快捷的生成模型。</li>
                              <li>敏捷开发，要的就是快。</li>
                              <li>
                                <span className="badge badge-pill badge-info mr-10">Angular</span>
                                <span className="badge badge-pill badge-info mr-10">Threejs</span>
                                <span className="badge badge-pill badge-info mr-10">Gulp</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="experience-item">
                        <h3><a href="https://www.naver.com/" className="text-white">北京世联互动网络有限公司（NAVER China）</a> <sup><i className="fa fa-link"></i></sup></h3>
                        <p>
                          <span className="badge badge-pill badge-secondary mr-10">2017.6 ~ Now</span>
                          <span className="badge badge-pill badge-secondary mr-10">Web 开发</span>
                          <span className="badge badge-pill badge-secondary mr-10"><span className="fa fa-user"></span> 500 ~ 2000</span>
                          <span className="badge badge-pill badge-secondary mr-10">Korea</span>
                        </p>
                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">CLA</h5>
                            <ul className="pl-20 font-16">
                              <li>CLA，全称Cloud Log Analytics。她将云平台产生的日志信息进行可视化，分成多种可视图，方便用户查看和分析。</li>
                              <li>前后端分离，数据结构讨论定型，项目整合，制定标准。</li>
                              <li>bloc开发人员是韩国同事，全程英语交流，必要时翻译人员介入。</li>
                              <li>对程序猿来说，英语交流真没问题，别谈语法，谈代码。</li>
                              <li>
                                <span className="badge badge-pill badge-info mr-10">Vue</span>
                                <span className="badge badge-pill badge-info mr-10">Webpack</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">FMS</h5>
                            <ul className="pl-20 font-16">
                              <li>FMS，全称Firewall Management System。她负责对服务器的防火墙进行设置管理。</li>
                              <li>
                                该商品遇到的最大的问题是第三方服务的使用问题。开发收尾期间，内部服务频繁出现错误（双边同时开发导致），导致项目进度陷入停滞，QA不停的提出issue汇集到前端。
                                而团队的默契，能让开发事半功倍。
                              </li>
                              <li>多部门协同，多服务协同，多项目组协同，交付压力。</li>
                              <li>
                                <span className="badge badge-pill badge-info mr-10">Vue</span>
                                <span className="badge badge-pill badge-info mr-10">Webpack</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">MQMS</h5>
                            <ul className="pl-20 font-16">
                              <li>
                                MQMS，全称Mobile Quality Monitoring System，是移动端通信质量监控系统，是对App的流量，通信质量进行监测以及分析的一套系统。
                                她能监测即时测试聊天工具的通信质量，如line，wechat，qq等，可以通过脚本来检测网络情况，通过图表分析流量等。对于公司APP性能优化有着举足轻重的作用。
                              </li>
                              <li>模块分析，React组件重构，需求分析。</li>
                              <li>对于未知的东西，需要多看多点多问。在没确定需求之前，coding不是一个好的选择。</li>
                              <li>
                                <span className="badge badge-pill badge-info mr-10">React</span>
                                <span className="badge badge-pill badge-info mr-10">Webpack</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="media">
                          <span className="fa fa-folder font-26"></span>
                          <div className="media-body mh-20">
                            <h5 className="mt-0">NMS</h5>
                            <ul className="pl-20 font-16">
                              <li>
                                NMS，全称Network Monitoring System，她是公司的网络管理系统，能对公司网络系统进行监控以及管理。
                                她能监控硬件系统中各个设备的运行情况（如网络状态），进行ip分配管理，权限管理，拓扑图，图表展示等。
                              </li>
                              <li>需求分析，前端架构，项目管理。</li>
                              <li>
                                她使用jsp技术，并采用了extjs框架。项目庞大而复杂，开发人员经过了2轮变更，技术实现方式上有了不小的差异。
                                数据量非常庞大，对性能，尤其是数据库性能要求苛刻。
                              </li>
                              <li>Ext老大哥很牛，TypeScript是好东西。</li>
                              <li>
                                <span className="badge badge-pill badge-info mr-10">Vue</span>
                                <span className="badge badge-pill badge-info mr-10">SSR</span>
                                <span className="badge badge-pill badge-info mr-10">Typescript</span>
                                <span className="badge badge-pill badge-info mr-10">Webpack</span>
                              </li>
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
                      <p className="font-3x mt-0"><i className="fa fa-heart "></i> 技术栈</p>
                      <div className="font-2x">
                        <span className="badge badge-pill badge-success m-10">HTML</span>
                        <span className="badge badge-pill badge-success m-10">CSS</span>
                        <span className="badge badge-pill badge-success m-10">Javascript</span>
                        <span className="badge badge-pill badge-success m-10">TypeScript</span>
                        <span className="badge badge-pill badge-success m-10">Vue Family</span>
                        <span className="badge badge-pill badge-success m-10">React (leaving)</span>
                        <span className="badge badge-pill badge-success m-10">Nodejs</span>
                        <span className="badge badge-pill badge-success m-10">Webpack</span>
                        <span className="badge badge-pill badge-success m-10">Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg5">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x mt-0"><i className="fa fa-desktop"></i> 作品</p>

                      <div className="card-group">
                        <div className="card bg-transparent border-transparent">
                          <div className="card-body">
                            <h5 className="card-title">Ricenoodle</h5>
                            <p className="card-text">简洁、快速的前端框架。</p>
                            <p className="card-text">
                              <a href="http://www.yayocn.cn/#/ricenoodle"><img src={show1} className="img-fluid" alt=""/></a>
                            </p>
                          </div>
                        </div>
                        <div className="card bg-transparent border-transparent">
                          <div className="card-body">
                            <h5 className="card-title">Ricenoodle Vue Component</h5>
                            <p className="card-text">基于Ricenoodle的Vue组件。</p>
                            <div className="card-text text-center border-light">
                              <span className="mt-50 font-2x">Building</span>
                              <div className="progress progress-danger">
                                <div className="progress-value" style={{width: '40%'}}>40%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card bg-transparent border-transparent">
                          <div className="card-body">
                            <p className="card-title"></p>
                            <p className="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pv-50 feature feature-bg6">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <p className="font-3x mt-0"><i className="fa fa-address-book"></i> 联系</p>

                      <div className="row font-20">
                        <div className="col-sm-12 col-md-6 col-lg-4"><i className="fa fa-phone font-2x mr-20"></i>18202822738</div>
                        <div className="col-sm-12 col-md-6 col-lg-4"><i className="fa fa-internet-explorer font-2x mr-20"></i><a href="http://yyui.yayocn.cn" className="text-white">http://yyui.yayocn.cn</a> <sup><i className="fa fa-link"></i></sup></div>
                        <div className="col-sm-12 col-md-6 col-lg-4"><i className="fa fa-envelope font-2x mr-20"></i><span className="mr-12">yayocn@qq.com</span></div>
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


