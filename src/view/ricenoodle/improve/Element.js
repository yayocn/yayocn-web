import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const ELEMENT = {
  h: [
    { title: 'h1', key: 'h1', subTitle: '', className: 'h1', },
    { title: 'h2', key: 'h1', subTitle: '', className: 'h2', },
    { title: 'h3', key: 'h1', subTitle: '', className: 'h3', },
    { title: 'h4', key: 'h1', subTitle: '', className: 'h4', },
    { title: 'h5', key: 'h1', subTitle: '', className: 'h5', },
    { title: 'h6', key: 'h1', subTitle: '', className: 'h6', },
  ]
};

export default class Element extends Component {
  createHeadingCode = (target = 'h') => {
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
    code = `<h1>This is header 1</h1>
<hr />
<p>This is some text</p>`;

    return code;
  }

  createAddressCode = () => {
    let code = ``;
    code = `<address>
  <strong>Yayocn, Inc.</strong><br/>
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
  <dt class="col-lg-2 col-3">Description lists</dt>
  <dd class="col-lg-10 col-9">A description list is perfect for defining terms.</dd>

  <dt class="col-lg-2 col-3">Euismod</dt>
  <dd class="col-lg-10 col-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-lg-2 col-3">Malesuada porta</dt>
  <dd class="col-lg-10 col-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-lg-2 col-3">Nesting</dt>
  <dd class="col-lg-10 col-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>`;

    return code;
  }

  createListInlineCode = () => {
    let code = ``;
    code = `<ul class="list-inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>`;

    return code;
  }

  createListBareCode = () => {
    let code = ``;
    code = `<ol class="list-bare">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ol>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>元素样式增强。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>Headings</h3>
        <p>可以直接使用 <code>&lt;h&gt;</code> 元素，也可以使用 <code>.h1 ~ .h6</code> css类。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      {
                        ELEMENT.h.map((item, index) => {
                          return (
                            <p className={item.className} key={index}>{item.title}. Ricenoodle heading</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>Horizontal rule</h3>
        <p>也可以使用 <code>.divider</code></p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <h1>This is header 1</h1>
                      <hr />
                      <p>This is some text</p>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>Small</h3>
        <p>字体大小为父元素的 <code>60%</code>;</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <h1>h1. Ricenoodle heading. <small>small text.</small></h1>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;h1>h1. Ricenoodle heading. &lt;small>small text.&lt;/small>&lt;/h1>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Mark</h3>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      《静夜思》的作者是 <mark>李白</mark>。
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    《静夜思》的作者是 &lt;mark>李白&lt;/mark>。
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>地址</h3>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <address>
                        <strong>Yayocn, Inc.</strong><br/>
                        999 3th Street, TianFu<br/>
                        ChengDu, SiChuan<br/>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </address>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>引用</h3>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <blockquote>
                        <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
                        <footer><cite title="Source Title">明日歌</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h4 className="mt-20">右侧引用</h4>
        <p>添加 <code>.blockquote-right</code>，使引用居于右侧。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <blockquote className="blockquote-right">
                        <p>明日复明日，明日何其多，我生待明日，万事成蹉跎。</p>
                        <footer><cite title="Source Title">明日歌</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>Definition list</h3>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <dl className="row">
                        <dt className="col-lg-2 col-3">Description lists</dt>
                        <dd className="col-lg-10 col-9">A description list is perfect for defining terms.</dd>

                        <dt className="col-lg-2 col-3">Euismod</dt>
                        <dd className="col-lg-10 col-9">
                          <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                          <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>

                        <dt className="col-lg-2 col-3">Malesuada porta</dt>
                        <dd className="col-lg-10 col-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                        <dt className="col-lg-2 col-3">Nesting</dt>
                        <dd className="col-lg-10 col-9">
                          <dl className="row">
                            <dt className="col-sm-4">Nested definition list</dt>
                            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                          </dl>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>Size dead</h3>
        <p>针对 <code>&lt;textarea&gt;</code> ，使其不能变换尺寸。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <textarea className="size-dead" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    &lt;textarea className="size-dead" name="" id="" cols="30" rows="10">&lt;/textarea>
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>List</h3>

        <h4 className="mt-20">List inline</h4>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-inline">
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h4 className="mt-20">List bare</h4>
        <p>清除 <code>ul, ol</code> 的 <code>list-style</code>。</p>
        <div className={classnames(style['util-code'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <ol className="list-bare">
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
      </PageWrapper>
    );
  }
}
