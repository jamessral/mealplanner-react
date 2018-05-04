import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

const Home = () => (
  <div>
    MealPlanner
  </div>
);

const Ingredients = () => (
  <div>
    Ingredients
  </div>
);

const Recipes = () => (
  <div>
    Recipes
  </div>
);

const App = () => (
  <Router>
    <div className="text-center">
      <header className="App-header">
        <h1 className="bg-purple-darker m-6 p-6 rounded shadow-lg">MealPlanner</h1>
      </header>
      <p className="text-base">
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

      <Route exact path="/" component={Home} />
      <Route path="/ingredients" component={Ingredients} />
      <Route path="/recipes" component={Recipes} />
    </div>
  </Router>
);

export default App;
