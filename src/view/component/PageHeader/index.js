import React, { Component } from 'react';

export default class PageHeader extends Component {
  render () {
    return (
      <header className="pt-fixed pt-top w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">LOGO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ricenoodle">Ricenoodle</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
