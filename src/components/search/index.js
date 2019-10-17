import React from "react";
import PropTypes from "prop-types";
import {searchRecipes} from "../../actions/recipe-actions";
import connect from "react-redux/lib/connect/connect";
import _ from "lodash"



class SearchBox extends React.Component {

    searchValueRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {};
        this.valueChanged = this.valueChanged.bind(this);
        this.valueChanged = _.debounce(this.valueChanged, 400);

    }

    render() {

        return (
            <div className="control has-icons-left">
                <input className="input is-medium is-rounded"
                       ref={this.searchValueRef}
                       placeholder="Search"
                       onChange={this.valueChanged}></input>
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        );
    }

    valueChanged(e) {
        this.props.searchRecipes(this.searchValueRef.current.value)
    }

};

const mapDispatchToProps = dispatch => {
    return {
        searchRecipes: titlePattern => dispatch(searchRecipes(titlePattern))
    };
};

SearchBox.propTypes = {
    onSearchChange: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(SearchBox);
