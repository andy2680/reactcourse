import React from 'react';
import './App.scss';
import RecipesHome from "./components/pages/recipes/home";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import UserHome from "./components/pages/user-home";
import {NavBar} from "./components/layout/nav-bar";



const App = () =>  <div>
        <Router>
            <Router component={NavBar}/>
            <Route path="/" render={RemoveTrailingSlash}/>
            <Route path="/" exact render={() => <Redirect to="/recipes"/>}/>
            <Route path="/recipes" component={RecipesHome}/>
            <Route path="/users" component={UserHome}/>
        </Router>
    </div>

const RemoveTrailingSlash = ({location}) => {
    const {pathname} = location;

    if (pathname.endsWith('/')) {
        return <Redirect to={pathname.substr(0, pathname.length - 1)}/>;
    } else {
        return null;
    }
};



export default App;