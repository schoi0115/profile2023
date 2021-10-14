import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import NavBar from './NavBar'
import Page1 from './Page1'

function App() {
  return (
    <div className="bgcolor">
      <NavBar />
      <main >
        <Switch >
          <Route exact path="/" >
            <Home 
            />
          </Route>
          <Route exact path="/page1" >
            <Page1 
            />
          </Route>
   
        </Switch>
      </main>
    </div>
  );
}

export default App;
