// Import React-related modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import application-specific modules
// CSS imports
import '../css/main.scss';

// JavaScript imports
import App from './components/App';
import store from './store';

// Render the application
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
