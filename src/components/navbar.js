import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div className="row">
            <div className="col s12 m4 l2"><p></p></div>
            <div className="col s12 m4 l8"><p></p>
                <nav className="amber accent-4">
                        <div className="nav-wrapper">
                          <a href="#" className="brand-logo">Yummy Recipes</a>
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li> <Link to="/logout"> Logout </Link></li>
                            <li> <Link to="/dashboard"> Home </Link></li>
                          </ul>
                        </div>
                      </nav>
                </div>
            <div className="col s12 m4 l2"><p></p></div>
        </div>
        );
    }
}

export default Navbar;
