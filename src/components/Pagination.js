import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchCategories} from '../actions/fetchCategories';

class Pagination extends Component{
    
    setClassPrevious(){
        if(this.props.page == 1 &&  this.props.pages == 1){
            return "waves-effect waves-light btn disabled"
        }else if(this.props.page == 1 && this.props.pages > 1){
            return "waves-effect waves-light btn disabled"
        }else{
            return "waves-effect waves-light btn"
        }
    }

    setClassNext(){
        if(this.props.page == this.props.pages){
            return "waves-effect waves-light btn disabled"
        }else{
            return "waves-effect waves-light btn"
        }
    }

    nextPage = () => {
            const {page} = this.props
            let next_page = page+1
            if (this.props.type == "categories"){
            this.props.fetchCategories(`?page=${next_page}`)
        }
    }

    previousPage = () => {
            let previous_page = this.props.page-1
            this.props.fetchCategories(`?page=${previous_page}`)
    }
    
    render(){
        console.log(this.props)
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
  
  export default connect(mapStateToProps, {fetchCategories}) (Pagination);