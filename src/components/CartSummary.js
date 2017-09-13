import React from 'react';

const CartSummary = (props) => {
  let totalCost = 0;
  
  for (var i = 0; i < props.cart.length; i++) {
    totalCost += props.cart[i].price;
  }

  return (
    <div className="CartSummary">
      <h5>My Cart</h5>
      <p><strong>Total Items: </strong> <span id="ItemCount">{props.cart.length}</span></p>
      <p><strong>Total Cost:</strong> <span id="TotalCost">{totalCost.toFixed(2)}</span></p>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;