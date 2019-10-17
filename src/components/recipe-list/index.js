import React from "react";
import "./index.scss";
import RecipeThumb from "../../common/recipe-thumb";
import PropTypes from "prop-types";
import connect from "react-redux/lib/connect/connect";
import {recipesFetchData} from "../../actions/recipe-actions";
import {showError} from "../../common/toast";


class RecipeList extends React.Component {


    componentDidMount() {
        recipesFetchData()
    }


    render() {
        this.props.error && this.props.error.message && showError(this.props.error.message)
        return <div className="recipes">
            {
                this.props.data && this.props.data.map(r => {
                return <RecipeThumb key={r.id} recipe={r}/>
            })}
        </div>
    }

    /*return (<Fetcher url="/api/recipes"
                     params={{
                         'sort': 'datePublished',
                         'titlePattern': props.filter,
                     }}
                     render={({data}) => <div className="recipes">
                         {data && data.map(r => {
                             return <RecipeThumb key={r.id} recipe={r}/>
                         })}
                     </div>}
    />)*/
};

RecipeList.propTypes = {
    filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
    data: state.recipes.recipes,
    error: state.recipes.error
})

const mapDispatchToProps = (dispatch) => ({
    recipesFetchData: () => dispatch(recipesFetchData())
})

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);