import React from 'react';

const Shoe = (props) => (
  <div class="col s12 m12 l12">
    {
      <div className="row">
        <div className="card">
          <div className="card-content grey-text text-darken-2">
            <h5 class="card-title">{props.brand} > {props.name}</h5>
            <p>R{props.price.toFixed(2)}</p>            
          </div>
          <div className="card-action">
            <a onClick={() => props.onShoeSelect(props)}>Add To Cart </a>
          </div>
        </div>
      </div>
    }
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;