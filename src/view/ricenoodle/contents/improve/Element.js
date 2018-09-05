import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss'
import '../../style.scss';

const ELEMENT = {
  head: [
    { title: 'h1', key: 'h1', subTitle: '', className: 'h1', },
    { title: 'h2', key: 'h1', subTitle: '', className: 'h2', },
    { title: 'h2', key: 'h1', subTitle: '', className: 'h2', },
    { title: 'h3', key: 'h1', subTitle: '', className: 'h3', },
    { title: 'h5', key: 'h1', subTitle: '', className: 'h5', },
    { title: 'h6', key: 'h1', subTitle: '', className: 'h6', },
  ]
};

export default class Element extends Component {
  createHeadingCode = (target = 'head') => {
    const data = ELEMENT[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<${item.title}>${item.title}. Ricenoodle heading</${item.title}>
      
`;
      } else {
        code += `<${item.title}>${item.title}. Ricenoodle heading</${item.title}>`;
      }
    })

    return code;
  }

  createHrCode = () => {
    let code = ``;
    code = `<h1>沁园春 · 雪</h1>
<hr />
<p>北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。</p>`;

    return code;
  }

  createAddressCode = () => {
    let code = ``;
    code = `<address>
  <strong>Yayo, Co., Ltd.</strong><br/>
  999 3th Street, TianFu<br/>
  ChengDu, SiChuan<br/>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>`;

    return code;
  }

  createBlockquoteCode = (className) => {
    let code = ``;

    if (className) {
      code = `<blockquote className="${className}">
  <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
  <footer><cite title="Source Title">明日歌</cite></footer>
</blockquote>`;
    } else {
      code = `<blockquote>
  <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
  <footer><cite title="Source Title">明日歌</cite></footer>
</blockquote>`;
    }

    return code;
  }

  createDlCode = () => {
    let code = ``;
    code = `<dl class="row">
  <dt class="col-lg-2 col-3">北京</dt>
  <dd class="col-lg-10 col-9">北京，简称“京”，是中华人民共和国的首都。</dd>

  <dt class="col-lg-2 col-3">上海</dt>
  <dd class="col-lg-10 col-9">
    简称“沪”或“申”，是中国共产党的诞生地。
  </dd>

  <dt class="col-lg-2 col-3">四川</dt>
  <dd class="col-lg-10 col-9">
    <dl class="row">
      <dt class="col-lg-2 col-3">成都</dt>
      <dd class="col-lg-10 col-9">成都，简称蓉，别称蓉城、锦城，是四川省省会。</dd>
      <dt class="col-lg-2 col-3">绵阳</dt>
      <dd class="col-lg-10">自汉高祖二年（前201年），西汉设置涪县以来，绵阳市已有2200多年建城史，历来为州郡治所，后因城址位于绵山之南而得名“绵阳”。</dd>
    </dl>
  </dd>
</dl>`;

    return code;
  }

  createListInlineCode = () => {
    let code = ``;
    code = `<ul class="list-inline">
  <li>北京</li>
  <li>上海</li>
  <li>广州</li>
  <li>深圳</li>
  <li>成都</li>
</ul>`;

    return code;
  }

  createListBareCode = () => {
    let code = ``;
    code = `<ol class="list-bare">
  <li>北京</li>
  <li>上海</li>
  <li>广州</li>
  <li>深圳</li>
  <li>成都</li>
</ol>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>元素样式增强 <code>Element</code></h1>
        <p className="font-2x font-100">Ricenoodle 为部分元素的样式进行了更改和增强。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="heading">标题</h2>
        <p>重置所有标题元素。删除了它们的顶部外边距，底部有 <code>7.5px</code> 的下边距。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        ELEMENT.head.map((item, index) => {
                          return (
                            <p className={item.className} key={index}>{item.title}. Ricenoodle heading</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createHeadingCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="hr">水平分割线</h2>
        <p>重置了 <code>&lt;hr/&gt;</code> 元素，上下均有 <code>15px</code> 的外边距。也可以使用 <a href="/ricenoodle/components/divider">Divider</a> 代替。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <h3>沁园春 · 雪</h3>
                      <hr />
                      <p>北国风光，千里冰封，万里雪飘。<br/>望长城内外，惟余莽莽；大河上下，顿失滔滔。<br/>山舞银蛇，原驰蜡象，欲与天公试比高。<br/>须晴日，看红装素裹，分外妖娆。</p>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createHrCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="small">&lt;small&gt; 元素</h2>
        <p>设置字体大小为父元素的 <code>60%</code>。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <h3>牛顿第一定律：<small>任何物体都要保持匀速直线运动或静止状态，直到外力迫使它改变运动状态为止。</small></h3>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    &lt;h1&gt;牛顿第一定律：&lt;small&gt;任何物体都要保持匀速直线运动或静止状态，直到外力迫使它改变运动状态为止。&lt;/small&gt;&lt;/h1&gt;
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="mark">&lt;mark&gt; 元素</h2>
        <p>垂直方向和水平方向分别有 <code>2px 3px</code> 的内边距，设置背景颜色为 <code>#ffff00</code>。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      《静夜思》的作者是 <mark>李白</mark>。
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    《静夜思》的作者是 &lt;mark>李白&lt;/mark>。
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="address">&lt;address&gt; 元素</h2>
        <p>重置地址元素。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <address>
                        <strong>Yayo, Co., Ltd.</strong><br/>
                        999 3th Street, TianFu<br/>
                        ChengDu, SiChuan<br/>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </address>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createAddressCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="blockquote">&lt;blockquote&gt; 元素</h2>
        <p>重置引用元素的样式。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <blockquote>
                        <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
                        <footer><cite title="Source Title">明日歌</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createBlockquoteCode('')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">右侧引用</h3>
        <p>添加 <code>.blockquote-right</code>，使引用居于右侧。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <blockquote className="blockquote-right">
                        <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
                        <footer><cite title="Source Title">明日歌</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createBlockquoteCode('blockquote-right')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="dl">&lt;dl&gt; 元素</h2>
        <p>重置定义列表样式。结合 <a href="/ricenoodle/components/grid">栅格系统</a> 可以轻松制作说明表格。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <dl className="row">
                        <dt className="col-lg-2 col-3">北京</dt>
                        <dd className="col-lg-10 col-9">北京，简称“京”，是中华人民共和国的首都。</dd>

                        <dt className="col-lg-2 col-3">上海</dt>
                        <dd className="col-lg-10 col-9">
                          简称“沪”或“申”，是中国共产党的诞生地。
                        </dd>

                        <dt className="col-lg-2 col-3">四川</dt>
                        <dd className="col-lg-10 col-9">
                          <dl className="row">
                            <dt className="col-lg-2 col-3">成都</dt>
                            <dd className="col-lg-10 col-9">成都，简称蓉，别称蓉城、锦城，是四川省省会。</dd>
                            <dt className="col-lg-2 col-3">绵阳</dt>
                            <dd className="col-lg-10">自汉高祖二年（前201年），西汉设置涪县以来，绵阳市已有2200多年建城史，历来为州郡治所，后因城址位于绵山之南而得名“绵阳”。</dd>
                          </dl>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createDlCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="size_dead">禁止缩放</h2>
        <p>针对 <code>&lt;textarea&gt;</code> 元素，使其不能变换尺寸。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <textarea className="size-dead" name="" id="" cols="50" rows="5"></textarea>
                      <textarea className="ml-10" name="" id="" cols="50" rows="5"></textarea>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    &lt;textarea className="size-dead" name="" id="" cols="30" rows="10">&lt;/textarea>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="list">列表</h2>
        <p>所有列表： <code>&lt;ul&gt;</code>，<code>&lt;ol&gt;</code> 和 <code>&lt;dl&gt;</code>， 已删除其上外边距，下外边距设置为 <code>1rem</code>。
          嵌套使用时，没有下外边距。</p>

        <h3 className="mt-20">内联列表</h3>
        <p>列表的所有项展示在同一行。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-inline">
                        <li>北京</li>
                        <li>上海</li>
                        <li>广州</li>
                        <li>深圳</li>
                        <li>成都</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createListInlineCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-20">无样式列表</h3>
        <p>清除 <code>ul, ol</code> 的 <code>list-style</code>。</p>
        <div className={classnames('util-element')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <ol className="list-bare">
                        <li>北京</li>
                        <li>上海</li>
                        <li>广州</li>
                        <li>深圳</li>
                        <li>成都</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createListBareCode()
                    }
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
