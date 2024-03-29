import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { NO_LINK } from '../../../../constants/const';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'listGroup');

const LISTGROUP = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'list-group', },
  ],
  flush: [
    { title: 'Default', key: '', subTitle: '', className: 'list-group list-group-flush', },
  ],
  noborder: [
    { title: 'Default', key: '', subTitle: '', className: 'list-group list-group-noborder', },
  ],
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'list-group list-group-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'list-group list-group-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'list-group list-group-success', },
    { title: 'Info', key: '', subTitle: '', className: 'list-group list-group-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'list-group list-group-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'list-group list-group-danger', },
    { title: 'Light', key: '', subTitle: '', className: 'list-group list-group-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'list-group list-group-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'list-group list-group-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'list-group list-group-black', },
  ],
};

export default class ListGroup extends Component {

  createCode = (target) => {
    const data = LISTGROUP[target];
    let item = data[0];
    let code = `<ul class="${item.className}">
  <li class="list-group-item">百度</li>
  <li class="list-group-item">阿里</li>
  <li class="list-group-item">腾讯</li>
</ul>`;

    return code;
  }

  createActiveCode = () => {
    let code = `<ul class="list-group">
  <li class="list-group-item active">百度</li>
  <li class="list-group-item">阿里</li>
  <li class="list-group-item">腾讯</li>
</ul>`;

    return code;
  }

  createDisabledCode = () => {
    let code = `<ul class="list-group">
  <li class="list-group-item disabled">百度</li>
  <li class="list-group-item">阿里</li>
  <li class="list-group-item">腾讯</li>
</ul>`;

    return code;
  }

  createAnchorCode = () => {
    let code = ` <ul class="list-group">
  <li class="list-group-item"><a href="#">百度</a></li>
  <li class="list-group-item"><a href="#">阿里</a></li>
  <li class="list-group-item"><a href="#">腾讯</a></li>
</ul>`;

    return code;
  }

  createSituationCode = (target = 'situation') => {
    const data = LISTGROUP[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<ul class="${item.className}">
  <li class="list-group-item active">百度</li>
  <li class="list-group-item disabled">阿里</li>
  <li class="list-group-item ">腾讯</li>
</ul>
      
`;
      } else {
        code += `<ul class="${item.className}">
  <li class="list-group-item active">百度</li>
  <li class="list-group-item disabled">阿里</li>
  <li class="list-group-item ">腾讯</li>
</ul>`;
      }
    })

    return code;
  }

  createContentCode = () => {
    let code = `<ul class="list-group list-group-primary">
  <li class="list-group-item active">
    <h4 class="list-group-item-heading">百度</h4>
    <p class="list-group-item-text">百度旗下有百度百科，百度知道，百度图片，百度音乐。。。</p>
  </li>
  <li class="list-group-item">阿里</li>
  <li class="list-group-item">腾讯</li>
</ul>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="example">实例</h2>
        <p>最基本的列表组是一个无序列表，其中包含列表项和正确的类。 使用后面的选项或根据需要使用您自己的CSS构建它。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {
                        LISTGROUP.default.map((item, index) => {
                          return (
                            <ul className={item.className} key={index}>
                              <li className="list-group-item">百度</li>
                              <li className="list-group-item">阿里</li>
                              <li className="list-group-item">腾讯</li>
                            </ul>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('default')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3 id="example_active" className="mt-20">激活</h3>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      <ul className="list-group">
                        <li className="list-group-item active">百度</li>
                        <li className="list-group-item">阿里</li>
                        <li className="list-group-item">腾讯</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createActiveCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3 id="example_disabled" className="mt-20">禁用</h3>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      <ul className="list-group">
                        <li className="list-group-item disabled">百度</li>
                        <li className="list-group-item">阿里</li>
                        <li className="list-group-item">腾讯</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createDisabledCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="flush">无外边框</h2>
        <p>添加 <code>.list-group-flush</code> 以删除最外层边框，以在父容器中边对边呈现列表组项。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {
                        LISTGROUP.flush.map((item, index) => {
                          return (
                            <ul className={item.className} key={index}>
                              <li className="list-group-item">百度</li>
                              <li className="list-group-item">阿里</li>
                              <li className="list-group-item">腾讯</li>
                            </ul>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('flush')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="noborder">无边框</h2>
        <p>添加 <code>.list-group-noborder</code> 以删除所有边框。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {
                        LISTGROUP.noborder.map((item, index) => {
                          return (
                            <ul className={item.className} key={index}>
                              <li className="list-group-item">百度</li>
                              <li className="list-group-item">阿里</li>
                              <li className="list-group-item">腾讯</li>
                            </ul>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('noborder')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="link">链接</h2>
        <p>在 <code>.list-group-item</code> 中使用 <code>&lt;a&gt;</code> 标签。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      <ul className="list-group">
                        <li className="list-group-item"><a href={NO_LINK}>百度</a></li>
                        <li className="list-group-item"><a href={NO_LINK}>阿里</a></li>
                        <li className="list-group-item"><a href={NO_LINK}>腾讯</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createAnchorCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="theme">主题</h2>
        <p>使用情景类为列表设置不同的主题。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      LISTGROUP.situation.map((item, index) => {
                        const highlightCode = `<ul class="${item.className}">
  <li class="list-group-item active">百度</li>
  <li class="list-group-item disabled">阿里</li>
  <li class="list-group-item ">腾讯</li>
</ul>`;
                        return (
                          <div className={classnames('col-lg-6 col-12 p-5')} key={index}>
                            <ul className={classnames(item.className, 'mb-10')}>
                              <li className="list-group-item active">百度</li>
                              <li className="list-group-item disabled">阿里</li>
                              <li className="list-group-item">腾讯</li>
                            </ul>

                            <Highlight>
                              {highlightCode}
                            </Highlight>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="content">内容</h2>
        <p>添加 <code>.list-group-item-heading .list-group-item-text</code> 等类为标题和主内容设置样式。</p>
        <div className={classnames('util-listgroup')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      <ul className="list-group list-group-primary">
                        <li className="list-group-item active">
                          <h4 className="list-group-item-heading">百度</h4>
                          <p className="list-group-item-text">百度旗下有百度百科，百度知道，百度图片，百度音乐。。。</p>
                        </li>
                        <li className="list-group-item">阿里</li>
                        <li className="list-group-item">腾讯</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createContentCode()
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
