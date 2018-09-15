import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './containers/MainApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
