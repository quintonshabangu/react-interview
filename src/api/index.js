const shoes = [
  { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
  { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
  { id: 'c', brand: 'Reebok', name: 'Classic', price: 1999.99 },
  { id: 'd', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 },
  { id: 'e', brand: 'Adidas', name: 'Superstar', price: 1200.00 },
  { id: 'f', brand: 'Adidas', name: 'Stan Smith', price: 900.00 },
  { id: 'g', brand: 'Converse', name: 'All Stars', price: 900.00 },
  { id: 'h', brand: 'Converse', name: 'Jack Purcell', price: 900.00 }
];

export default {
  getShoes: function () {
    return new Promise((resolve) => {
      resolve(shoes);
    })
  }
}