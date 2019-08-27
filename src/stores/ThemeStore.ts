import { action } from 'mobx';
import { SyntheticEvent } from 'react';
import { RootStore } from './RootStore';
import { Store } from './base/Store';

interface ContentState {
    selectedItem?: any;
}

export class ThemeStore extends Store<ContentState> {
    public constructor(rootStore: RootStore) {
        super(rootStore, { selectedItem: null });
    }

    @action
    public openContent(path: string, props?: object, e?: SyntheticEvent) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.setState({ selectedItem: props });
        this.rootStore.routerStore.push('path', props)
    }
}
