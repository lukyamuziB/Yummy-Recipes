import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchCategories } from '../actions/fetchCategories';
import { fetchRecipes } from '../actions/fetchRecipes';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: false,
    };
  }

  prefix() {
    if (this.props.type === 'categories') {
      return 'Search Categories';
    } else {
      return 'Search Recipes';
    }
  }

    searcher = () => {
      if (this.props.type === 'categories') {
        this.props.fetchCategories('?q=');
      } else {
        this.props.fetchRecipes(this.props.category_id);
      }
    }


    queried = (e) => {
      this.setState({ query: e.target.value });
    }

    result = () => {
      const filteredResults = this.props.categories.filter((category) => _.toLower(category.name)
        .includes(_.toLower(this.state.query))).map((category) => category);
      console.log(filteredResults);
    }

    render() {
      return (
        <form >
          <div className="row">
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <input onClick={this.searcher} onChange={this.queried} onInput={this.result} id="icon_prefix" type="search" className="validate" />
              <label htmlFor="icon_prefix">{this.prefix()}</label>
            </div>
          </div>
        </form>
      );
    }
}

function mapStateToProps(state, ownProps) {
  const { items } = state.categories;
  return {
    categories: items,
  };
}

export default connect(mapStateToProps, { fetchCategories, fetchRecipes })(Search);
