import React from "react";
import SpicyHero from "../../../components/layout/hero"
import RecipeList from "../../../components/recipe-list";
import {Route} from "react-router-dom";
import RecipeDetails from "../../recipe-details";

class RecipesHome extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    searchValueChange = (v) => this.setState({searchValue:v});


    render()  {
        return (
            <div>
                <SpicyHero onSearchChange={this.searchValueChange}/>
                <section className="section">
                    <div className="container">
                        <Route path={`${this.props.match.url}`} exact strict={true} render={() => <RecipeList filter={this.state.searchValue}/>} />
                        <Route path={`${this.props.match.url}/:id`} component={RecipeDetails}/>
                    </div>
                </section>
            </div>
        );

    }
}

export default RecipesHome;