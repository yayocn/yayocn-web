import React, { Component } from 'react';
import Container from './containers/Container';
import './style.scss';

import response1 from '../common/image/response1.jpg';
import noodle1 from '../common/image/noodle1.png';
import select1 from '../common/image/select1.jpg';

export default class Ricenoodle extends Component {
  render () {
    return (
      <Container>
        <div className="jumbotron bg-white">
          <div className="container">
            <h1 className="font-6x">Ricenoodle <small className="font-20"><code>v1.0.2</code></small></h1>
            <h2>简而快的前端框架</h2>
            <div className="divider divider-lg"></div>
            <div className="text-center">
              <a className="btn btn-hg" href="/ricenoodle/start">开始</a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <img src={response1} className="img-fluid mh-auto mv-0" alt=""/>
          <h3 className="mv-50">快速构建网页，一次编写，多处使用</h3>
          <p className="font-20 text-muted">Ricenoodle 可以使用人性化的 HTML 帮助创建漂亮的响应式布局。</p>
        </div>

        <div className="divider mv-50"></div>

        <div className="text-center">
          <img src={noodle1} className="img-fluid mh-auto mv-0 w-25" alt=""/>
          <h3 className="mv-50">极简 快速</h3>
          <p className="font-20 text-muted">就像绵阳米粉一样，Ricenoodle 讲究的是简洁快速。它包含了很多极简的工具类，它们可以一起协作解决一些重复性的问题。</p>
        </div>

        <div className="divider mv-50"></div>

        <div className="text-center">
          <img src={select1} className="img-fluid mh-auto mv-0 w-25" alt=""/>
          <h3 className="mv-50">取你所需</h3>
          <p className="font-20 text-muted">Ricenoodle 除了提供整个css样式外，还将栅格系统，工具类单独分离了出来，可以根据需要选择性的引入文件。</p>
        </div>

        <div className="divider divider-lg divider-bold"></div>
        <div className="text-muted mt-20">
          <p>Designed by @kelp and built by @yayo. Wellcome to feedback at github, and we will make it better.</p>
          <p>当前版本 <a href="https://github.com/yayocn/ricenoodle" className="text-web">v1.0.2</a></p>
        </div>
      </Container>
    );
  }
}
