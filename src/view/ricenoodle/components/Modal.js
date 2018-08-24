import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

export default class Modal extends Component {

  createContentCode = () => {
    let code = `<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">诉衷情.当年万里觅封侯</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span>×</span>
      </button>
    </div>
    <div className="modal-body">
      <p>当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
      <button type="button" className="btn btn-secondary">确定</button>
    </div>
  </div>
</div>`;

    return code;
  }

  createControlCode = (dialogClass) => {
    let code = `<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
  模态框
</button>

<div class="modal fade" id="exampleModal" tabIndex="-1">
  <div class="modal-dialog ${dialogClass}">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">诉衷情.当年万里觅封侯</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-secondary">确定</button>
      </div>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>模态框 <code>Modal</code></h1>
        <p className="font-2x font-100">用户通知或完全自定义内容的对话框。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>前奏</h2>
        <ul className="ph-30">
          <li>模态使用HTML，CSS和JavaScript构建。 它们位于文档对象的顶层，会从 <code>&lt;body&gt;</code> 中删除滚动，以便模式内容滚动。</li>
          <li>单击模态遮罩层将自动关闭模态。</li>
          <li>一次只支持一个模态窗口，不支持嵌套模式（同一时刻只存在一个模态框）。<span className="text-danger">嵌套模式是很糟糕的体验，一旦使用，坑无止境！</span></li>
          <li>模态使用 <code>position：fixed</code>，有时候它的渲染有点特别。 只要有可能，请将模态HTML放在顶层位置（作为 <code>&lt;body&gt</code> 的直接子元素），以避免来自其他元素的潜在干扰。 将 <code>.modal</code> 嵌套在另一个固定元素中时，您可能会遇到问题。</li>
        </ul>

        <div className="divider divider-lg"></div>
        <h2 className="mt-20">实例</h2>

        <h3 className="mt-20">模态框内容</h3>
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
                              <h5 className="modal-title">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。</p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
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

        <h3 className="mt-20">控制模态框</h3>
        <p>单击下面的按钮切换工作模式演示。 它将从页面顶部向下滑动并淡入。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
                        模态框
                      </button>

                      <div className="modal fade" id="exampleModal" tabIndex="-1">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
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

        <h3 className="mt-20">滚动条模态框</h3>
        <p>当模态对于用户的视口或设备变得太长时，它们会独立于页面本身滚动。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalLong">
                        模态框
                      </button>

                      <div className="modal fade" id="exampleModalLong" tabIndex="-1">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongLabel">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body" style={{height: '1000px'}}>
                              当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
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

        <h3 className="mt-20">居中模态框</h3>
        <p>将 <code>.modal-dialog-centered</code> 添加到 <code>.modal-dialog</code> 以垂直居中模式。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
                        模态框
                      </button>

                      <div className="modal fade" id="exampleModalCenter" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalCenterLabel">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
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

        <h3 className="mt-20">尺寸</h3>
        <p>将 <code>.modal-lg</code> 或 <code>.modal-sm</code> 添加到 <code>.modal-dialog</code> 以更改模态框尺寸。</p>
        <div className={classnames(style['util-modal'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <button type="button" className="btn btn-secondary mr-20" data-toggle="modal" data-target="#exampleModalLarge">
                        Large Modal
                      </button>

                      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalSmall">
                        Small Modal
                      </button>

                      <div className="modal fade" id="exampleModalLarge" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLargeLabel">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="modal fade" id="exampleModalSmall" tabIndex="-1">
                        <div className="modal-dialog modal-sm">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalSmallLabel">诉衷情.当年万里觅封侯</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              当年万里觅封侯。匹马戍梁州。 关河梦断何处，尘暗旧貂裘。 胡未灭，鬓先秋。泪空流。 此生谁料，心在天山，身老沧洲。
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                              <button type="button" className="btn btn-secondary">确定</button>
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
        <h2>事件</h2>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/modal/#usage"  target="_blank" rel="noopener noreferrer">Bootstrap modal</a>。</p>
      </PageWrapper>
    );
  }
}
