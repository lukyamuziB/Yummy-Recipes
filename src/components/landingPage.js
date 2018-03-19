import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="landing-container">
          <div className="in-container">
            <div className="inner">
              <div className="buttons">
                <Link to="/login"> <button> login </button> </Link>
                <Link to="/register"> <button > register </button> </Link>
              </div>
              <div className="intro">
                <h3>Yummy recipes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
