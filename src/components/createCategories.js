import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm } from 'redux-form';
import createCategories from '../actions/createCategoriesAction';

class CreateCategory extends Component{
   
    renderField(field) {
        const{meta:{touched,error}} = field;
        const className = `form-group %{touched && error ? 'has-dangetr':''}`
        return(
            <div className={className}>
            <lable>{field.label}</lable>
            <input
                className="form-control"
                type={field.type}
                {...field.input}
            />
            {touched? error:''}
           </div>
        );
    }


    onSubmit(values){
        console.log(values);
        this.props.createCategories(values, () => {
            this.props.history.push("/dashboard")
        });
    }
   
    render(){
        const {handleSubmit} = this.props;

        return(
            <div>
                
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1"> Modal</a>
          
             <div id="modal1" className="modal modal-fixed-footer">
               <div className="modal-content">
               <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit"> Create </button>
                </form>
              <div className="modal-footer">
                <Link to="/dashboard" className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</Link>
              </div>
            </div>
         </div>
         </div>
     );
    }
}

function validate(values){
    const errors = {}
    if(! values.title){
        errors.title = "Enter a title";
    }
    if (! values.categories){
        errors.categories = "Enter a category";
    }
    if(! values.content){
        errors.content = "Enter some content";
    }
}


export default reduxForm({
    validate,
    form:'NewCategoryForm'
    
}) (
    connect(null, {createCategories})
    (withRouter(CreateCategory))
);
