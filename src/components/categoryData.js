import React from 'react';

const CategoryData = props => (
  <div>
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src="http://cdn.skim.gs/image/upload/v1456338503/msi/spices_superfood_bmm3yr.jpg" alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <span className="black-text">
                <h5> {props.name} Category </h5> <hr /> Add recipes to this Category <br />
                <a
                  className="btn-floating btn-small waves-effect waves-light pulse
                    modal-trigger"
                  href={`#modal4${props.id}`}
                >
                  <i className="small material-icons"> add_circle </i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryData;
