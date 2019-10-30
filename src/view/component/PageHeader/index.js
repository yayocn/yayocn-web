import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';
import { Link } from 'react-router-dom';
import logo from '../../common/image/logo-b.png';

export default class PageHeader extends Component {
  render () {
    return (
      <header className="pt-fixed top-0 w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img className={classnames('')} src={logo} alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/'} replace>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/ricenoodle'} replace>Ricenoodle</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
