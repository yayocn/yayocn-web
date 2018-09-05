import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

const TEXT = {
  theme: [
    { title: 'Primary', subTitle: '', className: 'text-primary', },
    { title: 'Secondary', subTitle: '', className: 'text-secondary', },
    { title: 'Success', subTitle: '', className: 'text-success', },
    { title: 'Info', subTitle: '', className: 'text-info', },
    { title: 'Warning', subTitle: '', className: 'text-warning', },
    { title: 'Danger', subTitle: '', className: 'text-danger', },
    { title: 'White', subTitle: '', className: 'text-white', },
    { title: 'Light', subTitle: '', className: 'text-light', },
    { title: 'Muted', subTitle: '', className: 'text-muted', },
    { title: 'Dark', subTitle: '', className: 'text-dark', },
    { title: 'Black', subTitle: '', className: 'text-black', },
  ],
  alignment: [
    { title: 'Left', key: 'left', subTitle: '水调歌头', className: 'text-left', },
    { title: 'Center', key: 'center', subTitle: '明月几时有', className: 'text-center', },
    { title: 'Right', key: 'right', subTitle: '（宋）苏轼', className: 'text-right', },
    { title: 'Justify', key: 'justify', subTitle: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。  转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。', className: 'text-justify', },
  ],
  wrap: [
    { title: 'Ellipsis', key: 'ellipsis', subTitle: '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。', className: 'text-ellipsis', },
    { title: 'Indent', key: 'indent', subTitle: '予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎?', className: 'text-indent', },
    { title: 'Nowrap', key: 'nowrap', subTitle: '若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。', className: 'text-nowrap', },
  ],
  transform: [
    { title: 'Uppercase', key: 'uppercase', subTitle: 'Uppercased text.', className: 'text-uppercase', },
    { title: 'Lowercase', key: 'lowercase', subTitle: 'Lowercased text.', className: 'text-lowercase', },
    { title: 'Capitalize', key: 'capitalize', subTitle: 'Capitalized text.', className: 'text-capitalize', },
  ],
  font: [
    { title: 'Web', key: 'web', subTitle: '衬线体，一般用于在web端显示的字体。This is serif font.', className: 'text-web', },
    { title: 'Paper', key: 'paper', subTitle: '非衬线体，一般是书籍的展示字体。This is sans-serif font.', className: 'text-paper', },
    { title: 'Letter', key: 'letter', subTitle: '等宽字体，一般是英文文本的字体。This is monospace font.', className: 'text-letter', },
  ]
};

export default class Text extends Component {

  createCode = (target) => {
    const data = TEXT[target];
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

  render () {
    return (
      <Fragment>
        <h1>文本 <code>Text</code></h1>
        <p className="font-2x font-100"><code>Text</code> 类可以快速设置文字的颜色，对齐方式，换行方式等。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>主题</h2>
        <div className={classnames('util-text')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    TEXT.theme.map((item, index) => {
                      return (
                        <div className={classnames('p-5', {'bg-dark text-white': item.title === 'White'})} key={index} >
                          <h6>{item.title}</h6>
                          <p className={item.className}>李白乘舟将欲行，忽闻岸上踏歌声。<a className={classnames(item.className)}>桃花潭水深千尺，不及汪伦送我情。</a></p>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>对齐</h2>
        <div className={classnames('util-text')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    TEXT.alignment.map((item, index) => {
                      return (
                        <div className={classnames('mb-10 w-50')} key={index} >
                          <p className={classnames(item.className)}>{item.subTitle}</p>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('alignment')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>换行</h2>
        <div className={classnames('util-text')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    TEXT.wrap.map((item, index) => {
                      return (
                        <div className={classnames('mb-10 w-25 bg-light')} key={index} >
                          <p className={classnames(item.className)}>{item.subTitle}</p>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('wrap')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>变形</h2>
        <div className={classnames('util-text')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    TEXT.transform.map((item, index) => {
                      return (
                        <div className={classnames('mb-10')} key={index} >
                          <p className={classnames(item.className)}>{item.subTitle}</p>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('transform')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>字体</h2>
        <div className={classnames('util-text')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  {
                    TEXT.font.map((item, index) => {
                      return (
                        <div className={classnames('mb-10')} key={index} >
                          <p className={classnames(item.className)}>{item.subTitle}</p>
                        </div>
                      );
                    })
                  }
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode('font')
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
