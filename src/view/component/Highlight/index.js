import React, { Component } from 'react';
import hljs from 'highlight/lib/vendor/highlight.js/highlight';

export default class Highlighter extends Component {
  componentDidMount() {
    // hljs.highlightBlock(this.element)
  }

  render () {
    const { lang = 'xml' } = this.props;
    console.log(hljs)
    return (
      <div>
        <pre ref={ref => { this.element = ref }}>
          <code>
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}