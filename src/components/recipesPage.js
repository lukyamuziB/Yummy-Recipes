import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';

import _ from 'lodash';

import {fetchRecipes} from '../actions/fetchRecipes';
import CreateRecipe from './createRecipes';
import EditRecipe from './editRecipe';
import DeleteRecipe from './deleteRecipe';


const RecipesCard = (props) =>(
    <div>
    <div className="col s4">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">{props.name}</span>
                <p>{props.description}</p>
            </div>
            <div class="card-action">
                <a className="modal-trigger" href={`#modal3${props.id}`}>EDIT RECIPE</a>
                <a className="modal-trigger" href={`#modal2${props.id}`}>DELETE RECIPE</a>
                
            </div>
            </div>
    </div>
</div> 
);


class Recipes extends Component{
    

componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchRecipes(id)
    }

render(){
    window.$(document).ready(function() {
        window.$('.modal').modal();
    });
    const {recipes} = this.props
    console.log("mbwaaa", recipes)
    return(
        <div>
            <div className="landing-container">
                <div className="in-container">
                    <div className="container">
                      <div className="row">
                    {
                        recipes && recipes.length > 0?
                        recipes.map(item =>
                            <div>
                                <RecipesCard
                                key={item.id}
                                id = {item.id}
                                name = {item.name}
                                description = {item.description}
                                />
                                <EditRecipe
                                id = {item.id}
                                category_id = {this.props.match.params.id}
                                />
                                <DeleteRecipe
                                id = {item.id}
                                />
                            </div>
                        ): <div> Nothing here yet....<br/>
                              <Link to={`/create_recipes/${this.props.match.params.id}`}>create here </Link>
                         </div>
                    }
                </div>
            </div>
        </div>
      </div>
    </div>

    );

}
}

function mapStateToProps(state, ownProps){
    return{
        recipes:state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(Recipes);
