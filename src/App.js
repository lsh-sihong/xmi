import React from 'react';
import Home from './container/Home/Home'
import Login from './container/Login/Login'
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>

        </Switch>
        
      </Router>

    </Provider>
  );
}

export default App;
