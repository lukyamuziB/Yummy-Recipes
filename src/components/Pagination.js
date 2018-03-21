import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../actions/fetchCategories';
import { fetchRecipes } from '../actions/fetchRecipes';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.toNextPage = this.toNextPage.bind(this);
    this.toPreviousPage = this.toPreviousPage.bind(this);
  }

  setClassPrevious() {
    const { page, pages } = this.props;
    if (page === 1 && pages === 1) {
      return 'waves-effect waves-light btn disabled';
    } else if (page === 1 && pages > 1) {
      return 'waves-effect waves-light btn disabled';
    } else {
      return 'waves-effect waves-light btn';
    }
  }

  setClassNext() {
    const { page, pages } = this.props;
    if (this.props.page === this.props.pages) {
      return 'waves-effect waves-light btn disabled';
    } else {
      return 'waves-effect waves-light btn';
    }
  }

    toNextPage = () => {
      const { page, type } = this.props;
      const nextPage = page + 1;
      if (type === 'categories') {
        this.props.fetchCategories(`?page=${nextPage}`);
      }
    }

    toPreviousPage = () => {
      const { page, type } = this.props;
      const previousPage = page - 1;
      if (type === 'categories') {
        this.props.fetchCategories(`?page=${previousPage}`);
      }
    }

    render() {
      return (
        <div>
          <ul className="pagination">
            <button onClick={this.toPreviousPage} className={this.setClassPrevious()}> <i className="material-icons left">arrow_back</i>Previous</button>
            <button onClick={this.toNextPage} className={this.setClassNext()}><i className="material-icons right">arrow_forward</i>Next</button>
          </ul>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  const { items, page, pages } = state.categories;
  return {
    categories: items,
    page: page,
    pages: pages,
  };
}

export default connect(mapStateToProps, { fetchCategories })(Pagination);
