import React from "react";
import _ from "lodash"

export const withDebounce = (millis) => (WrappedComponent) => {

    return (props) => {
        const {onSearchChange, ...passThroughProps} = props;
        const debouncedHandler = _.debounce(onSearchChange, millis);
        return <WrappedComponent  {...passThroughProps}   onSearchChange={debouncedHandler}  />
    }

};

export default withDebounce;