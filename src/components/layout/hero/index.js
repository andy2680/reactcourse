import React from "react";
import "./spicy-hero.scss";
import SearchBox from "../../search";
import PropTypes from "prop-types";
import {withDebounce} from "../../../common/hoc/debounce";

const DebouncedSearchBox =  withDebounce(400)(SearchBox);

class SpicyHero extends React.Component {

    render() {
        return <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="level">
                        <div className="level-left">
                            <h1 className="title">
                                Spicy React
                            </h1>
                            <h2 className="subtitle">
                                &nbsp;The most reactive place for your recipes
                            </h2>
                        </div>
                        <div className="level-right">
                            <DebouncedSearchBox onSearchChange={this.props.onSearchChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    };
};

SpicyHero.propTypes = {
    onSearchChange: PropTypes.func,
};

export default SpicyHero;