import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = { 
        shoes : [],
        cart : this.retrieveCartFromLocal(),
        facetSelected: null
    }

    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
    this.handleShoeDelete = this.handleShoeDelete.bind(this);
  }

  saveCartToLocal() {
    if (typeof(Storage) !== "undefined") {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

  retrieveCartFromLocal() {
    if (typeof(Storage) !== "undefined") {
      let result = localStorage.getItem("cart");
      if (result == null)
        return [];
      return JSON.parse(result);
    }
    return [];
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api.getShoes().then((result) => {
        this.setState({shoes : result});
    });
  }

  handleShoeSelect (shoe) {
    const newCart = this.state.cart.slice();
    newCart.push(shoe);

    this.setState({cart: newCart}, function(){
      this.saveCartToLocal();
    });
  }

  handleShoeDelete(shoe) {
    let index = this.state.cart.indexOf(shoe);
    if (index > -1) {
      let newCart = this.state.cart.slice();
      newCart.splice(index, 1);
      this.setState({cart: newCart}, function() {
        this.saveCartToLocal();
      });
    }
  }

  filterShoes() {
    if (!this.state.facetSelected)
     return this.state.shoes;

    const brand = this.state.facetSelected.brand; //For some reason 'this' is null inside the filter, so I have to declare the brand outside

    let list = this.state.shoes.filter(function(shoe) {
      return shoe.brand === brand; 
      });

    return list;
  }

  handleFacetSelect(facet) {
    if (!this.state.facetSelected){
      this.setState({facetSelected: facet});
    }
    else if (facet.brand !== this.state.facetSelected.brand) {
      this.setState({facetSelected: facet});
    }
    else {
      this.setState({facetSelected: null});
    }
     
  }

  render() {
    return (
      <div>
        <NavBar title="My App Store" />
        <div className="row">
          <div className="col s3">
            <Facet items={this.state.shoes} 
             onFacetSelect={this.handleFacetSelect} />
          </div>

          <div className="col s6">
            <ShoeList shoes={this.filterShoes()} 
              onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart} 
              onShoeDelete={this.handleShoeDelete}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
function newFunction(result) {
    console.log(result);
}

