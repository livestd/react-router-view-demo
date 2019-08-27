import { observable, action } from 'mobx';
import { RootStore } from '../RootStore';

export class Store<State> {
    @observable
    public state: State;

    constructor(protected rootStore: RootStore, state?: State, restore?: string) {
        if (restore) {
            const cached = this.restoreStore(restore);
            if (cached) {
                this.state = cached;
                return;
            }
        }
        this.state = state || ({} as State);
    }

    restoreStore(name: string) {
        const data = ''// getValue(name);
        if (!data || data === '') return null;
        return JSON.parse(data) as State;
    }

    @action
    setState(data: any) {
        this.state = {
            ...this.state,
            ...data
        };
    }
}
