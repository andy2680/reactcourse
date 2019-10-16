import React from "react";
import PropTypes from "prop-types";
import "./index.scss"

const IconFied = (props) => {
    return   <div className="iconfied">
        <i className={props.icon}></i>
        {props.children}
    </div>

};

IconFied.protoType = {
    icon : PropTypes.string,
    children : PropTypes.node,
}


export default IconFied;