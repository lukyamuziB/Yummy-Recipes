import React, {Component} from 'react';

class NoCategories extends Component{
    render(){
        return(
            <div className="landing-container">
                <div className="in-container">
                <h2> You don't have any categories yet! </h2>
                <button>Create Some </button>
             </div>
            </div>
        );
    }
}

export default NoCategories;
