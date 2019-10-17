import React, {Component} from "react";
import PropTypes from "prop-types";

const Field = ({forId, label, children, msg}) => (
    <div className="field">
        <label className="label" htmlFor={forId}>{label}</label>
        <div className="control">
            {children}
        </div>
        <p className="message help is-danger">{msg}</p>
    </div>
);

export default Field;

Field.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    forId: PropTypes.string.isRequired,
}