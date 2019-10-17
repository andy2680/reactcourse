import recipeReducer from "./recipe-reducer";
import {combineReducers} from "redux";

export default combineReducers({
    recipes: recipeReducer
})

