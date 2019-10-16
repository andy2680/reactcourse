import React from 'react';
import './App.scss';
import RecipesHome from "./components/pages/recipes/home";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import RecipeList from "./components/recipe-list";


const App = () =>  <div>
        <Router>
            <Route path="/" exact render={() => <Redirect to="/recipes"/>}/>
            <Route path="/recipes" component={RecipesHome}/>
        </Router>
    </div>
export default App;