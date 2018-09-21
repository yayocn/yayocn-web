import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

export default class Gate extends Component {
  constructor (props) {
    super(props);

    this.state = {
      time: '',
      week: '',
      year: '',
      period: ''
    };
  }

  componentWillMount () {
    this.setCurrentTime();

    setInterval(() => {
      this.setCurrentTime();
    }, 10000);
  }

  setCurrentTime () {
    const monent = dayjs();
    const time = monent.format('HH:mm');
    const week = monent.week();
    const year = monent.format('YYYY');
    const period = monent.format('a') === 'am' ? 'morning' : 'afternoon';
    this.setState({ time, week: `${week}th`, year, period });
  }

  render () {
    const { time, week, year, period } = this.state;

    return (
      <div className="gate-wrap">
        <header className={classnames('p-20 flex justify-content-center align-items-end', 'header')}>
          <div className="nav-left font-3x w-50">
            <ul className="nav flex-row-reverse">
              <li className="nav-item">
                <a className="nav-link" href="/ricenoodle">Ricenoodle</a>
              </li>
            </ul>
          </div>
          <div className="nav-right font-3x w-50">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/aboutme">It's me</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-white text-center">
              <p className="mt-0 mb-0 font-300" style={{ fontSize: '1200%'}}>{ time }</p>
              <p className="mt-0 font-20 font-100 pt-relative" style={{ top: '-40px' }}>{ week } week of { year}</p>
              <p className="mt-0 mb-0 font-5x font-300 text-capitalize pt-relative" style={{ top: '-40px' }}>good { period }, my friend.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
