import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import logo from '../common/image/logo-w.png';

dayjs.extend(weekOfYear);

export default class Gate extends Component {
  constructor (props) {
    super(props);

    this.state = {
      time: '',
      day: '',
      goneDays: '',
      leftDays: '',
      week: '',
      year: '',
      period: ''
    };
  }

  componentWillMount () {
    this.setTodayInfo();
    this.setCurrentTime();

    setInterval(() => {
      this.setCurrentTime();
    }, 10000);
  }

  setCurrentTime () {
    const moment = dayjs();
    const time = moment.format('HH:mm');
    const day = moment.day();

    if (day !== this.state.day) {
      this.setTodayInfo();
    }

    if (time !== this.state.time) {
      const period = moment.format('a') === 'am' ? 'morning' : 'afternoon';
      this.setState({ time, period });
    }
  }

  setTodayInfo () {
    const moment = dayjs();
    const day = moment.day();
    const week = moment.week();
    const year = moment.format('YYYY');
    const goneDays = Math.ceil(( new Date() - new Date(new Date().getFullYear().toString()))/(24*60*60*1000))+1;
    const leftDays = Math.abs(moment.diff(`${year}-12-31`, 'day'));
    this.setState({ day, goneDays, leftDays, week: `${week}th`, year });
  }

  render () {
    const { time, goneDays, leftDays,  week, year, period } = this.state;

    return (
      <div className="gate-wrap">
        <header className={classnames('flex flex-column', 'header')}>
          <div className={classnames('flex-grow-2 pt-relative')}>
            <div className={classnames('logo pt-absolute pt-hc left-0 right-0 bottom-20')}>
              <img className={classnames('img-fluid w-100')} src={logo} alt=""/>
            </div>
          </div>
          <div className={classnames('p-20 flex justify-content-center align-items-end')}>
            <div className="nav-left font-3x w-50">
              <ul className="nav flex-row-reverse">
                <li className="nav-item">
                  <Link className="nav-link" to='/ricenoodle' replace>Ricenoodle</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right font-3x w-50">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/' replace>Coming soon</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-white text-center">
              <p className="mt-0 mb-0 font-300" style={{ fontSize: '1200%'}}>{ time }</p>
              <p className="mt-0 font-20 font-100 pt-relative" style={{ top: '-40px' }}>{ week } week, { year }.</p>
              <p className="mt-0 font-20 font-100 pt-relative" style={{ top: '-40px' }}>{ goneDays } days have gone, only { leftDays } days left.</p>
              <p className="mt-0 mb-0 font-5x font-300 text-capitalize pt-relative" style={{ top: '-40px' }}>good { period }, my friend.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
