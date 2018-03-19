import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import toastr from 'toastr';

import {fetchRecipes} from '../actions/fetchRecipes';
import CreateRecipe from './createRecipes';
import EditRecipe from './editRecipe';
import DeleteRecipe from './deleteRecipe';
import Navbar from './navbar';
import CategoryData from './categoryData';
import CreateRecipes from './createRecipes2';
import Search from './search';
import Pagination from './Pagination';


const RecipesCard = (props) =>(
    <div>
    <div className="col s4">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.name}</span>
                <p>{props.description}</p>
            </div>
            <div className="card-action">
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
    if (localStorage.getItem('logedIn')) {
        toastr.info("Login first to view your Recipes")
        return <Redirect to="/login" />;
      }

    window.$(document).ready(function() {
        window.$('.modal').modal();
    });
    const {recipes, category_name, category_id} = this.props
    return(
        <div>
            <div className="landing-container">
             <Navbar/>
                <div className="in-container">
                    <div className="container">
                    <div> 
                    <div className="row">
                        <div className="col s8 ">
                            <CategoryData
                            id = {category_id}
                            name = {category_name}
                            />
                        </div>
                        <div className="col s4 ">
                        <Search 
                        type={recipes}
                        category_id={category_id}
                        />
                        </div>
                    <div/>
                    </div>
                    </div>
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
                                name = {item.name}
                                description = {item.description}
                                />
                                <DeleteRecipe
                                id = {item.id}
                                category_id = {category_id}
                                />
                                <CreateRecipes
                                id = {category_id}
                                category_name = {category_name}
                                />
                            </div>
                        ): <div> <h3>Awww.. its too lonely here (; </h3><br/> <h4>Lets add some recipes.... </h4><br/>
                              <CreateRecipes
                                id = {category_id}
                                category_name = {category_name}
                                />
                         </div>
                    }
                </div>
                {/* <Pagination
                  type="recipes"
                  /> */}
            </div>
        </div>
      </div>
    </div>
  );
}
}


function mapStateToProps(state, ownProps){
    const {recipes, name, id} = state.recipes
    return{
        recipes:recipes,
        category_name:name,
        category_id:id
    }
}

export default connect(mapStateToProps, {fetchRecipes})(Recipes);
