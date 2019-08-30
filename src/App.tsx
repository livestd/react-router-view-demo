import React, {useContext} from 'react';
import './App.css';
import { observer } from 'mobx-react';
import {rootContext} from "./stores";
import {Counter} from "./components/Counter";
import {action, observable} from "mobx";
import { RouterView } from './route';

export class TestInterval{
  @observable
  public count: number
  public id: any
  constructor(private initialValue: number = 0) {
    this.count = initialValue
    this.id = setInterval((t) => t.inc(), 1000, this)
  }
  @action
  public inc() {
    this.count = this.count + 1
  }
}

const TState = new TestInterval()
const Echo = observer((props: {int: TestInterval}) => {
  return <>{props.int.count}</>
})

const App = observer(() => {
  const { routerStore } = useContext(rootContext)
  const { actualRoute, push, goBack, goTo } = routerStore
  return (
      <div>
        <span>Current pathname: {actualRoute.params.name} - {actualRoute.location.pathname} - {actualRoute.fullPath}</span>
        <Counter/><Echo int={TState}/>
          {/*<div>
          <button onClick={() => push('/')}>Main</button>
          <button onClick={() => push({pathname: '/profile', state: TState})}>Profile</button>
          <button onClick={() => push('/other')}>Other</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <div>
          <button onClick={() => push('/info')}>Info</button>
          <button onClick={() => push('/info/list')}>InfoList</button>
          <button onClick={() => push({pathname: '/info/1', state: {t: "test"}})}>Info 1</button>
        </div>*/}
          <div>
              <button onClick={() => goTo('home')}>Main</button>
              <button onClick={() => goTo('profile', TState)}>Profile</button>
              <button onClick={() => push('/other')}>Other</button>
              <button onClick={() => goBack()}>Go Back</button>
          </div>
          <div>
              <button onClick={() => push('/info')}>Info</button>
              <button onClick={() => push('/info/list')}>InfoList</button>
              <button onClick={() => push({pathname: '/info/1', state: {t: "test"}, search: '', hash: '', key: ''})}>Info 1</button>
              <button onClick={() => push({pathname: '/info/1/details', state: {t: "test"}, search: '', hash: '', key: ''})}>Info 1 details</button>
          </div>
          <RouterView store={routerStore}/>
      </div>
  );
})

export default App;
