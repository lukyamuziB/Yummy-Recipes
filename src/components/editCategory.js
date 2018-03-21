import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { editCategories } from '../actions/editCategoriesAction';

class EditCategory extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      name: this.props.name,
      description: this.props.description,
    };
    this.props.initialize(initData);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = 'form-group %{touched && error ? \'has-dangetr\':\'\'}';
    return (
      <div className={className}>
        <lable>{field.label}</lable>
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
    this.props.editCategories(values, this.props.id)
      .then(() => {
        console.log(this.props);
        this.props.history.push('/dashboard');
      });
  }

  render() {
    console.log('jhbdfjhbfdhbvhbdfh');
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          <div id={`modal${this.props.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h3> Edit Category {this.props.id} </h3>
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
                <button type="submit"> Update Category </button>
              </form>
              <div className="modal-footer">
                <p className="modal-action modal-close waves-effect waves-green btn-flat ">
                Cancel
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
  form: 'EditCategoryForm',

})(
  connect(null, { editCategories })(withRouter(EditCategory)),
);
