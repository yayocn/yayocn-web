import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/ricenoodle/dist/css/ricenoodle.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
