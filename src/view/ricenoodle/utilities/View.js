import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

const VIEW = {
  display: [
    { title: 'inline', key: 'inline', subTitle: '', className: 'inline', },
    { title: 'Flex', key: 'flex', subTitle: '', className: 'flex', },
    { title: 'Flex inline', key: 'flexInline', subTitle: '', className: 'flex-inline', },
    { title: 'Block', key: 'block', subTitle: '', className: 'block', },
    { title: 'Block inline', key: 'blockInline', subTitle: '', className: 'block-inline', },
  ],
  hidden: [
    { title: 'Hidden', key: 'hidden', subTitle: '', className: 'hidden', },
  ],
  visibility: [
    { title: 'Visible', key: 'visible', subTitle: '', className: 'visible', },
    { title: 'Invisible', key: 'invisible', subTitle: '', className: 'invisible', },
  ],
  opacity: [
    { title: '0%', key: '0', subTitle: '', className: 'opacity-0', },
    { title: '10%', key: '1', subTitle: '', className: 'opacity-1', },
    { title: '20%', key: '2', subTitle: '', className: 'opacity-2', },
    { title: '30%', key: '3', subTitle: '', className: 'opacity-3', },
    { title: '40%', key: '4', subTitle: '', className: 'opacity-4', },
    { title: '50%', key: '5', subTitle: '', className: 'opacity-5', },
    { title: '60%', key: '6', subTitle: '', className: 'opacity-6', },
    { title: '70%', key: '7', subTitle: '', className: 'opacity-7', },
    { title: '80%', key: '8', subTitle: '', className: 'opacity-8', },
    { title: '90%', key: '9', subTitle: '', className: 'opacity-9', },
    { title: '100%', key: '10', subTitle: '', className: 'opacity-10', },
  ]
};

export default class View extends Component {

  createCode = (target) => {
    const data = VIEW[target];
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

  createHiddenCode = () => {
    let code = ``;
    code += `<div class="hidden"> ... </div>
<div hidden> ... </div>`
    return code;
  }

  createVisibleCode = () => {
    let code = ``;
    code += `<div class="visible"> ... </div>
<div class="invisible"> ... </div>`
    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>视图 <code>View</code></h1>
        <p className="font-2x font-1000"><code>View</code> 类可以快速设置元素的 <code>display | visibility | opacity</code> 等属性。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>显示类型</h2>
        <p>通过设置 <code>display</code> 属性来控制显示的类型。</p>
        <div className={classnames('util-view')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    VIEW.display.map((item, index) => {
                      return (
                        <div className={classnames('mb-20 text-white')} key={index} >
                          <div className={classnames('border w-50 text-center', item.className, 'view-item')}>{item.title}</div>
                          <div className={classnames('border w-50 text-center', item.className, 'view-item')}>{item.title}</div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('display')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>Hidden</h2>
        <p>通过添加 <code>hidden</code> 属性或者 <code>.hidden</code> 类来控制隐藏元素，此时元素没有高度和宽度。</p>
        <div className={classnames('util-view')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('mt-0', 'example-code')}>
                  <Highlight copyBtn={false}>
                    {
                      this.createHiddenCode('hidden')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>Visibility</h2>
        <p>通过添加 <code>.visible | .invisible</code> 类来控制隐藏元素，此时元素有高度和宽度，效果和 <code>.opacity-10 | .opacity-0</code> 一样。</p>
        <div className={classnames('util-view')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    VIEW.visibility.map((item, index) => {
                      return (
                        <div className={classnames('mb-20 border text-white')} key={index} >
                          <div className={classnames('text-center', item.className, 'view-item')}>{item.title}</div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('visibility')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>不透明度</h2>
        <p>通过添加 <code>.opacity-[x]</code> 类来控制元素的不透明度。</p>
        <div className={classnames('util-view')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    VIEW.opacity.map((item, index) => {
                      return (
                        <div className={classnames('mb-10 border text-white')} key={index} >
                          <div className={classnames('text-center', item.className, 'view-item')}>{item.title}</div>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight copyBtn={false}>
                    {
                      this.createCode('opacity')
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
