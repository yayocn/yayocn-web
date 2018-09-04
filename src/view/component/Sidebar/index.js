import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './style.scss';

export default class Sidebar extends Component {
  // BEGIN: Util
  //



  //
  // END: Util

  render () {
    const { menu = [] } = this.props;
    return (
      <div className="sidebar">
        <ul>
          {
            menu.map((item) => {
              if (item.children && item.children.length > 0) {
                return <li key={item.key} className={classnames('sidebar-submenu')} >
                  <NavLink to={item.link} activeClassName="active" className={classnames('block pv-10 ph-30')} dangerouslySetInnerHTML={{__html: item.title}}></NavLink>
                    <Fragment>
                      <ul>
                        {
                          item.children.map((submenu) => {
                            return <li key={submenu.key} className={classnames('sidebar-item')}>
                              <NavLink to={submenu.link} activeClassName="active" className={classnames('block pv-10 ph-50 font-12')} dangerouslySetInnerHTML={{__html: submenu.title}}></NavLink>
                            </li>
                          })
                        }
                      </ul>
                    </Fragment>
                </li>
              } else {
                return <li key={item.key} className={classnames('sidebar-item')}>
                  <NavLink to={item.link} exact activeClassName="active" className={classnames('block pv-10 ph-30')} dangerouslySetInnerHTML={{__html: item.title}}></NavLink>
                </li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}
