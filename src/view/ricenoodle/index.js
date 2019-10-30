import React, { Component } from 'react';
import Container from './containers/Container';
import './style.scss';
import { Link } from 'react-router-dom';

import response1 from '../common/image/response1.jpg';
import noodle1 from '../common/image/noodle1.png';
import select1 from '../common/image/select1.jpg';
import focus1 from '../common/image/focus.jpg';

import { RICENOODLE_VERSION as ricenoodleVersion } from '../../constants/const';

export default class Ricenoodle extends Component {
  render () {
    return (
      <Container>
        <div className="jumbotron bg-white">
          <div className="container">
            <h1 className="font-4x">Ricenoodle <small className="inline-block"><code>{ricenoodleVersion}</code></small></h1>
            <h3>简洁、快速的前端框架</h3>
            <div className="divider divider-lg"></div>
            <div className="text-center">
              <Link className='btn btn-hg' to={'/ricenoodle/start'}>开始</Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <img src={response1} className="img-fluid mh-auto mv-0" alt=""/>
          <h4 className="mv-50">快速构建网页，一次编写，多处使用</h4>
          <p className="font-18 text-muted">Ricenoodle 可以使用人性化的 HTML 帮助创建漂亮的响应式布局。</p>
        </div>

        <div className="divider mv-50"></div>

        <div className="text-center">
          <img src={noodle1} className="img-fluid mh-auto mv-0 w-25" alt=""/>
          <h4 className="mv-50">极简 快速</h4>
          <p className="font-18 text-muted">绵阳米粉，点菜到吃到嘴里只需要一分钟，无需等待，美味依然。就像绵阳米粉一样，Ricenoodle 讲究的是简洁快速。它包含了很多极简的工具类，它们可以一起协作解决一些重复性的问题。</p>
        </div>

        <div className="divider mv-50"></div>

        <div className="text-center">
          <img src={select1} className="img-fluid mh-auto mv-0 w-25" alt=""/>
          <h4 className="mv-50">取你所需</h4>
          <p className="font-18 text-muted">Ricenoodle 除了提供整个css样式外，还将栅格系统，工具类单独分离了出来，可以根据需要选择性的引入文件。</p>
        </div>

        <div className="divider mv-50"></div>

        <div className="text-center">
          <img src={focus1} className="img-fluid mh-auto mv-0 w-20" alt=""/>
          <h4 className="mv-50">重中之重</h4>
          <p className="font-18 text-muted">Ricenoodle 中的组件部分，有很多其他的框架能够替代。强烈推荐使用工具类，它提供了很多常用的，短小精悍的 class，方便对元素进行快速的样式叠加，而不用去制作专属的 class 或者行内样式。</p>
        </div>

        <div className="divider divider-lg divider-bold"></div>
        <div className="text-muted mt-20">
          <p>部分组件参考的是 <code>Bootstrap 4</code>，感谢 Bootstrap 提供了源码。</p>
          <p>如果有任何疑问或者建议，欢迎在 <a href="https://github.com/yayocn/ricenoodle/issues" rel="noopener noreferrer" className="text-web" target="_blank">github</a> 上留言反馈。</p>
          <p>当前版本 {ricenoodleVersion}</p>
        </div>
      </Container>
    );
  }
}
