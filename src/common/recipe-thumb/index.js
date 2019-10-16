import React from "react";
import * as PropTypes from "prop-types";
import "./index.scss"
import classNames from "classnames";
import DateFormat from "../util/date-format";
import Torques from "../torques";
import IconFied from "../iconfied";

const RecipeThumb = ({recipe}) =>  {
            const today = new Date().getTime();
            const isRecent = today - new Date(recipe.datePublished).getTime() < 6 * 2592000000;

            const thumbClasses = classNames('recipe-thumb',{
                'new': isRecent,
            });

            return <div className={thumbClasses} key={recipe.id}>
                <img className="picture" src={`/images/${recipe.image}`} alt={recipe.title}/>
                <DateFormat date={recipe.datePublished}/>
                <div className="recipe-title">{recipe.title}</div>

                <div className="info">
                    <Torques difficulty={recipe.difficulty}/>
                    <IconFied icon="fas fa-user-edit">
                        <span>{recipe.author}</span>
                    </IconFied>
                </div>
            </div>;
        }



RecipeThumb.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        image: PropTypes.string,
        datePublished: PropTypes.string,
        difficulty: PropTypes.number,
        author: PropTypes.string,
    })
};


export default RecipeThumb;