import React, { Component } from 'react';
import Navbar from '../Navbar';

export default class PageHeader extends Component {
  render () {
    return (
      <header className="pt-fixed pt-top w-100">
        <Navbar />
      </header>
    );
  }
}
