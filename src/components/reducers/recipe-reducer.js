import {dummySuggestions} from "../../recipes/dummy-suggestions";
import {
    RECIPE_SEARCH,
    RECIPES_FETCH_DATA,
    RECIPES_FETCH_FAILURE,
    RECIPES_FETCH_SUCCESS
} from "../../actions/recipe-actions";

const initialState = {
    recipes: dummySuggestions
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case RECIPE_SEARCH:
        return {
            ... state,
            recipes: initialState.recipes.filter(r => r.title.toLowerCase().includes(action.payload.toLowerCase())) }
        case RECIPES_FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case RECIPES_FETCH_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                isLoading: false,

            };
        case RECIPES_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }

}


export default (state, action) => reducer(initialState,action);