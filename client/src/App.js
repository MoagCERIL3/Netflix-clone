import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" >
            <Login/>
          </Route>
          <Route path="/browse" >
            <HomeScreen/>
          </Route>
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
