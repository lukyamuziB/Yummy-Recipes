import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createRecipes } from '../actions/createRecipesAction';

class CreateRecipes extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = 'form-group %{touched && error ? \'has-danger\':\'\'}';
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


  onSubmit(values) {
    const id = this.props.id;
    const newValues = Object.assign({}, values, { category_id: id });
    this.props.createRecipes(newValues)
      .then(() => {
        this.props.history.push(`/view_recipes/${this.props.id}`);
        window.location.reload();
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div>
          <div id={`modal4${this.props.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <div className="conatiner">
                <h5> Add Recipe to {this.props.category_name} Category</h5>
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
                  <button type="submit"> Create Recipe </button>
                </form>
                <div className="modal-footer">
                  <p className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</p>
                </div>
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
  form: 'NewRecipeForm',

})(
  connect(null, { createRecipes })(withRouter(CreateRecipes)),
);
