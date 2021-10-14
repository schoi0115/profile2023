import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import NavBar from './NavBar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

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
          <Route exact path="/page2" >
            <Page2
            />
          </Route>
          <Route exact path="/page3" >
            <Page3 
            />
          </Route>
          <Route exact path="/page4" >
            <Page4 
            />
          </Route>
   
        </Switch>
      </main>
    </div>
  );
}

export default App;
