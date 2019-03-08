import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'start');

export default class Improve extends Component {
  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: menu.title}}></h1>
        <p className="font-2x font-100"  dangerouslySetInnerHTML={{__html: menu.info}}></p>
        <p className="font-20 font-100">强烈建议使用工具类，组件部分很多其他的框架做得更好，而工具类是对一些常用的样式进行补充，能够进行快速设置，权重很高，可以轻松覆盖其他样式。</p>

        <div className="divider divider-lg divider-bold"></div>

        <h2 id="download">下载</h2>
        <p>当前版本 <code>v1.1.0</code></p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-20">
            <h4>生产环境</h4>
            <p>编译并且压缩后的css、javascript文件。</p>
            <a href="public/ricenoodle/ricenoodle-1.0.2.zip" className="btn">下载 Ricenoodle</a>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-20">
            <h4>源码</h4>
            <p>Ricenoodle 的资源文件。</p>
            <a href="public/ricenoodle/ricenoodle-source-1.0.2.zip" className="btn">Source</a>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-20">
            <h4>Github</h4>
            <p>Ricenoodle 代码库。</p>
            <a href="https://github.com/yayocn/ricenoodle" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="use">使用</h2>
        <p>Ricenoodle 有多种使用方式。</p>

        <h3 id="use_local">使用本地文件</h3>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('mt-0', 'example-code')}>
                  <Highlight>
                    &lt;link href="ricenoodle.min.css" rel="stylesheet"/&gt;<br/><br/>
                    &lt;script src="jquery.min.js"&gt;&lt;/script&gt;<br/>
                    &lt;script src="popper.min.js"&gt;&lt;/script&gt;<br/>
                    &lt;script src="ricenoodle.min.js"&gt;&lt;/script&gt;
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="use_npm" className="mt-20">NPM</h3>
        <p>通过 <code>npm</code> 安装 Ricenoodle。</p>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('mt-0', 'example-code')}>
                  <Highlight>
                    $ npm install ricenoodle
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="use_require" className="mt-20">按需加载</h3>
        <p>Ricenoodle 对每一个模块都进行了分离，可以各取所需。</p>
        <p>对组件而言，需要额外导入 <code>ricenoodle.normalize.css</code>，而工具类则不需要。</p>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('mt-0', 'example-code')}>
                  <Highlight>
                    &lt;link href="ricenoodle.normallize.css" rel="stylesheet"/&gt;<br/>
                    &lt;link href="ricenoodle.alert.css" rel="stylesheet"/&gt;<br/>
                    &lt;link href="ricenoodle.button.css" rel="stylesheet"/&gt;<br/>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="use_dependence" className="mt-20">依赖加载</h3>
        <p>有的组件相互依赖，比如 <code>buttongroup</code> 依赖 <code>button</code>。</p>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('mt-0', 'example-code')}>
                  <Highlight>
                    &lt;link href="ricenoodle.button.css" rel="stylesheet"/&gt;<br/>
                    &lt;link href="ricenoodle.buttongroup.css" rel="stylesheet"/&gt;<br/>
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
