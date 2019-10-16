import toqueIcon from "./toque.svg";
import React from "react";
import PropTypes from "prop-types";
import "./index.scss"

const Torques = (props) => {

    return <div className="torques">
        <div className="torques">
            {props.difficulty > 0 && [...Array(props.difficulty)].map((_, i) =>
                <img key={i} className="toqueIcon" src={toqueIcon} alt="*"/>)}
        </div>
    </div>;
};

Torques.propType = {
    difficulty : PropTypes.number,
}

export default Torques;