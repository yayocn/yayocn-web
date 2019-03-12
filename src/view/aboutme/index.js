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
        { icon: 'fa fa-graduation-cap', begin: '2011-9', text: 'Started learning programming in 2011.' },
        { icon: 'fa fa-train', begin: '2014-11', text: 'Studied in BJ as a internship in 2015.' },
        { icon: 'fa fa-file-code-o', begin: '2015-6', text: 'Worked for Darseek as a web developer from 2015.6 to 2017.6.' },
        { icon: 'fa fa-internet-explorer', begin: '2017-6', text: 'Worked for Darseek as a web developer from 2015.6 to 2017.6.' },
      ],
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
            </div>
          </div>
        </PageBody>
      </Fragment>
    );
  }
};


