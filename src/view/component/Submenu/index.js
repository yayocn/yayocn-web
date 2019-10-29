import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';

export default class Submenu extends Component {
  render () {
    const { menu = [] } = this.props;
    return (
      <div className="submenu h-vh-max-80">
        <ul className="m-0">
          {
            menu.map((item) => {
              return <li key={item.key} className={classnames('submenu-item')}>
                <a  href={`#${item.key}`} className={classnames('block pv-2 ph-15 font-13')}>{item.title}</a>

                {
                  item.children && item.children.length > 0 &&
                  <ul>
                    {
                      item.children.map((submenu) => {
                        return <li key={submenu.key} className={classnames('submenu-item')}>
                          <a  href={`#${submenu.key}`} className={classnames('block pv-2 ph-15 font-12')}>{submenu.title}</a>
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
