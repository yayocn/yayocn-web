import React, { Component } from 'react';
import classnames from 'classnames';
import copyText2Clipboard from 'copy-text-to-clipboard';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default class Highlighter extends Component {
  componentDidMount() {
    hljs.highlightBlock(this.pre);
    console.log(hljs)
  }

  copyHandler = () => {
    if (copyText2Clipboard(this.props.children)) {

    } else {

    }
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
        <textarea className="hidden" defaultValue={this.props.children}></textarea>
        <button className="btn btn-sm btn-dark pt-absolute" style={{ top: '-1px', right: '-1px',}} onClick={this.copyHandler}>复制</button>
      </div>
    );
  }
}