import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm } from 'redux-form';
// import { hashHistory } from 'react-router';

import editCategories from '../actions/editCategoriesAction';


class EditCategory extends Component{
    
    constructor(props){
        super(props.category);
        console.log("jjjjjjjj", props);
        if (props.category){
            this.state = props.category
        }else{
            this.state={
            name:'',
            description:''
            }
        }
        
    }
   
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

    onSubmit(values, id){
        this.props.editCategories(values, this.props.id, () => {
            this.props.history.push("/dashboard")
        });

    }
   
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
            <div>
             <div id={`modal${this.props.id}`} className="modal modal-fixed-footer">
               <div className="modal-content">
               <h3> Edit Category {this.props.id} </h3>
               <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
               <Field
                label="Name"
                name="name"
                type="text"
                value={this.props.names}
                component={this.renderField}
                />
                <Field
                label="Description"
                name="description"
                type="text"
                value={this.props.descriptions}
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
      categories:state.categories
    }
  }


export default reduxForm({
    validate,
    form:'EditCategoryForm'
    
}) (
    connect(null,{editCategories})(withRouter(EditCategory))
);
