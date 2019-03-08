import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const config = menu.children.find((value) => value.key === 'collapse');

const COLLAPSE = {
  default: [
    { title: 'Divider', key: '', subTitle: '', className: 'collapse', },
  ],
};

export default class Collapse extends Component {

  createCode = (target) => {
    return `<p>
  <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample">
    永遇乐 · 京口北固亭怀古
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。<br/>
    元嘉草草，封狼居胥，赢得仓皇北顾。四十三年，望中犹记，烽火扬州路。可堪回首，佛狸祠下，一片神鸦社鼓。凭谁问，廉颇老矣，尚能饭否？
  </div>
</div>`;
  }

  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: config.title}}></h1>
        <p className="font-2x font-100" dangerouslySetInnerHTML={{__html: config.info}}></p>

        <div className="divider divider-bold divider-lg"></div>
        <h2 id="prepare">前奏</h2>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code> & <code>ricenoodle.js</code>。</li>
        </ul>

        <div className="divider divider-lg"></div>
        <h2 id="example">实例</h2>
        <p>单击下面的按钮以通过类更改显示和隐藏另一个元素：</p>
        <ul className="ph-30">
          <li><code>.collapse</code> 隐藏内容。</li>
          <li><code>.collapsing</code> 执行过渡动画。</li>
          <li><code>.collapse.show</code> 显示内容。</li>
        </ul>
        <div className={classnames('util-collapse')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example shadow')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      {
                        COLLAPSE.default.map((item, index) => {
                          return (
                            <div key={index}>
                              <p>
                                <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample">
                                  永遇乐 · 京口北固亭怀古
                                </button>
                              </p>
                              <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                  千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。<br/>
                                  元嘉草草，封狼居胥，赢得仓皇北顾。四十三年，望中犹记，烽火扬州路。可堪回首，佛狸祠下，一片神鸦社鼓。凭谁问，廉颇老矣，尚能饭否？
                                </div>
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
                      this.createCode('default')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="event">事件</h2>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/collapse/#usage" target="_black" rel="noopener noreferrer">Bootstrap collapse</a>。</p>
      </Fragment>
    );
  }
}
