import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';


import deleteRecipe from '../actions/deleteRecipesAction';

class DeleteRecipe extends Component {
deleteRecipes = (id) => {
  this.props.deleteRecipe(this.props.id)
    .then(() => {
      this.props.history.push(`/view_recipes/${this.props.category_id}`);
    },
    );
  window.location.reload();
  toastr.info('sampling this');
}

render() {
  return (
    <div>
      <div id={`modal90${this.props.id}`} className="modal">
        <div className="modal-content">
          {this.props.category_id}
          <h5> Are you sure want to delete this Recipe? </h5><hr />
          <p> This can't be undone </p>
          <button onClick={this.deleteRecipes}> Delete </button>
          <p className="modal-action modal-close waves-effect waves-green btn-flat"> Cancel  </p>
        </div>
      </div>
    </div>
  );
}
}

export default connect(null, { deleteRecipe })(withRouter(DeleteRecipe));
