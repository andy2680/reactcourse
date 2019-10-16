import React from "react";
import Proptypes from "prop-types";

const DateFormat = (props) => {
    return <time className="date" dateTime={props.date}>{new Intl.DateTimeFormat(props.locale, {
        year: 'numeric',
        month: 'long'
    }).format(new Date(props.date))}</time>;
};

DateFormat.propType = {
    date: Proptypes.string.isRequired,
    locale: Proptypes.string,
};

DateFormat.defaultProps = {
    locale: "de-DE"
};
export default DateFormat;