import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { reducers } from './store/reducers';

export const store = createStore(reducers, devToolsEnhancer());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
