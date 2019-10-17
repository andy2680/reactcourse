import React from "react"
import {Route} from "react-router-dom";
import AddRecipeForm from "../../add-recipe";

const UserHome = ({match}) => {
    return (<div>
        (<Route path={`${match.url}/add-recipe`}
                component={AddRecipeForm}/>)
    </div>)
};

export default UserHome;