import React, { Component } from 'react';
// import { Link } from 'react-dom';
import './index.scss';

export default class Gate extends Component {
  render () {
    return (
      <header className="p-20 flex justify-content-center align-items-end">
        <div className="nav-left font-20 mr-50">
          <ul className="nav">
            {/*<Link to="/ricenoodle" className="nav-item">Ricenoodle</Link>*/}
          </ul>
        </div>
        <div className="logo border">
          <p className="pt-center text-center">LOGO</p>
        </div>
        <div className="nav-left font-20 ml-50">
          <ul className="nav">
            {/*<Link to="/" className="nav-item">It's me</Link>*/}
          </ul>
        </div>
      </header>
    );
  }
}
