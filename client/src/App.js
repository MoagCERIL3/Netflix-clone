import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
         
          <Route path="/browse" >
            <HomeScreen/>
          </Route>

          <Route path="/signup" >
            <SignUp/>
          </Route>

          <Route path="/" >
            <Login/>
          </Route>
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
