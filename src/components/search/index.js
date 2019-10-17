import React from "react";
import PropTypes from "prop-types";

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.valueChanged = this.valueChanged.bind(this);
    }

    render() {

        return (
            <div className="control has-icons-left">
                <input className="input is-medium is-rounded" placeholder="Search" onChange={this.valueChanged}></input>
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        );
    }

    valueChanged(e) {
        this.props.onSearchChange && this.props.onSearchChange(e.target.value);
    }

};

SearchBox.propTypes = {
    onSearchChange: PropTypes.func,
}

export default SearchBox;