import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {userLogout} from '../actions/userAuth';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Navbar extends Component {

 logOutUser = () => {
      this.props.userLogout()
      .then(() => { 
      localStorage.clear()
      this.props.history.push("/") 
   });   // window.location.reload()
    }

    render(){
        return(
            <div className="row">
            <div className="col s12 m4 l2"><p></p></div>
            <div className="col s12 m4 l8"><p></p>
                <nav className="amber lighten-2">
                        <div className="nav-wrapper black-text text-darken-2">
                          <a href="/dashboard" className="brand-logo"><span className="black-text text-darken-2">Yummy Recipes </span></a>
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li> <button onClick={this.logOutUser}>  <span className="black-text text-darken-2">Logout</span> </button> </li>
                            <li> <Link to="/dashboard"><span className="black-text text-darken-2"> Home </span> </Link></li>
                          </ul>
                        </div>
                      </nav>
                </div>
            <div className="col s12 m4 l2"><p></p></div>
        </div>
        );
    }
}

export default withRouter(connect(null, {userLogout})(Navbar));
