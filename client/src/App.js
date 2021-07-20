import React from 'react';
import { Counter } from './features/counter/Counter';
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

          <Route path="/signin" >
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
