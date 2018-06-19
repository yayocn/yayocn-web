import React, { Component } from 'react';
import classnames from 'classnames';
import { hljs } from 'highlight/lib/vendor/highlight.js/highlight';
import xml from 'highlight/lib/vendor/highlight.js/languages/xml';
import css from 'highlight/lib/vendor/highlight.js/languages/css';
import js from 'highlight/lib/vendor/highlight.js/languages/javascript';
import 'highlight/lib/vendor/highlight.js/styles/github.css';

const exec = {
  xml,
  css,
  js,
}

export default class Highlighter extends Component {
  componentDidMount() {
    const { lang = 'xml' } = this.props;
    exec[lang](hljs);
    hljs.highlightBlock(this.pre, ' ', true);
  }

  copyHandler = () => {

  }

  render () {
    const { className } = this.props;

    return (
      <div className="pt-relative border">
        <pre className={classnames('p-20 m-0', className)} ref={ref => { this.pre = ref }}>
          <code className="html border-0 bg-transparent">
            {this.props.children}
          </code>
        </pre>
        <textarea className="hidden" defaultValue={this.props.children} ref={ref => { this.code = ref }}></textarea>
        <button className="btn btn-sm btn-dark pt-absolute" style={{ top: '-1px', right: '-1px',}} onClick={this.copyHandler}>复制</button>
      </div>
    );
  }
}