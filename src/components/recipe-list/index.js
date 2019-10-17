import React from "react";
import "./index.scss";
import RecipeThumb from "../../common/recipe-thumb";
import PropTypes from "prop-types";
import Fetcher from "../../common/fetcher";

export function RecipeList(props) {
    return (<Fetcher url="/api/recipes"
                     params={{
                         'sort': 'datePublished',
                         'titlePattern': props.filter,
                     }}
                     render={({data}) => <div className="recipes">
                         {data && data.map(r => {
                             return <RecipeThumb key={r.id} recipe={r}/>
                         })}
                     </div>}
    />)
};

RecipeList.propTypes = {
    filter: PropTypes.string,
};

export default RecipeList;