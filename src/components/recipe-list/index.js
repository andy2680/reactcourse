import React from "react";
import "./index.scss";
import RecipeThumb from "../../common/recipe-thumb";
import axios from "axios";
import PropTypes from "prop-types";

class RecipeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
        this.source = axios.CancelToken.source();
    }

    loadRecipes() {
        axios.get("/api/recipes", {
            params: {'sort': 'datePublished', 'titlePattern':this.props.filter},

            cancelToken: this.source.token,
        })
            .then(r => {
                return this.setState({recipes: r.data});
            })
            .catch(e => console.error("Error fetching recipes",e));
    }

    componentDidMount() {
        this.loadRecipes();
    }

    componentWillUnmount() {
        this.source.cancel();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.filter !== prevProps.filter) {
            this.loadRecipes()
        }
    }

    render() {

        return (
            <section className="section">
                <div className="recipes">
                    {this.state.recipes.map(r =>
                        <RecipeThumb recipe={r} key={r.id}/>
                    )
                    }
                </div>
        </section>
        );
    }

};

RecipeList.propTypes = {
    filter: PropTypes.string,
};

export default RecipeList;