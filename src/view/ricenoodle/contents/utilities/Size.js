import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { find } from 'lodash';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'utilities');
const config = menu.children.find((value) => value.key === 'size');

const SIZE = {
  width: [
    { title: '25%', key: '25', subTitle: '', className: 'w-25', },
    { title: '50%', key: '50', subTitle: '', className: 'w-50', },
    { title: '75%', key: '75', subTitle: '', className: 'w-75', },
    { title: '100%', key: '100', subTitle: '', className: 'w-100', },
    { title: 'auto', key: 'auto', subTitle: '', className: 'w-auto', },
  ],
  height: [
    { title: '25%', key: '25', subTitle: '', className: 'h-25', },
    { title: '50%', key: '50', subTitle: '', className: 'h-50', },
    { title: '75%', key: '75', subTitle: '', className: 'h-75', },
    { title: '100%', key: '100', subTitle: '', className: 'h-100', },
    { title: 'auto', key: 'auto', subTitle: '', className: 'h-auto', },
  ],
  viewport: [
    { title: '25%', key: '25', subTitle: '', className: 'w-vw-25', },
    { title: '50%', key: '25', subTitle: '', className: 'h-vh-25', },
  ]
};

export default class Size extends Component {

  createCode = (target) => {
    const data = SIZE[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}"> ... </div>
      
`;
      } else {
        code += `<div class="${item.className}"> ... </div>`;
      }
    })

    return code;
  }

  createItemCode = (target, itemKey) => {
    const data = SIZE[target];
    let code = ``;
    const item = find(data, (o) => o.key === itemKey );
    code = `<div class="${item.className}">
  ...
</div>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="width">宽度</h2>
        <p>设置元素的宽度，最大宽度，最小宽度。</p>
        <p>以 <code>5</code> 为基数，设置 <code>5 * [0-20]</code> 的值。如：</p>
        <ul className="pl-18">
          <li>
            宽度：以 <code>w-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-0</code></li>
              <li><code>w-5</code></li>
              <li><code>...</code></li>
              <li><code>w-100</code></li>
              <li>此外，还有特殊的自动宽度 <code>w-auto</code>。</li>
            </ul>
          </li>
          <li>
            最大宽度：以 <code>w-max-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-max-0</code></li>
              <li><code>w-max-5</code></li>
              <li><code>...</code></li>
              <li><code>w-max-100</code></li>
            </ul>
          </li>
          <li>最小宽度：以 <code>w-min-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-min-0</code></li>
              <li><code>w-min-5</code></li>
              <li><code>...</code></li>
              <li><code>w-min-100</code></li>
            </ul>
          </li>
        </ul>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  {
                    SIZE.width.map((item, index) => {
                      return (
                        <div className={classnames('bg-dark text-white border p-15', item.className)} key={index}>
                          {item.title}
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('width')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="height">高度</h2>
        <p>设置元素的高度，最大高度，最小高度。</p>
        <p>以 <code>5</code> 为基数，设置 <code>5 * [0-20]</code> 的值。如：</p>
        <ul className="pl-18">
          <li>高度：以 <code>h-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-0</code></li>
              <li><code>h-5</code></li>
              <li><code>...</code></li>
              <li><code>h-100</code></li>
              <li>此外，还有特殊的自动宽度 <code>h-auto</code>。</li>
            </ul>
          </li>
          <li>最大高度：以 <code>h-max-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-max-0</code></li>
              <li><code>h-max-5</code></li>
              <li><code>...</code></li>
              <li><code>h-max-100</code></li>
            </ul>
          </li>
          <li>最小高度：以 <code>h-min-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-min-0</code></li>
              <li><code>h-min-5</code></li>
              <li><code>...</code></li>
              <li><code>h-min-100</code></li>
            </ul></li>
        </ul>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      SIZE.height.map((item, index) => {
                        return (
                          <div className="col-2" key={index} style={{ height: '200px' }}>
                            <div className={classnames('bg-dark text-white p-15', item.className)}>
                              {item.title}
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('height')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="viewport">视口宽度和高度</h2>
        <p>以 <code>vw, vh</code> 为单位，设置宽度，最大宽度，最小宽度，高度，最大高度以及最小高度。</p>
        <p>以 <code>25</code> 为基数，设置 <code>25 * [1-4]</code> 的值。如：</p>
        <ul className="pl-18">
          <li>宽度：以 <code>w-vw-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-vw-25</code></li>
              <li><code>w-vw-50</code></li>
              <li><code>w-vw-75</code></li>
              <li><code>w-vw-100</code></li>
            </ul>
          </li>
          <li>最大宽度：以 <code>w-vw-max-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-vw-max-25</code></li>
              <li><code>w-vw-max-50</code></li>
              <li><code>w-vw-max-75</code></li>
              <li><code>w-vw-max-100</code></li>
            </ul>
          </li>
          <li>最小宽度：以 <code>w-vw-min-</code> 为前缀：
            <ul className="pl-18">
              <li><code>w-vw-min-25</code></li>
              <li><code>w-vw-min-50</code></li>
              <li><code>w-vw-min-75</code></li>
              <li><code>w-vw-min-100</code></li>
            </ul>
          </li>
          <li>高度：以 <code>h-vh-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-vh-25</code></li>
              <li><code>h-vh-50</code></li>
              <li><code>h-vh-75</code></li>
              <li><code>h-vh-100</code></li>
            </ul>
          </li>
          <li>最大高度：以 <code>h-vh-max-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-vh-max-25</code></li>
              <li><code>h-vh-max-50</code></li>
              <li><code>h-vh-max-75</code></li>
              <li><code>h-vh-max-100</code></li>
            </ul>
          </li>
          <li>最小高度：以 <code>h-vh-min-</code> 为前缀：
            <ul className="pl-18">
              <li><code>h-vh-min-25</code></li>
              <li><code>h-vh-min-50</code></li>
              <li><code>h-vh-min-75</code></li>
              <li><code>h-vh-min-100</code></li>
            </ul>
          </li>
        </ul>
        <div className={classnames('util-size')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  {
                    SIZE.viewport.map((item, index) => {
                      return (
                        <div className="mb-10" key={index}>
                          <div className={classnames('bg-dark text-white p-15 w-50 pt-relative', item.className)}>
                            <p className="text-center pt-center font-2x">{item.className}</p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('viewport')
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
