import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import copyText2Clipboard from 'copy-text-to-clipboard';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default class Highlighter extends Component {
  componentDidMount() {
    hljs.configure({
      languages: ['xml', 'javascript', 'css']
    });

    hljs.highlightBlock(this.pre);
  }

  copyHandler = () => {
    if (copyText2Clipboard(this.props.children)) {

    } else {

    }
  }

  render () {
    const { className, copyBtn = true } = this.props;

    return (
      <div className="pt-relative border">
        <pre className={classnames('p-20 m-0', className)} ref={ref => { this.pre = ref }}>
          <code>
            {this.props.children}
          </code>
        </pre>
        {
          copyBtn && <Fragment>
            <textarea className="hidden" defaultValue={this.props.children}></textarea>
            <button className="btn btn-sm btn-dark pt-absolute" style={{ top: '-1px', right: '-1px',}} onClick={this.copyHandler}>复制</button>
          </Fragment>
        }
      </div>
    );
  }
}