import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import _ from 'lodash';
import toastr from 'toastr';

import { fetchCategories } from '../actions/fetchCategories';
import NoCategories from './noCategories';
import CreateCategory from './createCategories';
import EditCategory from './editCategory';
import editCategory from '../actions/editCategoriesAction';
import DeleteCategory from './deleteResource';
import Recipes from './recipesPage';
import Navbar from './navbar';
import CreateRecipes from './createRecipes2';
import Pagination from './Pagination';


export const CategoryCard = props => (
  <div>
    <div className="col s4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="https://foodiefactor.com/wp-content/uploads/2017/07/coffee-spoon-1000x667.jpg"
            alt=" "
          />
        </div>
        <div className="card-content">
          <span id="catName" className="card-title activator grey-text text-darken-4">
            {' '}
            {props.name} <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {props.name}
            <i className="material-icons right">close</i>
          </span>
          <p>{props.description}</p>
          <div className="card-icons">
            <Link to={`view_recipes/${props.id}`}>
              {' '}
              <i className="small material-icons blue-text text-darken-4">
                visibility
              </i>{' '}
            </Link>
            <a className="modal-trigger" href={`#modal4${props.id}`}>
              {' '}
              <i className="small material-icons blue-text text-darken-4">
                add_circle
              </i>
            </a>
            <a className="modal-trigger" href={`#modal${props.id}`}>
              <i className="small material-icons blue-text text-darken-4"> edit </i>
            </a>
            <a className="modal-trigger" href={`#modal2${props.id}`}>
              <i className="small material-icons red-text text-darken-4">delete</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: false,
      category: [],
      search: false,
    };
    this.clearr = this.clearr.bind(this);
  }

  searcher = () => {
    this.setState({ search: true });
    this.props.fetchCategories('?q=');
  };

  queried = e => {
    this.setState({ query: e.target.value || '' });
  };

  result = () => {
    const categoriesToBeUsed = this.props.categories
      .filter(category =>
        _.toLower(category.name).includes(_.toLower(this.state.query || '')),
      )
      .map(category => category);
    this.setState({ category: categoriesToBeUsed });
  };

  clearr = () => {
    this.setState({ search: false });
    this.props.fetchCategories();
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    if (localStorage.getItem('logedIn')) {
      toastr.info('Login first to access dashboard');
      return <Redirect to="/login" />;
    }
    let { categories } = this.props;

    if (this.state.search === true) {
      categories = this.state.category
        .filter(category =>
          _.toLower(category.name).includes(_.toLower(this.state.query || '')),
        )
        .map(category => category);
    }


    return (
      <div>
        <div />
        <div className="landing-container">
          <Navbar />
          <div className="in-container">
            <div className="container">
              <div className="row">
                <div className="col s4">
                  <p>
                    Welcome to your yummy recipes account<br />
                    Click on a category card to continue or create one if you
                    don't have one yet
                  </p>
                </div>
                <div className="col s4">
                  <CreateCategory />
                </div>
                <div className="col s4">
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
              </div>
              <div className="row">
                {categories && categories.length > 0 ? (
                  categories.map(item => (
                    <div>
                      <CategoryCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                      />
                      <EditCategory
                        id={item.id}
                        name={item.name}
                        description={item.description}
                      />
                      <DeleteCategory id={item.id} />
                      <CreateRecipes id={item.id} category_name={item.name} />
                    </div>
                  ))
                ) : (
                  <div>
                    {' '}
                    <NoCategories />{' '}
                  </div>
                )}
              </div>
              <Pagination type="categories" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { items } = state.categories;
  return {
    categories: items,
  };
}

export default connect(mapStateToProps, { fetchCategories })(Dashboard);
