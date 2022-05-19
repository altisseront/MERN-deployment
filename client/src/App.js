import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import ShowAllAnimals from './components/ShowAllAnimals';
import ShowOneAnimal from './components/ShowOneAnimal';
import CreateAnimal from './components/CreateAnimal';
import EditAnimal from './components/EditAnimal';
function App() {
  return (
    <BrowserRouter>
    <div className="container text-left">
      <h1>Pet Shelter</h1>
      <Switch>
      <Route exact path="/">
        <ShowAllAnimals></ShowAllAnimals>
      </Route>
      <Route exact path="/show/:id">
        <ShowOneAnimal></ShowOneAnimal>
      </Route>
      <Route exact path="/create">
        <CreateAnimal></CreateAnimal>
      </Route>
      <Route exact path="/edit/:id">
        <EditAnimal></EditAnimal>
      </Route>






      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
