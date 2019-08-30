import React from 'react';
import {getRouterStore} from '../route'
import { ThemeStore } from './ThemeStore';

export class RootStore {
    public routerStore = getRouterStore()
    public themeStore = new ThemeStore(this);

    public reset = () => {
        this.themeStore = new ThemeStore(this);
    };
}

export const rootStore = new RootStore();

export const rootContext = React.createContext(rootStore);
