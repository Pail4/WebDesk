import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { mainStore } from './store/reducers';

export const store = createStore(mainStore, devToolsEnhancer());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
