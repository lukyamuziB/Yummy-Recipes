import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import toastr from 'toastr';
import _ from 'lodash';

import { fetchRecipes } from '../actions/fetchRecipes';
import CreateRecipe from './createRecipes';
import EditRecipe from './editRecipe';
import DeleteRecipe from './deleteRecipe';
import Navbar from './navbar';
import CategoryData from './categoryData';
import CreateRecipes from './createRecipes2';
import Search from './search';
import Pagination from './Pagination';


const RecipesCard = props => (
  <div>
    <div className="col s4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.name}</span>
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a className="modal-trigger" href={`#modal7${props.id}`}>EDIT RECIPE</a>
          <a className="modal-trigger" href={`#modal90${props.id}`}>DELETE RECIPE</a>
        </div>
      </div>
    </div>
  </div>
);


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: false,
      recipe: [],
      search: false,
    };
    this.clearr = this.clearr.bind(this);
  }

  searcher = () => {
    this.setState({ search: true });
    this.props.fetchRecipes('?q=');
  };

  queried = e => {
    this.setState({ query: e.target.value || '' });
  };

  result = () => {
    const recipesToBeUsed = this.props.recipes
      .filter(recipe =>
        _.toLower(recipe.name).includes(_.toLower(this.state.query || '')),
      )
      .map(recipe => recipe);
    this.setState({ recipe: recipesToBeUsed });
  };

  clearr = () => {
    const id = this.props.match.params.id;
    this.setState({ search: false });
    this.props.fetchRecipes(id);
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchRecipes(id);
  }

  render() {
    if (localStorage.getItem('logedIn')) {
      toastr.info('Login first to view your Recipes');
      return <Redirect to="/login" />;
    }

    const { categoryName, categoryId } = this.props;
    let { recipes } = this.props;

    if (this.state.search === true) {
      recipes = this.state.recipe
        .filter(recipe =>
          _.toLower(recipe.name).includes(_.toLower(this.state.query || '')),
        )
        .map(recipe => recipe);
    }

    return (
      <div>
        <div className="landing-container">
          <Navbar />
          <div className="in-container">
            <div className="container">
              <div>
                <div className="row">
                  <div className="col s8 ">
                    <CategoryData
                      id={categoryId}
                      name={categoryName}
                    />
                  </div>
                  <div className="col s4 ">
                    <form>
                      <div className="row">
                        <div className="input-field">
                          <i className="material-icons prefix">search</i>
                          <input
                            onClick={this.searcher}
                            onChange={this.queried}
                            onInput={this.result}
                            id="icon_prefix"
                            type="search"
                            className="validate"
                          />
                          <label htmlFor="icon_prefix">Search Categories</label>
                        </div>
                      </div>
                    </form>
                    <div>
                      <button onClick={this.clearr} className="btn btn-samll blue">
                        <i className="material-icons left">
                          clear_all
                        </i>Clear Search
                      </button>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
              <div className="row">
                {
                  recipes && recipes.length > 0 ?
                      recipes.map(item =>
                        <div key={item.id}>

                          <RecipesCard
                            id={item.id}
                            name={item.name}
                            description={item.description}
                          />
                          <EditRecipe
                            key={item.id}
                            id={item.id}
                            category_id={this.props.match.params.id}
                            recipe={item}
                          />
                          {item.name}
                          <DeleteRecipe
                            id={item.id}
                            category_id={categoryId}
                          />
                          <CreateRecipes
                            id={categoryId}
                            category_name={categoryName}
                          />
                        </div>,
                      ) :
                      <div> <h5>Awww.. its too lonely here (; </h5><br />
                        <h4>
                        Either you haven't created any recipes or no recipes match you query
                        </h4><br />
                        <CreateRecipes
                          id={categoryId}
                          category_name={categoryName}
                        />
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


function mapStateToProps(state, ownProps) {
  const { recipes, name, id } = state.recipes;
  return {
    recipes: recipes,
    categoryName: name,
    categoryId: id,
  };
}

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
