import React, {Component} from 'react';
import CraeteCategory from './createCategories';

class NoCategories extends Component{
    render(){
        return(
            <div className="landing-container">
                <div className="in-container">
                <h2> You don't have any categories yet! </h2>
                <CraeteCategory/>
             </div>
            </div>
        );
    }
}

export default NoCategories;
