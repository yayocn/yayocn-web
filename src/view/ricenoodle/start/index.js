import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';

export default class Improve extends Component {
  render () {
    return (
      <PageWrapper>
        <h1>开始 <code>Getting start</code></h1>
        <p className="font-2x font-100">
          Ricenoodle，快而美的轻量级前端框架。
        </p>

        <div className="divider divider-lg divider-bold"></div>

        <h2>下载</h2>
        <div className="row">
          <div className="col-lg-3 col-md-2 col-1">
            <h4>生产环境</h4>
            <p>编译并且压缩后的css、javascript文件。</p>
            <a href="files/yyui-1.1.2.zip" className="btn btn-secondary-outline">下载 Ricenoodle</a>
          </div>
          <div className="col-lg-3 col-md-2 col-1">
            <h4>源码</h4>
            <p>Ricenoodle 的资源文件。</p>
            <a href="files/yyui-1.1.2.zip" className="btn btn-secondary-outline">Source</a>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2>使用</h2>
        <p>Ricenoodle 有多种使用方式。</p>

        <h3>使用本地文件</h3>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames('mt-0', common['example-code'])}>
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

        <h3 className="mt-20">NPM</h3>
        <p>通过 <code>npm</code> 安装 <code>Ricenoodle</code>：</p>
        <div>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames('mt-0', common['example-code'])}>
                  <Highlight>
                    $ npm install ricenoodle
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg divider-bold"></div>
        <div className="text-muted mt-20">
          <p>Designed by @kelp and built by @yayo. Wellcome to feedback at github, and we will make it better.</p>
          <p>当前版本 <a href="https://github.com/yayocn/ricenoodle" class="text-web">v1.0.2</a></p>
        </div>
      </PageWrapper>
    );
  }
}
