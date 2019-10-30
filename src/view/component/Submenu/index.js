import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';

import { NO_LINK } from '../../../constants/const';

export default class Submenu extends Component {
  scrollToAnchor = (id) => {
    try {
      document.getElementById(id).scrollIntoView();
    } catch (e) {
      console.error(`Id '#${id}' wasn't found in this page.`);
    }
  }

  render () {
    const { scrollToAnchor } = this;
    const { menu = [] } = this.props;
    return (
      <div className="submenu h-vh-max-80">
        <ul className="m-0">
          {
            menu.map((item) => {
              return <li key={item.key} className={classnames('submenu-item')}>
                <a className={classnames('block pv-2 ph-15 font-13')} href={NO_LINK} onClick={() => { scrollToAnchor(item.key) }}>{item.title}</a>

                {
                  item.children && item.children.length > 0 &&
                  <ul>
                    {
                      item.children.map((submenu) => {
                        return <li key={submenu.key} className={classnames('submenu-item')}>
                          <a className={classnames('block pv-2 ph-15 font-12')} href={NO_LINK} onClick={() => { scrollToAnchor(item.key) }}>{submenu.title}</a>
                        </li>
                      })
                    }
                  </ul>
                }
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
