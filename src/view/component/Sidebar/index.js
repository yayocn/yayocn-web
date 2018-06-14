import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import style from './style.scss';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
  }

  // BEGIN: Util
  //



  //
  // END: Util

  render () {
    const { menu = [] } = this.props;
    console.log(this)
    return (
      <div className={style.sidebar}>
        <ul>
          {
            menu.map((item, index) => {
              return <li key={index} className={classnames('text-muted font-16 mb-20', style['sidebar-item'])}>
                <a href={item.link} className={classnames('block', style['sidebar-item'])}>
                  {item.title}
                </a>

                {
                  item.children && item.children.length > 0 &&
                    <Fragment>
                      <ul className="pl-20 pv-10">
                        {
                          item.children.map((item, index) => {
                            return <li key={index} className={classnames('text-muted font-14 mb-5', style['sidebar-item'])}>
                              <a href={item.link} className={classnames('block', style['sidebar-item'])}>
                                {item.title}
                              </a>
                            </li>
                          })
                        }
                      </ul>
                    </Fragment>
                }
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
