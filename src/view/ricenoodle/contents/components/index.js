import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ricenoodle } from '../../../../constants/menu';

const menu = ricenoodle.find((value) => value.key === 'components');
const thumbnails = menu.children;

export default class Index extends Component {
  render () {
    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{__html: menu.title}}></h1>
        <p className="font-2x font-100"  dangerouslySetInnerHTML={{__html: menu.info}}></p>
        <p className="alert alert-light">组件如果要单独使用，需要先引入 <code>ricenoodle.normalize.css</code> 和相关的 <code>js</code> 文件。</p>

        <div className="divider divider-lg divider-bold"></div>

        <h2 className="mb-20">目录</h2>
        <table className="table table-border">
          <colgroup>
            <col width="20%"></col>
            <col width="80%"></col>
          </colgroup>
          <tbody>
          {
            thumbnails.map((item) => {
              return (
                <tr key={item.key}>
                  <td><Link to={item.link} className="text-dark text-nowrap" dangerouslySetInnerHTML={{ __html: item.title }}></Link></td>
                  <td dangerouslySetInnerHTML={{ __html: item.info }}></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Fragment>
    );
  }
}
