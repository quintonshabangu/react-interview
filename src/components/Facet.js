import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <ul className="collection">
  {
    countByKey(props.items, "brand").map(function(item){
      return <li className="facet collection-item" onClick={()=> props.onFacetSelect({brand: item.brand,count: item.count })}>{item.brand} ({item.count})</li>
    })
  }
  </ul>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;