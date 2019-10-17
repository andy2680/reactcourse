import React, {Component} from 'react';
import "./index.scss"
import _ from 'lodash'
import Field from "../field";
import axios from "axios/index"
import {timeStrToISODuration} from "../../common/converters";
import {showError, showSuccess} from "../../common/toast";


class AddRecipeForm extends Component {

    state = {
        title: '',
        description: '',
        difficulty: 3,
        cuisine: 'european',
        recipeYield: '4 Servings',
        _cookTime: '01:30',
        _prepTime: '00:30',
        _ingredients: '',
    };

    fileInputRef = React.createRef();

    static checkRequiredFields(e) {
        const f = e.target;
        return Array.from(f.elements)
            .filter(e => !e.validity.valid)
            .map(e => {
                return {[e.id + 'Msg']: e.dataset.msg || "this field is required"}
            })
            .reduce((obj, e) => Object.assign(obj, e), {});
    }

    handleSubmit = (e, axios = null) => {
        e.preventDefault();
        const invalids = AddRecipeForm.checkRequiredFields(e);

        if (!_.isEmpty(invalids)) {
            this.setState(invalids);
        } else {
            const postData = this.stateToPostData();

            axios.post('/api/recipes', postData).then((r) => {
                return this.uploadImage(r);
            }).then((id) => {
                showSuccess("Added!", "Recipe has been added and waiting for approval")
                this.props.history.push(`/recipes/${id}`)
            }).catch(e => {
                console.error(e);
                showError((e.response && e.response.data && e.response.data.error && e.response.data.error.required &&
                    `missing values for ${e.response.data.error.required}`) || e.message)
            })
        }

    };

    uploadImage({headers, data: recipeData}) /*: Promise<string>  */ {
        const formdata = new FormData();
        formdata.append('image', this.fileInputRef.current.files[0]);
        const contentUrl = headers['content-url'];
        const promise = axios.put(contentUrl, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
        return promise.then(() => recipeData.id);
    }

    stateToPostData = () => {
        const cookTime = timeStrToISODuration(this.state._cookTime);
        const prepTime = timeStrToISODuration(this.state._prepTime);
        const ingredients = this.state._ingredients.split("\n");
        const author = 'Artie Bucco';
        const {title, description, difficulty, cuisine, recipeYield} = this.state;
        return {title, description, difficulty, cuisine, recipeYield, cookTime, prepTime, ingredients, author};
    };

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter add-recipe-form">
                            <form onSubmit={this.handleSubmit} noValidate>
                                <Field forId="title" msg={this.state.titleMsg} label="Title">
                                    <input className="input" type="text" id="title" name="title" required
                                           data-msg="the title is required" onChange={this.handleChange}
                                           placeholder="A title for your recipe"
                                           value={this.state.title}/>
                                </Field>
                                <Field forId="description" msg={this.state.descriptionMsg} label="Description">

                                    <textarea className="textarea" id="description" name="description" required
                                              rows="2"
                                              onChange={this.handleChange}
                                              placeholder="a short description"
                                              value={this.state.description}/>
                                </Field>
                                <div className="form-row">
                                    <Field forId="difficulty" msg={this.state.difficultyMsg} label="Difficulty">
                                        <input className="input" type="text" id="difficulty" name="difficulty"
                                               onChange={this.handleChange}
                                               value={this.state.difficulty}/>
                                    </Field>


                                    <Field forId="cuisine" msg={this.state.cuisineMsg} label="cuisine">
                                        <div className="select is-fullwidth">
                                            <select id="cuisine" name="cuisine" onChange={this.handleChange}
                                                    value={this.state.cuisine}>
                                                <option value="european">European</option>
                                                <option value="south-america">South American</option>
                                                <option value="middle-eastern">Middle Eastern</option>
                                                <option value="asian">Asian</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </Field>
                                </div>
                                <div className="form-row">

                                    <Field forId="_cookTime" msg={this.state._cookTimeMsg} label="cookTime">
                                        <input className="input" type="time" id="_cookTime" name="_cookTime"
                                               onChange={this.handleChange}
                                               value={this.state._cookTime}/>
                                    </Field>
                                    <Field forId="_prepTime" msg={this.state._prepTimeMsg} label="prepTime">
                                        <input className="input" type="time" id="_prepTime" name="_prepTime"
                                               onChange={this.handleChange}
                                               value={this.state._prepTime}/>
                                    </Field>

                                </div>
                                <Field forId="recipeYield" msg={this.state.recipeYieldMsg} label="recipeYield">
                                    <input className="input" type="text" id="recipeYield" name="recipeYield"
                                           onChange={this.handleChange}
                                           placeholder="6 servings"
                                           value={this.state.recipeYield}/>
                                </Field>
                                <Field forId="_ingredients" msg={this.state._ingredientsMsg} label="ingredients">
                                    <textarea className="textarea" id="_ingredients" name="_ingredients"
                                              required
                                              rows="8"
                                              onChange={this.handleChange}
                                              value={this.state.ingredients}/>
                                </Field>

                                {/*uncontrolled!*/}
                                <div className="field">
                                    <div className="file">
                                        <label className="file-label">
                                            <input className="file-input" id="imageFile" required type="file"
                                                   accept=".png, .gif, .jpg, jpeg, .svg"
                                                   ref={this.fileInputRef}/>
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label">
                                                    Upload a picture
                                                </span>

                                            </span>
                                            <span className="message help is-danger">{this.state.imageFileMsg}</span>
                                        </label>
                                    </div>
                                </div>


                                <button type="submit" className="button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AddRecipeForm