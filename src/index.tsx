import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { rootStore } from "./stores";
import './index.css';
import App from './App';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routerStore);

ReactDOM.render(
    <Provider {...rootStore}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
