import React, {useContext, useEffect} from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { Switch, Route } from 'react-router'
import MainComponent from './components/main'
import ProfileComponent from './components/profile'
import InfoComponent from './components/info'
import InfoIdComponent from './components/infoId'
import InfoListComponent from "./components/infoList";
import {rootContext} from "./stores";
import {Counter} from "./components/Counter";
import {action, observable} from "mobx";
import NoMatchComponent from "./components/noMatchPage";

class TestInterval{
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
  const { location, push, goBack } = routerStore
  return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <Counter/><Echo int={TState}/>
        <div>
          <button onClick={() => push('/')}>Main</button>
          <button onClick={() => push({pathname: '/profile', state: TState})}>Profile</button>
          <button onClick={() => push('/other')}>Other</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <div>
          <button onClick={() => push('/info')}>Info</button>
          <button onClick={() => push('/info/list')}>InfoList</button>
          <button onClick={() => push({pathname: '/info/1', state: {t: "test"}})}>Info 1</button>
        </div>
        <Switch>
          <Route exact path='/' component={MainComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
          <Route exact path='/info' component={InfoComponent}/>
          <Route exact path='/info/list' component={InfoListComponent}/>
          <Route path='/info/:n' component={InfoIdComponent}/>
          <Route component={NoMatchComponent} />
        </Switch>
      </div>
  );
})

export default App;
