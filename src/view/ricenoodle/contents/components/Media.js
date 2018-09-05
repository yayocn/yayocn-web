import React, { Component, Fragment } from 'react';
import Highlight from '../../../component/Highlight';
import classnames from 'classnames';
import '../../../common/scss/common.scss';
import '../../style.scss';

export default class Media extends Component {

  createCode = () => {
    let code = `<div class="media">
  <img class="mr-15" src="">
  <div class="media-body">
    <h5 class="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
    明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。
  </div>
</div>`;

    return code;
  }

  createNestCode = () => {
    let code = `<div class="media">
  <img class="mr-15" src="">
  <div class="media-body">
    <h5 class="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
    明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。
    
    <div class="media">
      <img class="mr-15" src="">
      <div class="media-body">
        <h5 class="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
        明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。
      </div>
    </div>
  </div>
</div>`;

    return code;
  }

  render () {
    return (
      <Fragment>
        <h1>媒体对象 <code>Media</code></h1>
        <p className="font-2x font-100">这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片。</p>

        <div className="divider divider-bold divider-lg"></div>
        <h2>实例</h2>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className="media">
                        <img className="mr-15" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162ae950a0a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162ae950a0a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213%22%20y%3D%2236.8%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder" />
                        <div className="media-body">
                          <h5 className="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
                          明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。
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
        <h3>嵌套</h3>
        <div className={classnames('util-badge')}>
          <div className="row">
            <div className="col-12">
              <div className={classnames('feature-example')}>
                <div className={classnames('example-view')}>
                  <div className="row">
                    <div className="col-12">
                      <div className="media">
                        <img className="mr-15" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162ae950a0a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162ae950a0a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213%22%20y%3D%2236.8%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder" />
                        <div className="media-body">
                          <h5 className="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
                          明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。

                          <div className="media mt-20">
                            <img className="mr-15 border-round-circle" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162ae950a0a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162ae950a0a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213%22%20y%3D%2236.8%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder" />
                            <div className="media-body">
                              <h5 className="mt-0">辛弃疾 <small>《西江月·夜行黄沙道中》</small></h5>
                              明月别枝惊鹊，清风半夜鸣蝉。 稻花香里说丰年，听取蛙声一片。 七八个星天外，两三点雨山前。 旧时茅店社林边，路转溪头忽见。
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('example-code')}>
                  <Highlight>
                    {
                      this.createNestCode()
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
