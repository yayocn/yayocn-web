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
      period: '',
    };
  }

  intervaler = null;

  componentWillMount () {
    this.setTodayInfo();
    this.setCurrentTime();

    this.intervaler = setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervaler);
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
    this.setState({ day, goneDays, leftDays, week, year });
  }

  render () {
    const { time, goneDays, leftDays,  week, year, period } = this.state;

    return (
      <div className="container-fluid gate-wrap flex flex-column">
        <header className={classnames('header')}>
          <div className={classnames('logo-wrapper pt-relative')}>
            <div className={classnames('logo pt-hc')}>
              <img className={classnames('img-fluid w-100')} src={logo} alt=""/>
            </div>
          </div>
          <div className={classnames('row')}>
            <div className="nav-left col-6">
              <ul className="nav text-center row">
                <li className="nav-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <Link className="nav-link block" to='/ricenoodle' replace>Ricenoodle</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="nav">
                <li className="nav-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <Link className="nav-link" to='/' replace>Coming soon</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="container-fluid grow-2">
          <div className="row">
            <div className="col-12 text-white text-center">
              <p className="mt-20 mb-20 time">{ time }</p>
              <p className="week"><span className={classnames('font-2x')}>{ week }</span>th week, <span className={classnames('font-2x')}>{ year }</span>.</p>
              <p className="day"><span className={classnames('font-2x')}>{ goneDays }</span> days have gone, only <span className={classnames('font-3x')}>{ leftDays }</span> days left.</p>
              <p className="greeting mt-50 text-capitalize">good { period }, my friend.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid pv-20">
          <div className="row">
            <div className="col-12 text-center">
              <a href="http://www.beian.miit.gov.cn/" className="text-light font-12">蜀ICP备16016100号</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
