import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css'
import App from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
