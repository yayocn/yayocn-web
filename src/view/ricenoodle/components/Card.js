import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import '../../../../public/scss/common.scss';
import '../style.scss';
import cardImg from '../../../../public/image/slide2.jpg';
// eslint-disable-next-line
const ANCHOR = 'javascript:;';
const CARD = {
  default: [
    { title: 'Primary', key: '', subTitle: '', className: 'card', },
  ],
  link: [
    { title: 'Primary', key: '', subTitle: '', className: 'card', },
  ],
  headFoot: [
    { title: 'Header and Footer', key: '', subTitle: '', className: 'card', },
  ],
  theme: [
    { title: 'Primary', key: '', subTitle: '', className: 'card text-white bg-primary', },
    { title: 'Secondary', key: '', subTitle: '', className: 'card text-white bg-secondary', },
    { title: 'Success', key: '', subTitle: '', className: 'card text-white bg-success', },
    { title: 'Info', key: '', subTitle: '', className: 'card text-white bg-info', },
    { title: 'Warning', key: '', subTitle: '', className: 'card text-white bg-warning', },
    { title: 'Danger', key: '', subTitle: '', className: 'card text-white bg-danger', },
    { title: 'White', key: '', subTitle: '', className: 'card text-muted bg-white', },
    { title: 'Light', key: '', subTitle: '', className: 'card text-dark bg-light', },
    { title: 'Muted', key: '', subTitle: '', className: 'card text-white bg-muted', },
    { title: 'Dark', key: '', subTitle: '', className: 'card text-white bg-dark', },
    { title: 'Black', key: '', subTitle: '', className: 'card text-white bg-black', },
  ],
  deck: [
    { title: 'Equal width and height', key: '', subTitle: '', className: 'card-deck', },
  ],
  group: [
    { title: 'Equal width and height', key: '', subTitle: '', className: 'card-group', },
  ],
  columns: [
    { title: 'Equal width and height', key: '', subTitle: '', className: 'card-columns', },
  ]
};

export default class Card extends Component {

  createCode = () => {
    let code = ``;
    code = `<div class="card">
  <img class="card-img-top img-fluid" src="#" alt="" />
  <div class="card-body">
    <h5 class="card-title">满江红</h5>
    <h5 class="card-subtitle text-muted">岳飞</h5>
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
    <a href="#" class="btn btn-secondary">了解更多</a>
  </div>
</div>`;

    return code;
  };

  createImgCode = () => {
    let code = ``;
    code = `<div class="card">
  <img class="card-img-top img-fluid" src="#" alt="">
  <div class="card-body">
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
  </div>
</div>`;

    return code;
  };

  createLinkCode = () => {
    let code = ``;
    code = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">满江红</h5>
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
    <a href="#" class="card-link">了解更多</a>
  </div>
</div>`;

    return code;
  };

  createHeaderAndFooterCode = () => {
    let code = ``;
    code = `<div class="card">
  <div class="card-header">
    诗词鉴赏
  </div>
  <div class="card-body">
    <h5 class="card-title">满江红</h5>
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
    <a href="#" class="btn btn-secondary">了解更多</a>
  </div>
  <div class="card-footer text-muted">
    《唐诗宋词》
  </div>
</div>`;

    return code;
  };

  createSituationCode = (target) => {
    const data = CARD[target];
    let code = ``;
    const len = data.length;
    data.forEach((item, index) => {
      if (index !== len - 1) {
        code += `<div class="${item.className}">
  <div class="card-header">
    诗词鉴赏
  </div>
  <div class="card-body">
    <h5 class="card-title">满江红</h5>
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
  </div>
</div>
      
`;
      } else {
        code += `<div class="${item.className}">
  <div class="card-header">
    诗词鉴赏
  </div>
  <div class="card-body">
    <h5 class="card-title">满江红</h5>
    <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
  </div>
</div>`;
      }
    });

    return code;
  };

  createDeckCode = () => {
    let code = ``;
    code = `<div class="card-deck">
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">岳飞 怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。
      </p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">岳飞 怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
</div>`;

    return code;
  };

  createGroupCode = () => {
    let code = ``;
    code = `<div class="card-group">
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">岳飞</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">岳飞</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top img-fluid" src="#" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text"></p>
      <p class="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">岳飞</small>
    </div>
  </div>
</div>`;

    return code;
  }

  createColumnsCode = () => {
    let code = ``;
    code = `<div class="card-columns">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          岳飞
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
      <footer class="blockquote-footer">
        <small>
          岳飞
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
  <div class="card">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          岳飞
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">满江红</h5>
      <p class="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
      <p class="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
      <p class="card-text"><small class="text-muted">岳飞</small></p>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h1>卡片 <code>Card</code></h1>
        <p className="font-2x font-100">Ricenoodle 的卡片提供灵活且可扩展的内容容器，具有多种变体和选项。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h2>实例</h2>
        <p>卡片采用尽可能少的标记和样式构建，但仍然能够提供大量的控制和定制。 它们采用弹性盒子构建，可轻松对齐并与其他组件完美混合。
          默认情况下它们没有边距，因此请根据需要使用 <a href="/ricenoodle/utilities/space">Space</a>。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className={classnames('card-img-1', 'card')}>
                        <img className="card-img-top img-fluid"
                             src={cardImg}
                             alt="card"/>
                        <div className="card-body">
                          <h5 className="card-title">满江红</h5>
                          <h6 className="card-subtitle text-muted">岳飞</h6>
                          <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                          <a href={ANCHOR} className="btn btn-secondary">了解更多</a>
                        </div>
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

        <h2>图片</h2>
        <p><code>.card-img-top img-fluid</code> 将图像放在卡片的顶部。 使用 <code>.card-text</code> 可以将文本添加到卡中。
          <code>.card-text</code> 中的文本也可以使用标准HTML标记进行样式设置。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className={classnames('card-img-1', 'card')}>
                        <img className="card-img-top img-fluid"
                             src={cardImg}
                             alt="card"/>
                        <div className="card-body">
                          <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createImgCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>锚点</h2>
        <p>通过添加 <code>.card-link</code> 到 <code>&lt;a&gt;</code> 元素，添加链接并将它们彼此相邻放置。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className={classnames('card-img-1', 'card')}>
                        <div className="card-body">
                          <h5 className="card-title">满江红</h5>
                          <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                          <a href={ANCHOR} className="card-link">了解更多</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createLinkCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>头部和底部</h2>
        <p>在卡中添加可选的页眉和页脚。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className={classnames('card-img-1', 'card')}>
                        <div className="card-header">
                          诗词鉴赏
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">满江红</h5>
                          <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                          <a href={ANCHOR} className="btn btn-secondary">了解更多</a>
                        </div>
                        <div className="card-footer text-muted">
                          《唐诗宋词》
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createHeaderAndFooterCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>主题</h2>
        <p>通过 <a href="/ricenoodle/utilities/background">Background</a>，<a href="/ricenoodle/utilities/text">Text</a>，<a href="/ricenoodle/utilities/border">Border</a>  等工具类的组合，形成主题。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    {
                      CARD.theme.map((item, index) => {
                        return <div className="col-lg-3 col-md-4 col-sm-2 col-1 mb-10" key={index}>
                          <div className={classnames(item.className)}>
                            <div className="card-header">
                              诗词鉴赏
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">满江红</h5>
                              <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                            </div>
                          </div>
                        </div>;
                      })
                    }
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createSituationCode('theme')
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>卡片组</h2>
        <p>使用卡片组将卡片呈现为具有相等宽度和高度列的单个附加元素。卡片组用的弹性布局，实现均匀的尺寸。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-9 col-12">
                      {
                        CARD.group.map((item, index) => {
                          return <div className={classnames(item.className)} key={index}>
                            <div className="card">
                              <img className="card-img-top img-fluid" src={cardImg} alt="Card cap"/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                              </div>
                              <div className="card-footer">
                                <small className="text-muted">岳飞</small>
                              </div>
                            </div>
                            <div className="card">
                              <img className="card-img-top img-fluid" src={cardImg} alt="Card cap"/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                              </div>
                              <div className="card-footer">
                                <small className="text-muted">岳飞</small>
                              </div>
                            </div>
                            <div className="card">
                              <img className="card-img-top img-fluid" src={cardImg} alt="Card cap"/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                              </div>
                              <div className="card-footer">
                                <small className="text-muted">岳飞</small>
                              </div>
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createGroupCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>分开的卡片组</h2>
        <p>显示一组相同宽度和高度的卡片，它们之间没有相互连接。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-9 col-12">
                      {
                        CARD.deck.map((item, index) => {
                          return <div className={classnames(item.className)} key={index}>
                            <div className="card">
                              <img className="card-img-top img-fluid"
                                   src={cardImg}
                                   alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">
                                  <small className="text-muted">岳飞</small>
                                </p>
                              </div>
                            </div>
                            <div className="card">
                              <img className="card-img-top img-fluid"
                                   src={cardImg}

                                   alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">
                                  <small className="text-muted">岳飞</small>
                                </p>
                              </div>
                            </div>
                            <div className="card">
                              <img className="card-img-top img-fluid"
                                   src={cardImg}
                                   alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                                <p className="card-text">
                                  <small className="text-muted">岳飞</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createDeckCode()
                    }
                  </Highlight>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider divider-lg"></div>
        <h2>自动分列的卡片组</h2>
        <p>通过将卡片包装在 <code>.card-columns</code> 中，可以将卡片组织成类似砖墙的列。卡片使用CSS列属性而不是弹性盒子，以便更容易对齐。 卡从上到下，从左到右排序。</p>
        <p>重点！卡列的数目可能会有所不同。 为了防止卡片跨列，我们必须将它们设置为显示：<code>inline-block</code>。</p>
        <div className={classnames('util-card')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-lg-9 col-12">
                      {
                        CARD.columns.map((item, index) => {
                          return <div className={classnames(item.className)} key={index}>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                              </div>
                            </div>
                            <div className="card p-3">
                              <blockquote className="blockquote mb-0 card-body">
                                <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                                <footer className="blockquote-footer">
                                  <small className="text-muted">
                                    岳飞
                                  </small>
                                </footer>
                              </blockquote>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text"><small className="text-muted">岳飞</small></p>
                              </div>
                            </div>
                            <div className="card bg-primary text-white text-center p-3">
                              <blockquote className="blockquote mb-0">
                                <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                                <footer className="blockquote-footer">
                                  <small>
                                    岳飞
                                  </small>
                                </footer>
                              </blockquote>
                            </div>
                            <div className="card text-center">
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text"><small className="text-muted">岳飞</small></p>
                              </div>
                            </div>
                            <div className="card">
                            </div>
                            <div className="card p-3 text-right">
                              <blockquote className="blockquote mb-0">
                                <p>靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                                <footer className="blockquote-footer">
                                  <small className="text-muted">
                                    岳飞
                                  </small>
                                </footer>
                              </blockquote>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">满江红</h5>
                                <p className="card-text">怒发冲冠，凭栏处，潇潇雨歇。 抬望眼，仰天长啸，壮怀激烈。 三十功名尘与土，八千里路云和月。 莫等闲，白了少年头，空悲切。</p>
                                <p className="card-text">靖康耻，犹未雪。臣子恨，何时灭！ 驾长车，踏破贺兰山缺。 壮志饥餐胡虏肉，笑谈渴饮匈奴血。 待从头，收拾旧山河，朝天阙。</p>
                                <p className="card-text"><small className="text-muted">岳飞</small></p>
                              </div>
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createColumnsCode()
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
