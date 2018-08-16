import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

const MODAL = {
  situation: [
    { title: 'Primary', key: '', subTitle: '', className: 'modal modal-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'modal modal-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'modal modal-success', },
    { title: 'Info', key: '', subTitle: '', className: 'modal modal-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'modal modal-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'modal modal-danger', },
    { title: 'White', key: '', subTitle: '', className: 'modal modal-white', },
    { title: 'Light', key: '', subTitle: '', className: 'modal modal-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'modal modal-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'modal modal-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'modal modal-black', },
    { title: 'Transparent', key: '', subTitle: '', className: 'modal modal-transparent text-muted', },
  ],
};

export default class Modal extends Component {

  createContentCode = () => {
    let code = `<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Modal title</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span>×</span>
      </button>
    </div>
    <div className="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>`;

    return code;
  }

  createControlCode = (dialogClass) => {
    let code = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabIndex="-1">
  <div class="modal-dialog ${dialogClass}">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>用户通知或完全自定义内容的对话框。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>准备工作</h3>
        <ul className="p-30">
          <li>模态使用HTML，CSS和JavaScript构建。 它们位于文档对象的顶层，会从 <code>&lt;body&gt;</code> 中删除滚动，以便模式内容滚动。</li>
          <li>单击模态遮罩层将自动关闭模态。</li>
          <li>一次只支持一个模态窗口，不支持嵌套模式。<span className="text-danger">嵌套模式是很糟糕的体验，一旦使用，坑无止境！</span></li>
          <li>模态使用 <code>position：fixed</code>，有时候它的渲染有点特别。 只要有可能，请将模态HTML放在顶层位置（作为 <code>&lt;body&gt</code> 的直接子元素），以避免来自其他元素的潜在干扰。 将 <code>.modal</code> 嵌套在另一个固定元素中时，您可能会遇到问题。</li>
        </ul>

        <div className="divider divider-lg"></div>
        <h3 className="mt-20">实例</h3>

        <h4 className="mt-20">模态框内容</h4>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="modal pt-relative" tabIndex="-1" style={{ display: 'block'}}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <h4 className="mt-20">控制模态框</h4>
        <p>单击下面的按钮切换工作模式演示。 它将从页面顶部向下滑动并淡入。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                      </button>

                      <div className="modal fade" id="exampleModal" tabIndex="-1">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createControlCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">滚动条模态框</h4>
        <p>当模态对于用户的视口或设备变得太长时，它们会独立于页面本身滚动。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                        Launch demo modal
                      </button>

                      <div className="modal fade" id="exampleModalLong" tabIndex="-1">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body" style={{height: '1000px'}}>
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createControlCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">居中模态框</h4>
        <p>将 <code>.modal-dialog-centered</code> 添加到 <code>.modal-dialog</code> 以垂直居中模式。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Launch demo modal
                      </button>

                      <div className="modal fade" id="exampleModalCenter" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalCenterLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createControlCode('modal-dialog-centered')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-20">尺寸</h4>
        <p>将 <code>.modal-lg</code> 或 <code>.modal-sm</code> 添加到 <code>.modal-dialog</code> 以更改模态框尺寸。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-primary mr-20" data-toggle="modal" data-target="#exampleModalLarge">
                        Large Modal
                      </button>

                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalSmall">
                        Small Modal
                      </button>

                      <div className="modal fade" id="exampleModalLarge" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLargeLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="modal fade" id="exampleModalSmall" tabIndex="-1">
                        <div className="modal-dialog modal-sm">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalSmallLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createControlCode('modal-lg')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>事件</h3>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/modal/#usage"  target="_blank" rel="noopener noreferrer">Bootstrap Modal</a></p>
      </PageWrapper>
    );
  }
}
