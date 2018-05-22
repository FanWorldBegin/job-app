import React from 'react';
import ReactDOM from 'react-dom';
//import ReduxExample from './redux/index.js';
import ReduxExample from './redux-axios/index.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReduxExample/>, document.getElementById('root'));
registerServiceWorker();
