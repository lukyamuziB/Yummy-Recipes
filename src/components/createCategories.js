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
        this.props.createCategories(values)
        .then(() => this.props.history.push("/dashboard"));
        window.location.reload()
    }
   
    render(){
        const {handleSubmit} = this.props;

        return(
            <div>
                 add category 
            <div>
              
            <a className="btn-floating btn-large waves-effect waves-light green modal-trigger" href="#modal1"> <i class="material-icons">add</i></a>
             <div id="modal1" className="modal modal-fixed-footer">
               <div className="modal-content">
               <div className="conatiner">
                    <h5> Create New Category </h5>
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
