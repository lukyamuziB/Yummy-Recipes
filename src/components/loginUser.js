import React , {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {bindActionCreators} from 'redux';

class Login extends Component{
    
    renderField(field) {
        const{meta:{touched,error}} = field;  
        const className = `form-group %{touched && error ? 'has-dangetr':''}`
        return(
            <div className={className}>
            <lable> {field.label} </lable>
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
        console.log(values)
        console.log(this.props.actions)
        console.log(this.props.login)
        this.props.login(values).then(() =>{
            this.props.history.push("/dashboard");
        });    
    }

    render(){
        const {handleSubmit} = this.props;
     
        // if (localStorage.getItem('isLoggedIn')) {
        //     return <Redirect to="/dashboard" />;
        //   }

        return(
            <div>
              <div className="landing-container">
                <div className="in-container">
                <div className="inner">
                    <p> Login Here</p>
                        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                            label="Username"
                            name="username"
                            type="text"
                            component={this.renderField}
                            />
                            <Field
                            label="Password"
                            name="password"
                            type="password"
                            component={this.renderField}
                                />
                            <button className="btn btn-primary" type="submit">login</button>
                            <br/> Don't have an account yet?  <Link to="/register"> Register here </Link>
                        </form>
                </div>
                </div>
              </div>
        </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        message:state.message
    }
}


export default reduxForm({
    form:'LoginForm'

}) (
   connect(mapStateToProps, {login})(Login)
);

