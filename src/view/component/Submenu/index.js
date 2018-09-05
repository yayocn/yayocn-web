import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';

export default class Submenu extends Component {
  render () {
    const { menu = [] } = this.props;
    return (
      <div className="submenu">
        <ul className="m-0">
          {
            menu.map((item) => {
              return <li key={item.key} className={classnames('submenu-item')}>
                <a  href={`#${item.key}`} className={classnames('block pv-3 ph-15')}>{item.title}</a>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
