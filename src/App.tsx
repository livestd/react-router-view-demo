import React, {useContext} from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { Switch, Route } from 'react-router'
import MainComponent from './components/main'
import ProfileComponent from './components/profile'
import InfoComponent from './components/info'
import InfoIdComponent from './components/infoId'
import InfoListComponent from "./components/infoList";
import {rootContext} from "./stores";

const App = observer(() => {
  const {routerStore, themeStore} = useContext(rootContext)
  const { location, push, goBack } = routerStore

  return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <div>
          <button onClick={() => push('/')}>Main</button>
          <button onClick={() => push('/profile')}>Profile</button>
          <button onClick={() => push('/other')}>Other</button>
          <button onClick={() => push('/profile', {asd: "qwe"})}>With rpops</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <div>
          <button onClick={() => push('/info')}>Info</button>
          <button onClick={() => push('/info/list')}>InfoList</button>
          <button onClick={() => push('/info/1', {t: "test"})}>Info 1</button>
        </div>
        <Switch>
          <Route exact path='/' component={MainComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
          <Route exact path='/info' component={InfoComponent}/>
          <Route exact path='/info/list' component={InfoListComponent}/>
          <Route path='/info/:n' component={InfoIdComponent}/>
        </Switch>
      </div>
  );
})

export default App;
