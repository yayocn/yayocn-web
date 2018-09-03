import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import style from './style.scss';

export default class Sidebar extends Component {
  // BEGIN: Util
  //



  //
  // END: Util

  render () {
    const { menu = [] } = this.props;
    return (
      <div className={style.sidebar}>
        <ul>
          {
            menu.map((item) => {
              if (item.children && item.children.length > 0) {
                return <li key={item.key} className={classnames(style['sidebar-submenu'])}>
                  <Link to={item.link} className={classnames('block pv-10 ph-30', style['sidebar-item'])} dangerouslySetInnerHTML={{__html: item.title}}></Link>
                    <Fragment>
                      <ul>
                        {
                          item.children.map((submenu) => {
                            return <li key={submenu.key} className={classnames(style['sidebar-item'])}>
                              <Link to={submenu.link} className={classnames('block pv-10 ph-50 font-12')} dangerouslySetInnerHTML={{__html: submenu.title}}></Link>
                            </li>
                          })
                        }
                      </ul>
                    </Fragment>
                </li>
              } else {
                return <li key={item.key} className={classnames(style['sidebar-item'])}>
                  <Link to={item.link} className={classnames('block pv-10 ph-30')} dangerouslySetInnerHTML={{__html: item.title}}></Link>
                </li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}
