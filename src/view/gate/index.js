import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/advancedFormat';

dayjs.extend(weekOfYear);

export default class Gate extends Component {
  constructor (props) {
    super(props);

    this.state = {
      time: '',
      week: '',
      year: '',
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
    const week = monent.format('wo');
    const year = monent.format('YYYY');
    this.setState({ time, week, year });
  }

  render () {
    const { time, week, year } = this.state;

    return (
      <div className="wrap">
        <header className={classnames('p-20 flex justify-content-center align-items-end', 'header')}>
          <div className="nav-left font-2x w-50">
            <ul className="nav flex-row-reverse">
              <li className="nav-item">
                <a className="nav-link" href="/ricenoodle">Ricenoodle</a>
              </li>
            </ul>
          </div>
          <div className="nav-right font-2x w-50">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link">It's me</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-white text-center">
              <p className="mt-50 mb-0 font-10x font-500">{ time }</p>
              <p className="mt-0 font-2x font-100">{ week } week of { year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
