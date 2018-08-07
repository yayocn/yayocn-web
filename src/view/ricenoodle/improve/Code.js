import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

export default class Code extends Component {

  createCode = () => {
    let code = ``;
    code = `For example, <code>&lt;section&gt;</code> should be wrapped as inline.`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>Code 类标签。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>Inline code</h3>
        <p>使用 <code>&lt;code&gt;</code> 包装代码的内联代码段。 请务必转义HTML尖括号。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Code blocks</h3>
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
                          &lt;p&gt;Sample text here...&lt;/p&gt;
                          <br/>
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;pre&gt;
                        &lt;code&gt;
                          &lt;p&gt;Sample text here...&lt;/p&gt;
                    <br/>
                          &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                        &lt;/code&gt;
                      &lt;/pre&gt;
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>User input</h3>
        <p>使用 <code>&lt;kbd&gt;</code> 指示通常通过键盘输入的输入。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      To copy text, press <kbd>Ctrl + C</kbd> in windows.
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    To copy text, press &lt;kbd&gt;Ctrl + C&lt;/kbd&gt; in windows.
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Sample</h3>
        <p>HTML样本元素 <code>&lt;samp&gt;</code> 用于包含内联文本，该文本表示计算机程序的样本（或引用）输出。默认使用等宽字体。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <p>I was trying to boot my computer, but I got this hilarious message:</p>
                      <p><samp>Keyboard not found <br/> Press F1 to continue</samp></p>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;p&gt;I was trying to boot my computer, but I got this hilarious message:&lt;/p&gt;
                    <br/>
                    &lt;p&gt;&lt;samp&gt;Keyboard not found &lt;br/&gt; Press F1 to continue&lt;/samp&gt;&lt;/p&gt;
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
