import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

export default class Pagination extends Component {

  createCode = () => {
    let code = `<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#fat">定风波·三月七日</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">念奴娇·赤壁怀古</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">更多</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#one">水调歌头·丙辰中秋</a>
        <a class="dropdown-item" href="#two">江城子.密州出猎</a>
        <div role="separator" class="dropdown-divider"></div>
      </div>
    </li>
  </ul>
</nav>
<div class="pt-relative" data-spy="scroll" data-target="#navbar-example2" data-offset="20" style="height: 300px;overflow: auto;">
  <h4 id="fat">定风波·三月七日</h4>
  <p> ... </p>
  <h4 id="mdo">念奴娇·赤壁怀古</h4>
  <p> ... </p>
  <h4 id="one">水调歌头·丙辰中秋</h4>
  <p> ... </p>
  <h4 id="two">江城子.密州出猎</h4>
  <p> ... </p>
  <h4 id="three">three</h4>
  <p> ... </p>
</div>`;

    return code;
  }

  createListGroupCode = () => {
    let code = `<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">定风波·三月七日</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">念奴娇·赤壁怀古</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">水调歌头·丙辰中秋</a>
      <a class="list-group-item list-group-item-action active" href="#list-item-4">江城子.密州出猎</a>
    </div>
  </div>
  <div class="col-8">
    <div class="pt-relative" data-spy="scroll" data-target="#list-example" data-offset="20" style={{ height: '200px', overflow: 'auto'}}>
      <h4 id="list-item-1">定风波·三月七日</h4>
      <p> ... </p>
      <h4 id="list-item-2">念奴娇·赤壁怀古</h4>
      <p> ... </p>
      <h4 id="list-item-3">水调歌头·丙辰中秋</h4>
      <p> ... </p>
      <h4 id="list-item-4">江城子.密州出猎</h4>
      <p> ... </p>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>滚动监听 <code>Scrollspy</code></h1>
        <p className="font-2x font-100">根据滚动位置自动更新导航，以指示视口中当前处于活动状态的链接。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2 id="prepare">前奏</h2>
        <ul className="ph-30">
          <li>引入 <code>jquery.js</code> & <code>ricenoodle.js</code>。</li>
          <li>Scrollspy 需要在 <code>position: relative;</code> 的环境下工作，因此在监听元素上添加 <code>.pt-relative</code> 类，通常是 <code>&lt;body&gt;</code> 元素。</li>
          <li>监听元素需要有固定或者最大高度，并且声明 <code>overflow-y: scroll;</code>。</li>
          <li>锚点 <code>&lt;a&gt;</code> 必须指向对应的 <code>id</code>。</li>
        </ul>

        <div className="divider divider-lg"></div>

        <h2 id="navbar">导航条</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <nav id="navbar-example2" className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href={ANCHOR}>Navbar</a>
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a className="nav-link active" href="#fat">定风波·三月七日</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#mdo">念奴娇·赤壁怀古</a>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={ANCHOR}>更多</a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#one">水调歌头·丙辰中秋</a>
                              <a className="dropdown-item" href="#two">江城子.密州出猎</a>
                              <div role="separator" className="dropdown-divider"></div>
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <div className="pt-relative" data-spy="scroll" data-target="#navbar-example2" data-offset="20" style={{ height: '300px', overflow: 'auto' }}>
                        <h4 id="fat">定风波·三月七日</h4>
                        <p>
                          莫听穿林打叶声，何妨吟啸且徐行。<br/>
                          竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。 <br/>
                          料峭春风吹酒醒，微冷，山头斜照却相迎。 <br/>
                          回首向来萧瑟处，归去，也无风雨也无晴。
                        </p>
                        <h4 id="mdo">念奴娇·赤壁怀古</h4>
                        <p>
                          大江东去，浪淘尽，千古风流人物。 <br/>
                          故垒西边，人道是，三国周郎赤壁。 <br/>
                          乱石穿空，惊涛拍岸，卷起千堆雪。 <br/>
                          江山如画，一时多少豪杰。<br/>
                          遥想公瑾当年，小乔初嫁了，雄姿英发。<br/>
                          羽扇纶巾，谈笑间，樯橹灰飞烟灭。 <br/>
                          故国神游，多情应笑我，早生华发。 <br/>
                          人生如梦，一樽还酹江月。
                        </p>
                        <h4 id="one">水调歌头·丙辰中秋</h4>
                        <p>
                          明月几时有？把酒问青天。 <br/>
                          不知天上宫阙，今夕是何年。 <br/>
                          我欲乘风归去，又恐琼楼玉宇，高处不胜寒。 <br/>
                          起舞弄清影，何似在人间？ <br/>
                          转朱阁，低绮户，照无眠。 <br/>
                          不应有恨，何事长向别时圆？ <br/>
                          人有悲欢离合，月有阴晴圆缺，此事古难全。<br/>
                          但愿人长久，千里共婵娟。
                        </p>
                        <h4 id="two">江城子.密州出猎</h4>
                        <p>
                          老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。 <br/>
                          为报倾城随太守，亲射虎，看孙郎。<br/>
                          酒酣胸胆尚开张，鬓微霜，又何妨？<br/>
                          持节云中，何日遣冯唐？ <br/>
                          会挽雕弓如满月，西北望，射天狼。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>

        <h2 id="list">列表</h2>
        <div className={classnames('util-pagination')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4">
                          <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#list-item-1">定风波·三月七日</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">念奴娇·赤壁怀古</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">水调歌头·丙辰中秋</a>
                            <a className="list-group-item list-group-item-action active" href="#list-item-4">江城子.密州出猎</a>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="pt-relative" data-spy="scroll" data-target="#list-example" data-offset="20" style={{ height: '200px', overflow: 'auto'}}>
                            <h4 id="list-item-1">定风波·三月七日</h4>
                            <p>
                              莫听穿林打叶声，何妨吟啸且徐行。<br/>
                              竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。 <br/>
                              料峭春风吹酒醒，微冷，山头斜照却相迎。 <br/>
                              回首向来萧瑟处，归去，也无风雨也无晴。
                            </p>
                            <h4 id="list-item-2">念奴娇·赤壁怀古</h4>
                            <p>
                              大江东去，浪淘尽，千古风流人物。 <br/>
                              故垒西边，人道是，三国周郎赤壁。 <br/>
                              乱石穿空，惊涛拍岸，卷起千堆雪。 <br/>
                              江山如画，一时多少豪杰。<br/>
                              遥想公瑾当年，小乔初嫁了，雄姿英发。<br/>
                              羽扇纶巾，谈笑间，樯橹灰飞烟灭。 <br/>
                              故国神游，多情应笑我，早生华发。 <br/>
                              人生如梦，一樽还酹江月。
                            </p>
                            <h4 id="list-item-3">水调歌头·丙辰中秋</h4>
                            <p>
                              明月几时有？把酒问青天。 <br/>
                              不知天上宫阙，今夕是何年。 <br/>
                              我欲乘风归去，又恐琼楼玉宇，高处不胜寒。 <br/>
                              起舞弄清影，何似在人间？ <br/>
                              转朱阁，低绮户，照无眠。 <br/>
                              不应有恨，何事长向别时圆？ <br/>
                              人有悲欢离合，月有阴晴圆缺，此事古难全。<br/>
                              但愿人长久，千里共婵娟。
                            </p>
                            <h4 id="list-item-4">江城子.密州出猎</h4>
                            <p>
                              老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。 <br/>
                              为报倾城随太守，亲射虎，看孙郎。<br/>
                              酒酣胸胆尚开张，鬓微霜，又何妨？<br/>
                              持节云中，何日遣冯唐？ <br/>
                              会挽雕弓如满月，西北望，射天狼。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createListGroupCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2 id="event">事件</h2>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/scrollspy/#usage" target="_blank" rel="noopener noreferrer">Bootstrap scrollspy</a>。</p>
      </Fragment>
    );
  }
}
