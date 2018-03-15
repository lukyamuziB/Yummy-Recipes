import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


import deleteRecipe from '../actions/deleteRecipesAction';

class DeleteCategory extends Component{

deleteRecipes = (id) => {
    this.props.deleteRecipe(this.props.id).then(()=>
        window.location.reload())
}

    render(){
        return(
            <div>
             <div id={`modal2${this.props.id}`} class="modal">
              <div class="modal-content">
              {this.props.id}
                <h5> Are you sure want to delete this Recipe? </h5>
                <button onClick = {this.deleteRecipes}> Delete </button>
                <p className="modal-action modal-close waves-effect waves-green btn-flat"> Cancel  </p>
              </div>
            </div>
          </div>
        );
    }
}

export default connect(null, {deleteRecipe})(DeleteCategory)