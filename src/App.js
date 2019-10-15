import React from 'react';
import './App.scss';
import {dummySuggestions} from "./recipes/dummy-suggestions";
import classNames from "classnames";
import toqueIcon from "./toque.svg";

const App = () =>  <div>
        <section className="hero">
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
            </div>
            </div>
            </div>
        </section>
    <section className="section">
        <div className="container">
            <div className="recipes">
                {

                    dummySuggestions.map(r => {
                            const today = new Date().getTime();
                            const isRecent = today - new Date(r.datePublished).getTime() < 6 * 2592000000;

                            const thumbClasses = classNames('recipe-thumb',{
                                'new': isRecent,
                            });

                        return <div className={thumbClasses} key={r.id}>
                                <img className="picture" src={`http://localhost:5000/images/${r.image}`} alt={r.title}/>
                                <time className="date" dateTime={r.datePublished}>{                          new Intl.DateTimeFormat('en-GB', {
                                    year: 'numeric',
                                    month: 'long'
                                }).format(new Date(r.datePublished))}</time>
                                <div className="recipe-title">{r.title}</div>
                                <div className="info">{r.difficulty}</div>
                                <div className="info">
                                    <div className="torques">
                                        <div className="torques">
                                            {r.difficulty > 0 && [...Array(r.difficulty)].map((_, i) => <img key={i} className="toqueIcon" src={toqueIcon} alt="*"/>)}
                                        </div>
                                    </div>
                                </div>
                                <div></div>

                            </div>;
                        }
                    )
                }
            </div>
        </div>
    </section>
    </div>
export default App;


class Hi extends React.Component {
    render() {
        return <span>Hi {this.props.name}</span>;
    }
}