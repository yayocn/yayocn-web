import React, { Component } from 'react';
import PageWrapper from '../../component/PageWrapper';
import Highlight from '../../component/Highlight';
import classnames from 'classnames';
import common from '../../../../public/scss/common.scss'
import style from '../style.scss';

// eslint-disable-next-line
const ANCHOR = 'javascript:;';

export default class Pagination extends Component {

  createCode = () => {
    let code = `<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#fat">@fat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">@mdo</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#one">one</a>
        <a class="dropdown-item" href="#two">two</a>
        <div role="separator" class="dropdown-divider"></div>
        <a class="dropdown-item" href="#three">three</a>
      </div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0" style="height: 300px;overflow: auto;">
  <h4 id="fat">@fat</h4>
  <p> ... </p>
  <h4 id="mdo">@mdo</h4>
  <p> ... </p>
  <h4 id="one">one</h4>
  <p> ... </p>
  <h4 id="two">two</h4>
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
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a class="list-group-item list-group-item-action active" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div class="col-8">
    <div data-spy="scroll" data-target="#list-example" data-offset="0" style={{ height: '200px', overflow: 'auto'}}>
      <h4 id="list-item-1">Item 1</h4>
      <p> ... </p>
      <h4 id="list-item-2">Item 2</h4>
      <p> ... </p>
      <h4 id="list-item-3">Item 3</h4>
      <p> ... </p>
      <h4 id="list-item-4">Item 4</h4>
      <p> ... </p>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <PageWrapper>
        <h2>说明</h2>
        <p>根据滚动位置自动更新导航，以指示视口中当前处于活动状态的链接。</p>

        <div className="divider divider-bold divider-lg"></div>

        <h3>导航条</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <nav id="navbar-example2" className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href={ANCHOR}>Navbar</a>
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a className="nav-link active" href="#fat">@fat</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#mdo">@mdo</a>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={ANCHOR}>Dropdown</a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#one">one</a>
                              <a className="dropdown-item" href="#two">two</a>
                              <div role="separator" className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#three">three</a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" style={{ height: '300px', overflow: 'auto' }}>
                        <h4 id="fat">@fat</h4>
                        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
                        <h4 id="mdo">@mdo</h4>
                        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
                        <h4 id="one">one</h4>
                        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
                        <h4 id="two">two</h4>
                        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
                        <h4 id="three">three</h4>
                        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
                        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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

        <div className="divider divider-bold divider-lg"></div>

        <h3>列表</h3>
        <div className={classnames(style['util-pagination'])}>
          <div className="row">
            <div className="col-12">
              <div className={classnames(common['feature-example'])}>
                <div className={classnames(common['example-view'])}>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4">
                          <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a className="list-group-item list-group-item-action active" href="#list-item-4">Item 4</a>
                          </div>
                        </div>
                        <div className="col-8">
                          <div data-spy="scroll" data-target="#list-example" data-offset="0" style={{ height: '200px', overflow: 'auto'}}>
                            <h4 id="list-item-1">Item 1</h4>
                            <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
                            <h4 id="list-item-2">Item 2</h4>
                            <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
                            <h4 id="list-item-3">Item 3</h4>
                            <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
                            <h4 id="list-item-4">Item 4</h4>
                            <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames(common['example-code'])}>
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
        <h3>事件</h3>
        <p>参考 <a href="https://getbootstrap.com/docs/4.1/components/scrollspy/#usage" target="_blank" rel="noopener noreferrer">Bootstrap Scrollspy</a> 。</p>
      </PageWrapper>
    );
  }
}
