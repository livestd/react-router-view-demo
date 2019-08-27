import React from 'react';
import { RouterStore } from 'mobx-react-router';
import { ThemeStore } from './ThemeStore';

export class RootStore {
    public routerStore = new RouterStore();
    public themeStore = new ThemeStore(this);

    public reset = () => {
        this.routerStore = new RouterStore();
        this.themeStore = new ThemeStore(this);
    };
}

export const rootStore = new RootStore();

export const rootContext = React.createContext(rootStore);
