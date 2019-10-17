import React, {Component} from "react";
import "./index.scss"
import {NavLink} from "react-router-dom";
import classNames from "classnames";

export class NavBar extends Component {

    state = {isOpen: false};

    toggleMenu = (e) => {
        this.setState(s => {
            return {isOpen: !s.isOpen};
        })
    };

    closeMenu = (e) => {
        this.setState(s => {
            return {isOpen: false};
        })
    };

    burgerBtnClass = classNames({
        'navbar-burger': true,
        'burger': true,
        'is-active': this.state.isOpen

    });

    navbarMenuClass = classNames('navbar-menu', {
        'is-active': this.state.isOpen
    });

    render() {
        return <nav className="navbar ">
            <div className="navbar-brand">
                {/*Link to /recipes*/}
                <NavLink to='/recipes' activeClassName="is-current" className='navbar-item'>Recipes</NavLink>

                <a role="button" className="navbar-burger burger"
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="main-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {/*Link to /users/add-recipe*/}
                    <NavLink to='/users/add-recipe' activeClassName="is-current" className='navbar-item'>Add</NavLink>
                </div>
            </div>

        </nav>;
    }
}