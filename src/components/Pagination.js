import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchCategories} from '../actions/fetchCategories';
import {fetchRecipes} from '../actions/fetchRecipes';

class Pagination extends Component{
    
    setClassPrevious(){
        const {page, pages} = this.props
        if(page === 1 &&  pages === 1){
            return "waves-effect waves-light btn disabled"
        }else if(page === 1 && pages > 1){
            return "waves-effect waves-light btn disabled"
        }else{
            return "waves-effect waves-light btn"
        }
    }

    setClassNext(){
        const {page, pages} = this.props
        if(this.props.page === this.props.pages){
            return "waves-effect waves-light btn disabled"
        }else{
            return "waves-effect waves-light btn"
        }
    }

    nextPage = () => {
            const {page, fetchCategories, fetchRecipes, type} = this.props
            let next_page = page+1
            if (type === "categories"){
            fetchCategories(`?page=${next_page}`)
        }else{
            fetchRecipes()
        }
    }

    previousPage = () => {
            const {page, fetchCategories,fetchRecipes, type} = this.props
            let previous_page = page-1
            if(type === "categories"){
                fetchCategories(`?page=${previous_page}`)
            }else{
                fetchRecipes()
            }
            
    }
    
    render(){
        return(
            <div>
            <ul className="pagination">
            <button onClick = {this.previousPage} className={this.setClassPrevious()}> <i class="material-icons left">arrow_back</i>Previous</button>
            <button onClick = {this.nextPage} className={this.setClassNext()}><i class="material-icons right">arrow_forward</i>Next</button>
            </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    const {items, page, pages} = state.categories
    return{
      categories:items,
      page:page,
      pages:pages
    }
  }
  
  export default connect(mapStateToProps, {fetchCategories, fetchRecipes}) (Pagination);