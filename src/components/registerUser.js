import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import registerUser from '../actions/register';
~

class RegisterUser extends Component {

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
        this.props.registerUser(values, () => {
            this.props.history.push("/login")
        });

    }

    render(){ 
        const {handleSubmit} = this.props;
        return(
            <div className="landing-container">
            <div className="in-container">
              <div className="inner">
                <div className="container">
                <p> Register Here</p>
                        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Name"
                                name="name"
                                type="text"
                                component={this.renderField}
                            />
                            <Field
                                label="Username"
                                name="username"
                                type="text"
                                component={this.renderField}
                            />
                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                component={this.renderField}
                            />
                            <Field
                                label="Password"
                                type="password"
                                name="password"
                                component={this.renderField}
                            />
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <br/> Alreday Have an Account? 
                            <Link to="/login"> Login Here </Link>
                    </form>
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
    form:'RegisterForm'
    
}) (
    connect(null, {registerUser})
);





