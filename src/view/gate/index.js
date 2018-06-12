import React, { Component, Fragment } from 'react';
import style from './index.scss';

export default class Gate extends Component {
  render () {
    return (
      <div className={style.wrap}>
        <header className="p-20 flex justify-content-center align-items-end">
          <div className="nav-left font-2x mr-50">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/ricenoodle">Ricenoodle</a>
              </li>
            </ul>
          </div>
          <div className={style.logo}>
            <p className="pt-center text-center">LOGO</p>
          </div>
          <div className="nav-left font-2x ml-50">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link">It's me</a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
