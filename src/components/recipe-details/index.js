import React from "react";
import "./index.scss"
import axios from "axios";
import IconFied from "../../common/iconfied";
import Time from "../../common/time";
import Fetcher from "../../common/fetcher";
import Rate from "../../common/rate";
import {showSuccess} from "../../common/toast";

class RecipeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false}
        this.source = axios.CancelToken.source();
    }

    loadRecipe() {
        axios.get(`/api/recipes/${this.props.match.params.id}`,{
            cancelToken: this.source.token})
            .then(r => {
                return this.setState({recipe: r.data});
            })
            .then(r => {
                return this.setState({loaded: true});
            })
            .catch(e => console.error("Error fetching a recipe",e));
    }


    componentDidMount() {

    }

    render() {


        return (<Fetcher url={`/api/recipes/${this.props.match.params.id}`}
                         onError={(e)=>console.log(e)}
                         render={({loaded, data})=> {
                             if (!loaded) {
                                 return <p>Loading ...</p>;
                             }
                             const recipe = data;
                             return <div className="recipe">
                                 <div className="picture">
                                     <img className="picture" src={`/images/${recipe.image}`} alt={recipe.title}/>
                                 </div>

                                 <div className="recipe-title">
                                     <div className="title"> {recipe.title} </div>
                                     <div className="description">{recipe.description}</div>
                                     <div className="source"><span className="field">source:</span>{/* source */}</div>
                                     {
                                         recipe.reviews && <Rate onRated={(d) => showSuccess("Thanks", `We registered your ${d.rating}★ rating`)}
                                         rating={recipe.reviews.map(r => r.rate).reduce((a, v) => a + v) / recipe.reviews.length}/>
                                     }
                                 </div>
                                 <div className="bar">
                                     {/* difficulty (as Torques) */}
                                     {/* recipeYield using Iconfied with icons 'fas fa-utensils' */}
                                     <Time time={recipe.prepTime} render={(ft) => <IconFied icon="far fa-clock">{ft}</IconFied>}/>
                                     <Time time={recipe.cookTime} render={(ft) => <IconFied icon="far fa-hourglass">{ft}</IconFied>}/>
                                     (<IconFied icon="far fa-clock">{recipe.prepTime}</IconFied>)
                                     (<IconFied icon="far fa-hourglass">{recipe.cookTime}</IconFied>)
                                 </div>
                                 <div className="ingredients">Ingredients
                                     <div className="content">
                                         {/*  ul with li for each of ingredients (make sure to add a key)*/}
                                         <ul>
                                             {recipe.ingredients.map(i =>
                                                 <li key={i}>{i}</li>
                                             )
                                             }
                                         </ul>
                                     </div>
                                 </div>
                             </div>
                         }}
        />)

    }

};


export default RecipeDetails;