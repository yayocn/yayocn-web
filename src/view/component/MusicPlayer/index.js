import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';
import './iconfont.css';
import Progress from './progress';

export default class MusicPlayer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      playlist: [
        { name: '111', singer: '111', time: '111', },
        { name: '111', singer: '111', time: '111', },
        { name: '111', singer: '111', time: '111', },
        { name: '111', singer: '111', time: '111', },
        { name: '111', singer: '111', time: '111', },
      ]
    };
  }

  render () {
    const { wrapClass = '' } = this.props;
    const { playlist = [] } = this.state;

    return (
      <div className={classnames('music-player', wrapClass)}>
        <div className="container">
          <div className="row list">
            <div className="col-12">
              <table className="table table-responsive table-hover pv-30">
                <colgroup>
                  <col width="10"/>
                  <col width="60%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                </colgroup>
                <thead>
                <tr>
                  <th className="border-0"></th>
                  <th className="border-0">歌曲</th>
                  <th className="border-0">歌手</th>
                  <th className="border-0">时长</th>
                </tr>
                </thead>
                <tbody>
                {
                  playlist.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.singer}</td>
                        <td>{item.time}</td>
                      </tr>
                    );
                  })
                }
                </tbody>
              </table>
            </div>
          </div>

          <div className="controller">
            <div className="flex flex-wrap">
              <div className="controller-btn-group inline-flex align-items-center">
                <span className="font-2x iconfont icon-shangyishou" role="button"></span>
                <span className="font-2x iconfont icon-bofang mh-20" role="button"></span>
                <span className="font-2x iconfont icon-xiayishou" role="button"></span>
              </div>

              <div className="controller-progress mh-20 flex-grow-2">
                <Progress value="30"/>
              </div>

              <div className="controller-vol  inline-flex align-items-center">
                <span className="font-2x iconfont icon-yinliangzhong" role="button"></span>

                <div className="vol-progress ml-10 flex-grow-2">
                  <Progress value="30"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
