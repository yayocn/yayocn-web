import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

export default class Code extends Component {

  createCode = () => {
    return `<code>&lt;section&gt;</code> 应该作为内联元素存在。`;
  }

  createPreCode = () => {
    return `<pre>
  <code>
    <p>君不见黄河之水天上来，奔流到海不复回。</p>
    <br/>
    <p>君不见高堂明镜悲白发，朝如青丝暮成雪。 </p>
  </code>
</pre>`;
  }

  createKbdCode = () => {
    return `按住 <kbd>Ctrl + C</kbd> 复制。`;
  }

  createSampCode = () => {
    return `<p>我尝试着重启电脑，但屏幕显示下面的信息：</p>
<p><samp>Keyboard not found, Press F1 to continue</samp></p>`;
  }

  render () {
    return (
      <PageWrapper>
        <h1>编码 <code>Code</code></h1>
        <h4>为编码类标签预设样式。</h4>

        <div className="divider divider-bold divider-lg"></div>

        <h2>内联代码</h2>
        <p>使用 <code>&lt;code&gt;</code> 元素包装的编码，请务必用 <code>&amp;lt; &amp;gt;</code> 转义尖括号。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <code>&lt;section&gt;</code> 应该作为内联元素存在。
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
        <h2>代码块</h2>
        <p>将 <code>&lt;pre&gt;</code> 用于多行代码。 再次确保在代码中转义任何尖括号以进行正确渲染。</p>
        <p>您可以选择添加 <code>.pre-scrollable</code> 类，它将设置最大高度为 <code>340px</code> 并提供 <code>y</code> 轴滚动条。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <pre>
                        <code>
                          &lt;p&gt;君不见黄河之水天上来，奔流到海不复回。&lt;/p&gt;
                          <br/>
&lt;p&gt;君不见高堂明镜悲白发，朝如青丝暮成雪。 &lt;/p&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createPreCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>用户输入</h2>
        <p>使用 <code>&lt;kbd&gt;</code> 元素表明用户的键盘输入。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      按住 <kbd>Ctrl + C</kbd> 复制。
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createKbdCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>&lt;samp&gt; 元素</h2>
        <p>HTML 样本元素 <code>&lt;samp&gt;</code> 用于包含内联文本，该文本表示计算机程序的样本（或引用）输出，默认使用等宽字体。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <p>我尝试着重启电脑，但屏幕上显示了一条很搞笑的信息：</p>
                      <p><samp>Keyboard not found, Press F1 to continue</samp></p>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createSampCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
