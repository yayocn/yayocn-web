import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';

const JUMBOTRON = {
  default: [
    { title: 'Default', key: '', subTitle: '', className: 'jumbotron', },
  ],
  responsive: [
    { title: 'Default', key: '', subTitle: '', className: 'jumbotron jumbotron-fluid', },
  ],
};

export default class Jumbotron extends Component {

  createCode = (target) => {
    const data = JUMBOTRON[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <h1>永遇乐·京口北固亭怀古</h1>
  <p>
    千古江山，英雄无觅，孙仲谋处。 舞榭歌台，风流总被，雨打风吹去。 斜阳草树，寻常巷陌，人道寄奴曾住。 想当年，金戈铁马，气吞万里如虎。 <br>
    元嘉草草，封狼居胥，赢得仓皇北顾。 四十三年，望中犹记，烽火扬州路。 可堪回首，佛狸祠下，一片神鸦社鼓。 凭谁问，廉颇老矣，尚能饭否？
  </p>
  <hr/>
  <button type="button" class="btn btn-secondary btn-hg">了解更多</button>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <h1>永遇乐·京口北固亭怀古</h1>
  <p>
    千古江山，英雄无觅，孙仲谋处。 舞榭歌台，风流总被，雨打风吹去。 斜阳草树，寻常巷陌，人道寄奴曾住。 想当年，金戈铁马，气吞万里如虎。 <br>
    元嘉草草，封狼居胥，赢得仓皇北顾。 四十三年，望中犹记，烽火扬州路。 可堪回首，佛狸祠下，一片神鸦社鼓。 凭谁问，廉颇老矣，尚能饭否？
  </p>
  <hr/>
  <button type="button" class="btn btn-secondary btn-hg">了解更多</button>
</div>`;
      }
    })

    return code;
  }
  
  createResponsiveCode = (target) => {
    let code = `<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>永遇乐·京口北固亭怀古</h1>
    <p>
      千古江山，英雄无觅，孙仲谋处。 舞榭歌台，风流总被，雨打风吹去。 斜阳草树，寻常巷陌，人道寄奴曾住。 想当年，金戈铁马，气吞万里如虎。 <br> 
      元嘉草草，封狼居胥，赢得仓皇北顾。 四十三年，望中犹记，烽火扬州路。 可堪回首，佛狸祠下，一片神鸦社鼓。 凭谁问，廉颇老矣，尚能饭否？
    </p>
    <hr/>
    <button type="button" class="btn btn-secondary btn-hg">了解更多</button>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>大屏幕 <code>Jumbotron</code></h1>
        <p className="font-2x font-100">轻巧，灵活的大屏幕组件，用于展示醒目的内容。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <div className={classnames('util-jumbotron')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        JUMBOTRON.default.map((item, index) => {
                          return (
                            <div className={item.className} key={index}>
                              <h1>永遇乐·京口北固亭怀古</h1>
                              <p>
                                千古江山，英雄无觅，孙仲谋处。 舞榭歌台，风流总被，雨打风吹去。 斜阳草树，寻常巷陌，人道寄奴曾住。 想当年，金戈铁马，气吞万里如虎。 <br/>
                                元嘉草草，封狼居胥，赢得仓皇北顾。 四十三年，望中犹记，烽火扬州路。 可堪回首，佛狸祠下，一片神鸦社鼓。 凭谁问，廉颇老矣，尚能饭否？
                              </p>
                              <hr/>
                              <button type="button" className="btn btn-secondary btn-hg">了解更多</button>
                            </div>
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

        <div className="divider divider-bold divider-lg"></div>

        <h2>响应式</h2>
        <p>添加了 <code>.jumbotron-fluid</code> 后，就可以在组件内部使用栅格系统了。</p>
        <div className={classnames('util-jumbotron')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        JUMBOTRON.responsive.map((item, index) => {
                          return (
                            <div className={item.className} key={index}>
                              <div className="container">
                                <h1>永遇乐·京口北固亭怀古</h1>
                                <p>
                                  千古江山，英雄无觅，孙仲谋处。 舞榭歌台，风流总被，雨打风吹去。 斜阳草树，寻常巷陌，人道寄奴曾住。 想当年，金戈铁马，气吞万里如虎。<br/>
                                  元嘉草草，封狼居胥，赢得仓皇北顾。 四十三年，望中犹记，烽火扬州路。 可堪回首，佛狸祠下，一片神鸦社鼓。 凭谁问，廉颇老矣，尚能饭否？
                                </p>
                                <hr/>
                                <button type="button" className="btn btn-secondary btn-hg">了解更多</button>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createResponsiveCode()
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
