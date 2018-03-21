import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { editRecipes } from '../actions/editRecipesAction';

class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      description: this.props.recipe.description,
    };
  }
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initialData = {
      name: this.state.name,
      description: this.state.description,
    };
    this.props.initialize(initialData);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = 'form-group %{touched && error ? \'has-dangetr\':\'\'}';
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        {touched ? error : ''}
      </div>
    );
  }

  onSubmit(values, id) {
    this.props.editRecipes(values, this.props.id).then(() =>
      this.props.history.push(`/view_recipes/${this.props.category_id}`));
    window.location.reload();
  }

  render() {
    console.log(this.props.recipe.name, this.props.id);
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          <div id={`modal7${this.props.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h3> Edit Recipe {this.props.id} </h3>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  label="Description"
                  name="description"
                  type="text"
                  component={this.renderField}
                />
                <button type="submit"> Update Recipe </button>
              </form>
              <div className="modal-footer">
                <p className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }
}


export default reduxForm({
  validate,
  form: 'EditRecipeForm',

})(
  connect(null, { editRecipes })(withRouter(EditRecipe)),
);
