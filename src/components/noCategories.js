import React, { Component } from 'react';
import CraeteCategory from './createCategories';

class NoCategories extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="in-container">
          <h2> Ooopss.... <br /> You don't have any categories yet! </h2>
        </div>
      </div>
    );
  }
}

export default NoCategories;
