import {AxiosInstance as axios} from "axios";

export const RECIPE_SEARCH = 'RECIPE_SEARCH';
export const RECIPES_FETCH_DATA = 'RECIPES_FETCH_DATA';
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS';
export const RECIPES_FETCH_FAILURE = 'RECIPES_FETCH_FAILURE';

export const searchRecipes = titlePattern => ({
    type: RECIPE_SEARCH,
    payload: titlePattern,
});

export const recipesFetchData = () =>
    (dispatch) => {
        dispatch({
            type: RECIPES_FETCH_DATA,
        })
        axios.get('/api/recipes', {
            params: {
                'sort': 'datePublished',
            },
        }).then((r) => dispatch({
            type: RECIPES_FETCH_SUCCESS,
            payload: r.data,

        })).catch(e => dispatch({
             type: RECIPES_FETCH_FAILURE,
             payload: e,
             error: true,
        }))
};


