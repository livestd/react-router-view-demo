//import RouterStore, {RouteParams, HookParams, syncHistoryWithStore} from "../router";
import RouterStore, {RouteParams, HookParams, syncHistoryWithStore} from "mobx-react-router-view";

import MainComponent from '../components/main'
import NoMatchComponent from "../components/noMatchPage";
import LoadingComponent from "../components/loading";
import InfoComponent from "../components/info";
import ProfileComponent from "../components/profile";
import InfoIdComponent from "../components/infoId";
import InfoListComponent from "../components/infoList";
import { createBrowserHistory, History } from 'history';
import InfoDetailsComponent from '../components/infoDetails';

export const beforeEach = async (...[from, to, store]: HookParams): Promise<void> => {
    return await new Promise((res) => {res()});
}

export const notFoundRoute: RouteParams = {
    name: '404',
    path: '/404',
    component: NoMatchComponent
}

export const initialRoute: RouteParams = {
    name: 'initial',
    path: '/',
    component: LoadingComponent,
    beforeExit: () => {return new Promise((res) => {setTimeout(res, 1000)})}
}

export const routes: RouteParams[] = [
    {
        name: 'home',
        path: '/',
        component: MainComponent,
        children: [
            {
                name: 'profile',
                path: '/profile',
                component: ProfileComponent
            },
        ]
    },
    {
        name: 'info',
        path: '/info',
        component: InfoComponent,
        children: [
            {
                name: 'infoItem',
                path: '/:id',
                component: InfoIdComponent,
                children: [
                    {
                        name: "infoDetails",
                        path: '/details',
                        component: InfoDetailsComponent
                    }
                ]
            },
            {
                name: 'infoList',
                path: '/list',
                component: InfoListComponent,
            },
        ]
    }
]

export function getRouterStore(): RouterStore {
    return new RouterStore(routes, {
        notFoundRoute: notFoundRoute,
        initialRoute: initialRoute,
        beforeEach: beforeEach
    });
}

export function getRouterHistory(store: RouterStore): History {
    const browserHistory = createBrowserHistory();
    return syncHistoryWithStore(browserHistory, store);
}
