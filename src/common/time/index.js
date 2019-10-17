import PropTypes from "prop-types";
import React from "react";

const Time  = ({time,render}) => {

    const ft = time ? time.replace(/PT/, "").toLowerCase() : '';

    return <div>{time && render(ft)}</div>
};

export default Time;

Time.propTypes = {
    time: PropTypes.string,
    render: PropTypes.func
};