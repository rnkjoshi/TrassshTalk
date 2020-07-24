import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
const App = () => {
    return (
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
          </Switch>
        </HashRouter>
    );
};

export default App;