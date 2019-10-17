import PropTypes from "prop-types";
import React from 'react';
import $ from "jquery"
window.jQuery = $;
require("rateyo");


class Rate extends React.PureComponent {

    rateYo = React.createRef();

    componentDidMount() {
        this.$rateYo = $(this.rateYo.current);
        this.$rateYo.rateYo({
            numStars: 5,
            starWidth: "16px",
            halfStar: true,
        });
        this.$rateYo.rateYo("option", "rating");
        this.$rateYo.rateYo().on("rateyo.set", this.handleSetRating);
    }

    componentWillUnmount() {
        this.$rateYo.rateYo().off("rateyo.set", this.handleSetRating);
        this.$rateYo.rateYo("destroy");
    }

    handleSetRating = (_, d) => {this.props.onRated && this.props.onRated(d) };

    render() {
        return (<div ref={this.rateYo}>{this.props.rating}</div>);
    }
}
export default Rate;

Rate.propTypes = {
    rating: PropTypes.number,
    onRated: PropTypes.func,
}
