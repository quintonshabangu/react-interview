import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';

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
        cart : []
    }

    this.handleShoeSelect = this.handleShoeSelect.bind(this);
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api.getShoes().then((result) => {
        this.setState({shoes : result});
        console.log(this.state.shoes);
    });

  }

  handleShoeSelect (shoe) {
    const newCart = this.state.cart.slice();
    newCart.push(shoe);

    this.setState({cart: newCart});
  }

  render() {
    return (
      <div>
        <NavBar title="My App Store" />
        <div className="row">
          <div className="col s3">
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} 
              onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart} />
          </div>
        </div>
      </div>

    );
  }s
}

export default App;
function newFunction(result) {
    console.log(result);
}

