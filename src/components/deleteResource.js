import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import deleteCategory from '../actions/deleteCategoryAction';

class DeleteCategory extends Component {
deleteCategories = (id) => {
  this.props.deleteCategory(this.props.id).then(() =>
    this.props.history.push('/dashboard'));
}

render() {
  return (
    <div>
      <div id={`modal2${this.props.id}`} className="modal">
        <div className="modal-content">
          {this.props.id}
          <h5> Are you sure want to delete this Category? </h5>
          <button onClick={this.deleteCategories}> Delete </button>
          <Link to="/dashboard"> <button> Cancel </button> </Link>
        </div>
      </div>
    </div>
  );
}
}

export default connect(null, { deleteCategory })(withRouter(DeleteCategory));
