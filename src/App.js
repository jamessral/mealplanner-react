import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Ingredients from './Ingredients';
import Recipes from './Recipes';

import './App.css';

const App = () => (
  <div className="lg:container mx-auto">
    <Router>
      <div>
        <header className="App-header">
          <h1 className="bg-purple-darker text-grey-lightest p-6 shadow-lg">
            MealPlanner
          </h1>
        </header>
        <p className="text-base p-6">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
        <div className="m-6 p-6 container">
          <Route exact path="/" component={Home} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/recipes" component={Recipes} />
        </div>
      </div>
    </Router>
  </div>
);

export default App;
