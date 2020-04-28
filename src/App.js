import React from 'react';
import './reset.css'
import {Route, Switch} from 'react-router-dom';
import './index.css';
import store from './Redux/store';
import Landing from './Landing';
import Signin from './Signin';
import Register from './Register';
import Header from './Components/Header';
import Home from './Home';
import Study from './Study';
import Vocab from './Vocab';


const App = () => {

render() 
  return(
    <div className="App">
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/Signin" component={Signin}/>
        <Route path="/Register" component={Register}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Study" component={Study}/>
        <Route path="/Vocab" component={Vocab}/>
      </Switch>
  </Router>
    </div>
  )
};

export default App;