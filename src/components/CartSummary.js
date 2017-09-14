import React from 'react';

const CartSummary = (props) => {
  let totalCost = 0;
  
  for (var i = 0; i < props.cart.length; i++) {
    totalCost += props.cart[i].price;
  }

  return (
    <div className="CartSummary">
        <ul className="collection">
        <li className="collection-item"><h5>My Cart</h5></li>
          {
            props.cart.map(function(shoe){
            return <li className="collection-item">
                      <strong>{shoe.brand} > {shoe.name}: R{shoe.price}</strong>
                      <a onClick={() => props.onShoeDelete(shoe)} className="shoe-delete-link red-text text-darken-2">Delete</a>
                   </li>
            })
          }

          <li className="collection-item"><strong>Total Items: </strong> <span id="ItemCount">{props.cart.length}</span></li>
          <li className="collection-item"><strong>Total Cost:</strong> R<span id="TotalCost">{totalCost.toFixed(2)}</span></li>
        </ul>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;