import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {fetchCategories} from '../actions/fetchCategories';
import NoCategories from './noCategories';
import CreateCategory from './createCategories';
import EditCategory from './editCategory';
import editCategory from '../actions/editCategoriesAction';
import DeleteCategory from './deleteResource';
import Recipes from './recipesPage';


const CategoryCard = (props)=> (
  <div>
    <div className="col s4">
            <div className="card" >
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={"http://alluretouch.com/wp-content/uploads/2015/09/spoon-of-coffee.jpg" } />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4"> {props.name} <i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
                      <p>{props.description}</p> 
                      <div className="card-icons">
                      <Link to={`view_recipes/${props.id}`}> <i class="small material-icons blue-text text-darken-4">visibility</i> </Link>
                      <Link to={`create_recipes/${props.id}`}> <i class="small material-icons blue-text text-darken-4"> add_circle </i> </Link>
                      <a className="modal-trigger" href={`#modal${props.id}`}><i class="small material-icons blue-text text-darken-4"> edit </i></a>
                      <a className="modal-trigger" href={`#modal2${props.id}`}><i class="small material-icons red-text text-darken-4">delete</i></a>
                    </div>
                    </div>
            </div>
    </div>
</div>     
);

class Dashboard extends Component {

   componentDidMount(){
     this.props.fetchCategories()
     
   }


  render(){
     window.$(document).ready(function() {
      window.$('.modal').modal();
  });
    const {categories} = this.props;  ``
        return(
          <div>

             <div> 
               <CreateCategory/>
             </div>
             <div className="landing-container">
              <div className="in-container">
                <div className="container">
                <div className="row">
                    { 
                      categories && categories.length>0 ?
                      categories.map(item =>
                        <div>
                      < CategoryCard 
                      key={item.id}
                      id = {item.id}
                      name = {item.name}
                      description = {item.description}
                      />
                       <EditCategory
                       id = {item.id}
                       names = {item.name}
                       descriptions = {item.description}
                       />
                       <DeleteCategory
                       id = {item.id}
                       />
                      </div>
                    ): <div> <NoCategories/> </div>
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
    categories:state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories}) (Dashboard);