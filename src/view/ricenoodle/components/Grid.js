import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss';
import style from '../style.scss';

export default class Grid extends Component {

  createDefaultCode = () => {
    let code = `<div className="container-fluid">
  <div className="row">
    <div className="col-4">One of three columns</div>
    <div className="col-4">One of three columns</div>
    <div className="col-4">One of three columns</div>
  </div>
</div>`;

    return code;
  };
  
  createCenterCode = () => {
    let code = `<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-4">One of three columns</div>
  </div>
</div>`;

    return code;
  };
  
  createNoGuttersCode = () => {
    let code = `<div class="container-fluid">
  <div class="row no-gutters">
    <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
    <div class="col-6 col-md-4 border">.col-6 .col-md-4</div>
  </div>
</div>`;

    return code;
  };
  
  createOrderCode = () => {
    let code = `<div className="container-fluid">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col order-12">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>
</div>`;

    return code;
  };

  createOffsetCode = () => {
    let code = `<div class="container-fluid">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>`;

    return code;
  };

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>栅格系统对于布局尤其是响应式来说至关重要，它随着屏幕或者窗口视口的大小自动调整。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>简介</h3>
        <p>栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。 下面就介绍一下 YY UI 栅格系统的工作原理：</p>
        <ol className="mh-15 ph-20">
          <li>“行（row）”必须包含在 <code>.container</code>（固定宽度）或 <code>.container-full</code>（100%
            宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
          </li>
          <li>通过“行（row）”在水平方向创建一组“列（column）”。</li>
          <li>内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。</li>
          <li>类似 <code>.row</code> 和 <code>.col-4</code> 这种预定义的类，可以用来快速创建栅格布局。</li>
          <li>通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。</li>
          <li>栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 <code>.col-4</code> 来创建。</li>
          <li>如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。</li>
          <li>栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-md-*</code> 栅格类适用于 与屏幕宽度大于或等于分界点大小的设备 ，
            并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-lg-*</code> 不存在， 也影响大屏幕设备。
          </li>
        </ol>

        <div className="divider divider-lg"></div>
        <h3>实例</h3>
        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-fluid">
                        <div className="row bg-light">
                          <div className="col-4">One of three columns</div>
                          <div className="col-4">One of three columns</div>
                          <div className="col-4">One of three columns</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createDefaultCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>参数</h3>
        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <table className="table table-border table-striped">
                <thead>
                <tr>
                  <th></th>
                  <th className="text-center">
                    超小屏幕<br/>
                    <small>&lt;576px</small>
                  </th>
                  <th className="text-center">
                    小屏幕<br/>
                    <small>≥576px</small>
                  </th>
                  <th className="text-center">
                    中屏幕<br/>
                    <small>≥768px</small>
                  </th>
                  <th className="text-center">
                    大屏幕<br/>
                    <small>≥992px</small>
                  </th>
                  <th className="text-center">
                    超大屏幕<br/>
                    <small>≥1200px</small>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th className="text-nowrap" scope="row">最大容器宽度</th>
                  <td>None (auto)</td>
                  <td>540px</td>
                  <td>720px</td>
                  <td>960px</td>
                  <td>1140px</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">类前缀</th>
                  <td><code>.col-</code></td>
                  <td><code>.col-sm-</code></td>
                  <td><code>.col-md-</code></td>
                  <td><code>.col-lg-</code></td>
                  <td><code>.col-xl-</code></td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">列数</th>
                  <td colspan="5">12</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">间隙宽度</th>
                  <td colspan="5">30px (每列15p)</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">可嵌套</th>
                  <td colspan="5">是</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">可排序</th>
                  <td colspan="5">是</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>Flex</h3>
        <p><code>Grid</code> 是用的 <code>flex</code> 进行布局，因此，很多 <a href="/ricenoodle/utilities/flex">Flex</a> 的类都可以配合使用。</p>

        <h4 className="mt-20">居中</h4>
        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-fluid">
                        <div className="row justify-content-center">
                          <div className="col-4">One of three columns</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createCenterCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>无缝</h3>
        <p>每一列的左右都有 <code>15px</code> 的间隔，使用 <code>.no-gutters</code> 可以去掉这些间隔。</p>

        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-fluid">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-6 col-md-8 border pv-10">.col-12 .col-sm-6 .col-md-8</div>
                          <div className="col-6 col-md-4 border pv-10">.col-6 .col-md-4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createNoGuttersCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h3>排序</h3>
        <p>使用 <code>.order-</code> 类来控制内容的可视顺序。 这些类是响应式的，因此您可以通过断点设置顺序（例如，。order-1.order-md-2）。 包括在所有五个网格层中支持1到12。</p>

        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col">
                            First, but unordered
                          </div>
                          <div className="col order-12">
                            Second, but last
                          </div>
                          <div className="col order-1">
                            Third, but first
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createOrderCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>此外，提供了 <code>.order-first .order-last</code>。</p>

        <div className="divider divider-lg"></div>
        <h3>偏移量</h3>
        <p>您可以通过两种方式偏移网格列：响应式 <code>.offset-</code> 网格类或者 <a href="/ricenoodle/utilities/space">Space</a>。 网格类的大小可以匹配列，而边距对于偏移宽度可变的快速布局更有用。</p>
        <p>使用 <code>.offset-md-*</code> 类向右移动列。 这些类将列的左边距增加 <code>*</code> 列。 例如，<code>.offset-md-4</code> 在四列上移动 <code>.col-md-4</code>。</p>

        <div className={classnames(style['util-grid'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4 border pv-10">.col-md-4</div>
                          <div className="col-md-4 offset-md-4 border pv-10">.col-md-4 .offset-md-4</div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 offset-md-3 border pv-10">.col-md-3 .offset-md-3</div>
                          <div className="col-md-3 offset-md-3 border pv-10">.col-md-3 .offset-md-3</div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 offset-md-3 border pv-10">.col-md-6 .offset-md-3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
                  <Highlight>
                    {
                      this.createOffsetCode()
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
