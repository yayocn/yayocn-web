import React, { Component } from 'react';
// import classnames from 'classnames';

export default class Progress extends Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    const { width = '100%', value = '0' } = this.props;

    return (
      <div className="progress-box pt-relative" style={{ width }}>
        <div className="progress-bg pt-absolute pt-center"></div>
        <div className="progress-cur pt-absolute pt-vc" style={{ width: `${value}%`}}></div>
        <span className="progress-dot dot dot-white pt-absolute pt-vc" style={{ left: `${value}%`}}></span>
      </div>
    );
  }
}
