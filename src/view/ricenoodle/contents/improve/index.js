import React, { Component, Fragment } from 'react';
import { ricenoodle } from '../../../../constants/menu';

const thumbnails = ricenoodle.find((value) => value.key === 'improve').children;

export default class Improve extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <h1>样式增强 <code>Improve</code></h1>
          <p className="font-2x font-100">
            在这一部分，Ricenoodle 重置了一些常用元素的样式，并额外添加了一些针对性很强的 CSS 类。
          </p>
        </div>

        <div className="divider divider-lg divider-bold"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="card-group">
              {
                thumbnails.map((item) => {
                  return (
                    <div className="card" key={item.key}>
                      <div className="card-header">
                        {item.title}
                      </div>
                      <div className="card-body">
                        <p className="card-text">{item.info}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
