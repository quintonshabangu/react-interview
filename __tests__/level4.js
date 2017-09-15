import React from 'react';
import {shallow} from 'enzyme';
import Facet from '../src/components/Facet';
import App from '../src/App';
import {countByKey} from '../src/utils';
import ShoeList from '../src/components/ShoeList';
import Shoe  from '../src/components/Shoe';
import CartSummary from '../src/components/CartSummary';

const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Nike', name: 'Roshe', price: 333.99 },
    { id: 'd', brand: 'Reebok', name: 'Classic Brown', price: 1999.99 },
    { id: 'e', brand: 'Reebok', name: 'Classic White', price: 1999.99 },
    { id: 'f', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
  ];

describe('App', () => {
    it('should have an instance method called `handleShoeSelect`', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.instance().handleShoeSelect).toBeInstanceOf(Function);
      });

    it('cart should decrease when a cart item is deleted', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ cart: mockShoes });
        wrapper.instance().handleShoeDelete(mockShoes[0]);
        expect(wrapper.state().cart.length).toEqual(5);
      })
});

describe('CartSummary', () => {
    it('list items in the Cart summary should increase when item is clicked', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ cart: mockShoes });
      
      const cart = shallow(<CartSummary cart={[]} />)
      expect(cart.find('li').length).toEqual(3);

      wrapper.instance().handleShoeSelect(mockShoes[0], function(){
        expect(cart.find('li').length).toEqual(4);
      });
    })
});