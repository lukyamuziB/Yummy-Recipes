import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm } from 'redux-form';
import {createRecipes} from '../actions/createRecipesAction'

class CreateRecipe extends Component{
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
        const id = parseInt(this.props.match.params.id, 10)
        const newValues = Object.assign({}, values, { category_id: id });
        this.props.createRecipes(newValues)
        .then(() => {this.props.history.push("/dashboard")
                window.location.reload()
            })
    }
   
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
            <div className="landing-container">
              <div className="in-container">
              <div className="inner">
                <div className="container">
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
    
                    <Link to="/dashboard" className="modal-action modal-close waves-effect waves-green btn-flat ">Cancel</Link>
                </form>
             
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

function mapStateToProps(state, ownProps){
    return{
        recipes:state.recipes
    }
}


export default reduxForm({
    validate,
    form:'NewRecipeForm'
    
}) (
    connect(mapStateToProps, {createRecipes})(CreateRecipe)
);
