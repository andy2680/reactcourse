import React from "react";
import "./spicy-hero.scss";
import SearchBox from "../../search";

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
                            <SearchBox/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    };
};

export default SpicyHero;