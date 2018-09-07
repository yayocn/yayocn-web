import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './style.scss';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      sidebarOpened: false,
    }
  }
  // BEGIN: Util
  //

  toggle = () => {
    const { sidebarOpened } = this.state;
    this.setState({ sidebarOpened: !sidebarOpened });
  }

  //
  // END: Util

  render () {
    const { menu = [] } = this.props;
    const { sidebarOpened } = this.state;
    return (
      <div className={classnames('sidebar', { 'on': sidebarOpened })}>
        <div className="toggle">
          <button className={classnames('btn border-0 pt-0', { 'hidden': sidebarOpened })} onClick={this.toggle}><span className="mark-arrow-right2 font-2x"></span></button>
          <button className={classnames('btn border-0 pt-0 bg-dark text-white', { 'hidden': !sidebarOpened })} onClick={this.toggle}><span className="mark-arrow-left2 font-2x"></span></button>
        </div>
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
