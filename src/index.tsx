import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import { rootStore } from "./stores";
import {getRouterHistory} from "./route"
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider {...rootStore}>
        <Router history={getRouterHistory(rootStore.routerStore)}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
