import React, { Component, Fragment } from 'react';
import style from './style.scss';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { menu } = this.props;
    return (
      <div className={style.sidebar}>
        <ul className="">
          {
            menu.map((item, index) => {
              return <li key={index} className={style['sidebar-item']}>
                {
                  item.children && item.children.length > 0
                    ? <Fragment>

                  </Fragment>
                    : <a href={item.link} className={style['sidebar-title']}>
                    {item.title}
                  </a>
                }
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
